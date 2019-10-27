import React, { useState, useEffect, useRef } from 'react';
import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

// function SelfDatingChat() {
//   const inputRef = useRef('');
//   const [chat, setChat] = useState([]);
//   const [socket, setSocket] = useState(
//     socketIoClient(process.env.REACT_APP_API_URI, {
//       path: '/socket.io',
//     }),
//   );
//   useEffect(() => {
//     // socket.on('test', data => {
//     //   console.log('on test', { data });
//     // });
//     if (socket) {
//       socket.on('s2c chat', data => {
//         console.log('on s2c chat', { data });
//         setChat([...chat, data.msg]);
//       });
//     }
//     return () => {
//       if (socket) {
//         socket.removeAllListeners();
//         socket.close();
//       }
//     };
//   }, [socket]);
//   useEffect(() => {
//     console.log({ chat });
//   }, [chat]);
//   const handleClick = event => {
//     event.preventDefault();
//     // setChat(inputRef.current.value);
//     socket.emit('chat', { msg: inputRef.current.value });
//   };
//   return (
//     <div className="self-dating-chat">
//       {`input: `}
//       <input type="text" ref={inputRef} />
//       <input type="button" value="보내기" onClick={handleClick} />
//       {!chat ? '' : chat.map(val => <div>{val}</div>)}
//     </div>
//   );
// }

const socket = socketIoClient(process.env.REACT_APP_API_URI, {
  path: '/socket.io',
});

class SelfDatingChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
    this.nameRef = React.createRef();
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.socket.on('test', data => {
    //   console.log('on test', { data });
    // });
    socket.on('s2c chat', data => {
      console.log('on s2c chat', { data });
      const { name, msg } = data;
      const { log } = this.state;
      this.setState({ log: [...log, { name, msg }] });
    });
  }

  componentWillUnmount() {
    socket.removeAllListeners();
    socket.close();
  }

  handleClick(event) {
    event.preventDefault();
    socket.emit('chat', {
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
