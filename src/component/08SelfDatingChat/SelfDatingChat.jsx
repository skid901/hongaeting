// import React from 'react';
// import { observer, inject } from 'mobx-react';
// import socketIoClient from 'socket.io-client';

// import './SelfDatingChat.scss';

// @inject('user')
// @observer
// class SelfDatingChat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       roomId: props.match.params.roomId,
//       log: [],
//     };
//     this.inputRef = React.createRef();
//     this.handleClick = this.handleClick.bind(this);

//     this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}/chat`, {
//       // this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}`, {
//       path: '/socket.io',
//       transports: ['websocket'],
//     });

//     console.log({ roomId: props.match.params.roomId });
//   }

//   componentDidMount() {
//     this.socket.on('log', data => {
//       const rawData = data.chatLogList || '';
//       const { log } = this.state;
//       const chatLogList = rawData.map(val => ({
//         nickName: val.user.nickName,
//         msg: val.chat,
//       }));
//       console.log({ rawData, chatLogList });
//       this.setState({ log: [...log, ...chatLogList] });
//     });
//     const { roomId } = this.state;
//     const { user } = this.props;
//     this.socket.emit('log', {
//       roomId,
//       email: user.email,
//     });
//     this.socket.on('chat', data => {
//       const chatLog = data.chatLog || '';
//       const { log } = this.state;
//       this.setState({ log: [...log, chatLog] });
//     });
//   }

//   componentWillUnmount() {
//     this.socket.removeAllListeners();
//     this.socket.close();
//   }

//   handleClick(event) {
//     event.preventDefault();
//     const { roomId } = this.state;
//     const { user } = this.props;
//     this.socket.emit('chat', {
//       roomId,
//       email: user.email,
//       msg: this.inputRef.current.value,
//     });
//     this.inputRef.current.value = '';
//   }

//   render() {
//     const { roomId, log } = this.state;
//     return (
//       <div className="self-dating-chat">
//         <div>{`채팅방 ID : ${roomId}`}</div>
//         {`input: `}
//         <input type="text" ref={this.inputRef} />
//         <input type="button" value="보내기" onClick={this.handleClick} />
//         {log.length === 0
//           ? ''
//           : log.map(val => <div>{`${val.nickName} : ${val.msg}`}</div>)}
//       </div>
//     );
//   }
// }

//     this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}/chat`, {
//       // this.socket = socketIoClient(`${process.env.REACT_APP_API_URI}`, {
//       path: '/socket.io',
//       transports: ['websocket'],
//     });

//     console.log({ roomId: props.match.params.roomId });
//   }

//   componentDidMount() {
//     this.socket.on('log', data => {
//       const rawData = data.chatLogList || '';
//       const { log } = this.state;
//       const chatLogList = rawData.map(val => ({
//         nickName: val.user.nickName,
//         msg: val.chat,
//       }));
//       console.log({ rawData, chatLogList });
//       this.setState({ log: [...log, ...chatLogList] });
//     });
//     const { roomId } = this.state;
//     const { user } = this.props;
//     this.socket.emit('log', {
//       roomId,
//       email: user.email,
//     });
//     this.socket.on('chat', data => {
//       const chatLog = data.chatLog || '';
//       const { log } = this.state;
//       this.setState({ log: [...log, chatLog] });
//     });
//   }

//   componentWillUnmount() {
//     this.socket.removeAllListeners();
//     this.socket.close();
//   }

//   handleClick(event) {
//     event.preventDefault();
//     const { roomId } = this.state;
//     const { user } = this.props;
//     this.socket.emit('chat', {
//       roomId,
//       email: user.email,
//       msg: this.inputRef.current.value,
//     });
//     this.inputRef.current.value = '';
//   }

//   render() {
//     const { roomId, log } = this.state;
//     return (
//       <div className="self-dating-chat">
//         <div>{`채팅방 ID : ${roomId}`}</div>
//         {`input: `}
//         <input type="text" ref={this.inputRef} />
//         <input type="button" value="보내기" onClick={this.handleClick} />
//         {log.length === 0
//           ? ''
//           : log.map(val => <div>{`${val.nickName} : ${val.msg}`}</div>)}
//       </div>
//     );
//   }
// }
// export default SelfDatingChat;
