import React from 'react';
import { observer, inject } from 'mobx-react';
import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

@inject('user')
@observer
class SelfDatingChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
    this.nameRef = React.createRef();
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);

    this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}/chat`, {
      // this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}`, {
      path: '/socket.io',
      transports: ['websocket'],
    });
  }

  componentDidMount() {
    // this.socket.on('test', data => {
    //   console.log('on test', { data });
    // });
    this.socket.on('s2c chat', data => {
      console.log('on s2c chat', { data });
      const { name, msg } = data;
      const { log } = this.state;
      this.setState({ log: [...log, { name, msg }] });
    });
    this.socket.emit('join', {});
  }

  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.close();
  }

  handleClick(event) {
    event.preventDefault();
    this.socket.emit('chat', {
      name: this.nameRef.current.value,
      msg: this.inputRef.current.value,
    });
    this.inputRef.current.value = '';
  }

  render() {
    const { log } = this.state;
    return (
      <div className="self-dating-chat">
        {`name: `}
        <input type="text" ref={this.nameRef} />
        <br />
        {`input: `}
        <input type="text" ref={this.inputRef} />
        <input type="button" value="보내기" onClick={this.handleClick} />
        {!log ? '' : log.map(val => <div>{`${val.name}: ${val.msg}`}</div>)}
      </div>
    );
  }
}

export default SelfDatingChat;
