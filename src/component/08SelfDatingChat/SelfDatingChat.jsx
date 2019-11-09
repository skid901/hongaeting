import React from 'react';
import { observer, inject } from 'mobx-react';
import socketIoClient from 'socket.io-client';
import moment from 'moment';

import './SelfDatingChat.scss';

@inject('user', 'alert')
@observer
class SelfDatingChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.match.params.roomId,
      log: [],
    };
    this.alert = props.alert;
    this.inputRef = React.createRef();
    this.chatWrapperRef = React.createRef();
    this.handleAlert = this.handleAlert.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendChat = this.sendChat.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.setScrollFloor = this.setScrollFloor.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.socket = socketIoClient(`${process.env.REACT_APP_DOMAIN}/chat`, {
      path: '/socket.io',
      transports: ['websocket'],
    });
  }

  componentDidMount() {
    const { user, history } = this.props;
    const { roomId } = this.state;
    this.socket.on('log', res => {
      const { chatLogList, message } = res;
      if (message && message === 'entryDenied') {
        this.handleAlert('접근 권한 오류', '접근 권한이 없습니다.');
        history.push(`/errorpage`);
        return;
      }
      this.setState({ log: [...chatLogList] });
    });
    this.socket.emit('log', {
      roomId,
      email: user.email,
    });
    this.socket.on('chat', res => {
      const { chatLog } = res;
      const { log } = this.state;
      this.setState({ log: [...log, ...chatLog] });
    });
  }

  componentDidUpdate() {
    this.setScrollFloor();
  }

  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.close();
  }

  setScrollFloor() {
    const element = this.chatWrapperRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }

  sendChat(event) {
    event.preventDefault();
    if (this.inputRef.current.value === '') return;
    const { roomId } = this.state;
    const { user } = this.props;
    this.socket.emit('chat', {
      roomId,
      email: user.email,
      msg: this.inputRef.current.value,
    });
    this.inputRef.current.value = '';
  }

  sendImage(event) {
    event.preventDefault();
    const { roomId } = this.state;
    const { user } = this.props;

    // Function that returns a promise to read the file data url
    const reader = file => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
      });
    };
    reader(event.target.files[0]).then(result => {
      this.socket.emit('chat', {
        roomId,
        email: user.email,
        image: result,
      });
    });
  }

  handleAlert($title, $message) {
    this.alert.setIsOpen(true);
    this.alert.setTitle(`${$title}`);
    this.alert.setMessage(`${$message}`);
  }

  handleClick(event) {
    event.preventDefault();
    const { roomId } = this.state;
    const { user } = this.props;
    this.socket.emit('chat', {
      roomId,
      email: user.email,
      msg: this.inputRef.current.value,
    });
    this.inputRef.current.value = '';
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.sendChat(event);
    }
  }

  render() {
    const { user } = this.props;
    const { log } = this.state;
    return (
      <div className="self-dating-chat">
        <div className="chat-frame">
          <div className="chat-wrapper" ref={this.chatWrapperRef}>
            {log &&
              log.map(curr => {
                return (
                  <div
                    className={`chat-log-${
                      curr.user.nickName !== user.nickName ? 'left' : 'right'
                    }`}
                    key={curr.chatNum}
                  >
                    <div className="chat-nick">{curr.user.nickName}</div>
                    <div className="chat-bubble">
                      {!curr.image ? (
                        <div className="chat-contents">{`${curr.chat}`}</div>
                      ) : (
                        <img
                          className="img-contents"
                          src={curr.image}
                          alt="img"
                        />
                      )}
                      <div className="chat-arrow" />
                    </div>
                    <div className="chat-date">
                      {`${moment(curr.createdAt).format('hh:mm')}`}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="input-frame">
          <div className="input-wrapper">
            <input
              className="input-chat"
              type="textarea"
              placeholder="채팅을 입력해주세요."
              ref={this.inputRef}
              onFocus={this.setScrollFloor}
              onKeyUp={this.handleKeyUp}
            />
            <label className="send-image" htmlFor="send-image">
              <input
                id="send-image"
                className="send-image-input"
                type="file"
                name="image"
                accept="image/*"
                onChange={this.sendImage}
              />
            </label>
            <button
              className="send-chat"
              type="button"
              onClick={this.sendChat}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SelfDatingChat;
