import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { observer, MobXProviderContext, useObserver } from 'mobx-react';
import axios from 'axios';

import './MyPage.scss';

const MyPage = observer(() => {
  //
  const history = useHistory();

  const { alert, user } = useContext(MobXProviderContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          // `${process.env.REACT_APP_API_URI}/api/chat/userList`,
          `/api/chat/userList`,
          {},
        );
        setUserList(data);
      } catch (e) {
        console.log({ e });
      }
    })();
    console.log({ user });
  }, []);

  const handleClick = async event => {
    const { email } = event.target.dataset;
    try {
      const { data } = await axios.post(
        // `${process.env.REACT_APP_API_URI}/api/chat/makeRoom`,
        `/api/chat/makeRoom`,
        {
          roomType: `self`,
          entryEmail: email,
        },
      );
      console.log({ data });
      if (data.message === 'roomMakeSuccess') {
        history.push(`/selfdatingchat/${data.roomId}`);
      }
      if (data.message === 'alreadyExist') {
        history.push(`/selfdatingchat/${data.roomId}`);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return useObserver(() => (
    <div className="MyPage">
      {`MyPage will be here...`}
      <br />
      {`환영합니다. ${user.nickName} 님`}
      <br />
      <ul>
        {userList.map(val => (
          <li key={val._id}>
            {val.nickName}와 채팅하려면{' '}
            <button type="button" onClick={handleClick} data-email={val.email}>
              클릭
            </button>
          </li>
        ))}
        <li />
      </ul>
    </div>
  ));
});

export default MyPage;
