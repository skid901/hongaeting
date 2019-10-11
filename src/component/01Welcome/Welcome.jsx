import React from 'react';
import Contents1 from './welcomeContents1.jpg';

import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="Template">
      <div className="Header">
        <div>
          홍개팅
        </div>
        <button>
          홍개팅 이용하기
        </button>
      </div>
      <img src={Contents1} alt={'a'} />
    </div>
  )
}

export default Welcome;
