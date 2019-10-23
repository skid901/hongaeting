import React, { useContext, useState, useEffect } from 'react';
import { MobXProviderContext, observer, useObserver } from 'mobx-react';

import './SelfDatingChat.scss';

function SelfDatingChat() {
  const { socket } = useContext(MobXProviderContext);
  const [state, setState] = useState({
    chat: [],
    input: '',
  });
  useEffect(() => {
    socket.login();
    return () => {};
  }, []);
  const handleChange = e => {
    setState({
      ...state,
      input: e.target.value,
    });
  };
  const handleClick = e => {
    e.preventDefault();
    socket.instance.emit('chat', { msg: state.input });
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
      {state.chat.map((val, idx) => (
        <div key={val}>{val}</div>
      ))}
    </div>
  );
}

export default SelfDatingChat;
