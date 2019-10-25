import React, { useContext, useState, useEffect } from 'react';
import { MobXProviderContext, observer, useObserver } from 'mobx-react';
<<<<<<< HEAD
// import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

const SelfDatingChat = () => {
  const {
    socket: { instance: socket },
  } = useContext(MobXProviderContext);
  const [state, setState] = useState({
    input: '',
=======

import './SelfDatingChat.scss';

function SelfDatingChat() {
  const { socket } = useContext(MobXProviderContext);
  const [state, setState] = useState({
>>>>>>> parent of 93e4f3a... chat client temp
    chat: [],
    input: '',
  });
  useEffect(() => {
<<<<<<< HEAD
    socket.on('s2c chat', data => {
      console.log('on s2c chat', data.msg, { data });
      setState({ ...state, chat: [...state.chat, data.msg] });
    });
=======
    socket.login();
    return () => {};
>>>>>>> parent of 93e4f3a... chat client temp
  }, []);
  const handleChange = e => {
    e.preventDefault();
    setState({ ...state, input: e.target.value });
  };
  const handleClick = e => {
    e.preventDefault();
<<<<<<< HEAD
    socket.emit('chat', { msg: state.input });
  };
  const handleCheck = e => {
    e.preventDefault();
    console.log({ state });
=======
    socket.instance.emit('chat', { msg: state.input });
>>>>>>> parent of 93e4f3a... chat client temp
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
        type="submit"
        value="submit"
        onClick={e => {
          handleClick(e);
        }}
      />
<<<<<<< HEAD
      <input
        type="button"
        value="check"
        onClick={e => {
          handleCheck(e);
        }}
      />
      {state.chat.map(val => {
        return <div key={val}>{val}</div>;
      })}
=======
      {state.chat.map((val, idx) => (
        <div key={val}>{val}</div>
      ))}
>>>>>>> parent of 93e4f3a... chat client temp
    </div>
  );
};

export default observer(SelfDatingChat);
