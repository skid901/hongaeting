import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { observer, MobXProviderContext, useObserver } from 'mobx-react';
import axios from 'axios';

import './MyPage.scss';

const MyPage = observer(() => {
  //
  const { nickName } = useParams();

  const history = useHistory();

  const { alert, user } = useContext(MobXProviderContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URI}/api/chat/userList`,
          {},
        );
        console.log({ data });
      } catch (e) {
        console.log({ e });
      }
    })();
  }, []);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return useObserver(() => (
    <div className="MyPage">
      {`MyPage will be here...`}
      <br />
      {`환영합니다. ${user.nickName} 님`}
    </div>
  ));
});

export default MyPage;
