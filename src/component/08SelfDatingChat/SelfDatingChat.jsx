import React, { useState, useEffect, useRef } from 'react';
import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

// const useSocket = (...args) => {
//   const [socket, setSocket] = useState(socketIoClient(...args));
//   useEffect(() => {
//     return () => {
//       socket.removeAllListeners();
//       socket.close();
//     };
//   }, [socket]);
//   return [socket, setSocket];
// };

function SelfDatingChat() {
  const [state, setState] = useState({
    chat: [],
    input: '',
  });
  const socket = useRef(null);

  useEffect(() => {
    if (!socket.current) {
      const $socket = socketIoClient(process.env.REACT_APP_API_URI, {
        path: '/socket.io',
      });

      $socket.on('test', data => {
        console.log(data);
      });
      $socket.on('s2c chat', data => {
        console.log('on s2c chat', { data });
        const list = [...state.chat];
        console.log({ list });
        setState({ ...state, chat: [...list, data.msg] });
      });
      socket.current = $socket;
    }
    socket.current.emit('login', {
      name: 'test-name',
      userid: 'test-userid',
    });
    return () => {
      if (socket.current) {
        socket.current.removeAllListeners();
        socket.current.close();
      }
    };
  }, []);
  useEffect(() => {
    console.log('useEffect chat', { chat: state.chat });
  }, [state.chat]);
  const handleChange = e => {
    e.preventDefault();
    setState({ ...state, input: e.target.value });
  };
  const handleClick = () => {
    if (socket.current) {
      const msg = state.input;
      socket.current.emit('chat', { msg });
    }
  };
  const handleCheck = () => {
    console.log({ state }, { socket });
  };
  return (
    <div className="self-dating-chat">
      <div>SelfDatingChat will be here...</div>
      {'input:'}
      <input type="text" value={state.input} onChange={e => handleChange(e)} />
      <input type="submit" value="submit" onClick={handleClick} />
      <input type="button" value="check" onClick={handleCheck} />
      {state.chat.map((msg, idx) => (
        <div key={`${msg + idx}`}>{msg}</div>
      ))}
    </div>
  );
}

export default SelfDatingChat;
