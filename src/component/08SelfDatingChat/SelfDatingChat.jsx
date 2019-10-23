import React, { useContext, useState, useEffect } from 'react';
import { MobXProviderContext, observer, useObserver } from 'mobx-react';
import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

function SelfDatingChat() {
  const [state, setState] = useState({
    socket: null,
    input: '',
    chat: [],
  });
  const [chat, setChat] = useState([]);
  // 소켓 연결
  useEffect(() => {
    const socket = socketIoClient(process.env.REACT_APP_API_URI);
    setState({ ...state, socket });
    console.log({ state });
  }, []);
  // 소켓 연결 성공 시
  useEffect(() => {
    if (state.socket) {
      state.socket.off('confirm');
      state.socket.on('confirm', data => {
        console.log('on confirm', { data });
      });
      state.socket.off('s2c chat');
      state.socket.on('s2c chat', data => {
        console.log('on s2c chat', { data });
        const $chat = state.chat;
        console.log('$chat check', { state });
        setState({ ...state, chat: [...$chat, data.msg] });
        console.log('chat check', { state });
      });
      state.socket.emit('login', {
        name: 'test-name',
        userid: 'test-userid',
      });
      console.log({ socket: state.socket });
    }
  }, [state.socket]);
  const handleChange = e => {
    setState({
      ...state,
      input: e.target.value,
    });
  };
  const handleClick = e => {
    e.preventDefault();
    // state.socket.off('s2c chat');
    // state.socket.on('s2c chat', data => {
    //   console.log('on s2c chat', { data });
    //   setState({ ...state, chat: [...state.chat, data.msg] });
    // });
    state.socket.emit('chat', { msg: state.input });
  };
  const handleCheck = e => {
    e.preventDefault();
    console.log({ state });
  };
  return (
    <div className="self-dating-chat">
      <div>SelfDatingChat will be here...</div>
      {'input:'}
      <input
        type="text"
        value={state.input}
        onChange={e => {
          handleChange(e);
        }}
      />
      <input
        type="button"
        value="submit"
        onClick={e => {
          handleClick(e);
        }}
      />
      <input
        type="button"
        value="check"
        onClick={e => {
          handleCheck(e);
        }}
      />
      {state.chat.map(val => (
        <div key={val}>{val}</div>
      ))}
    </div>
  );
}

export default SelfDatingChat;
