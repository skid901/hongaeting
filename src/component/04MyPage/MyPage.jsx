import React from 'react';
import { useParams } from 'react-router-dom';

import './MyPage.scss';

const MyPage = () => {
  //
  const { nickName } = useParams();

  return (
    <div className="MyPage">
      {`MyPage will be here...`}
      <br />
      {`환영합니다. ${nickName} 님`}
    </div>
  );
};

export default MyPage;
