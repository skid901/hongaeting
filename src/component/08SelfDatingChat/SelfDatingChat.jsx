import React, { useContext, useState, useEffect } from 'react';
import { MobXProviderContext, observer, useObserver } from 'mobx-react';
// import socketIoClient from 'socket.io-client';

import './SelfDatingChat.scss';

const SelfDatingChat = () => {
  const {
    socket: { instance: socket },
  } = useContext(MobXProviderContext);
  const [state, setState] = useState({
    input: '',
    chat: [],
  });
  useEffect(() => {
    socket.on('s2c chat', data => {
      console.log('on s2c chat', data.msg, { data });
      setState({ ...state, chat: [...state.chat, data.msg] });
    });
  }, []);
  const handleChange = e => {
    e.preventDefault();
    setState({ ...state, input: e.target.value });
  };
  const handleClick = e => {
    e.preventDefault();
    socket.emit('chat', { msg: state.input });
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
      {state.chat.map(val => {
        return <div key={val}>{val}</div>;
      })}
    </div>
  );
};

export default observer(SelfDatingChat);
