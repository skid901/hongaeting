import React from 'react';
import { observer, inject } from 'mobx-react';
import socketIoClient from 'socket.io-client';
import axios from 'axios';

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
    this.setSocketEvent = this.setSocketEvent.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.socket = socketIoClient(`${process.env.REACT_APP_DOMAIN}/chat`, {
      path: '/socket.io',
      transports: ['websocket'],
    });
  }

  componentDidMount() {
    this.setSocketEvent();
  }

  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.close();
  }

  async setSocketEvent() {
    const { user, history } = this.props;
    const { roomId, log } = this.state;
    try {
      const { data } = await axios.post(`/api/chat/checkUser`, {
        roomId,
        email: user.email,
      });
      console.log({ data });
      if (data.message === 'entryDenied') {
        this.handleAlert('접근 권한 오류', '접근 권한이 없습니다.');
        alert.history.push(`/errorpage`);
      }
      this.socket.on('log', res => {
        const { chatLogList } = res;
        console.log({ chatLogList });
        this.setState({ log: [...log, ...chatLogList] });
      });
      this.socket.emit('log', {
        roomId,
        email: user.email,
      });
      this.socket.on('chat', res => {
        const { chatLog } = res;
        console.log({ chatLog });
        this.setState({ log: [...log, ...chatLog] });
      });
    } catch (e) {
      history.push(`/errorpage`);
    }
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
    console.log({ user });
    this.socket.emit('chat', {
      roomId,
      email: user.email,
      msg: this.inputRef.current.value,
    });
    this.inputRef.current.value = '';
  }

  render() {
    const { roomId, log } = this.state;
    return (
      <div className="self-dating-chat">
        <div>{`채팅방 ID : ${roomId}`}</div>
        {`input: `}
        <input type="text" ref={this.inputRef} />
        <input type="button" value="보내기" onClick={this.handleClick} />
        {log.length &&
          log.map(val => (
            <div key={val.chatNum}>{`${val.user.nickName} : ${val.chat}`}</div>
          ))}
      </div>
    );
  }
}

export default SelfDatingChat;
