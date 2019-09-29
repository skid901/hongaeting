import React from 'react';
import { Link } from 'react-router-dom';

import './Welcome.scss';

const Welcome = () => (
  <div className="Welcome">
    Welcome Page will be here...
    <li>
      <Link to="/">Welcome</Link>
    </li>
    <li>
      <Link to="/signup/form">signup-form</Link>
    </li>
    <li>
      <Link to="/signup/summit">signup-summit</Link>
    </li>
    <li>
      <Link to="/signup/auth/test">signup-auth</Link>
    </li>
    <li>
      <Link to="/signin">signin</Link>
    </li>
    <li>
      <Link to="/mypage">MyPage</Link>
    </li>
    <li>
      <Link to="/introductionform">introductionform</Link>
    </li>
    <li>
      <Link to="/selfdatinglist">selfdatinglist</Link>
    </li>
    <li>
      <Link to="/selfdatingdetails">selfdatingdetails</Link>
    </li>
    <li>
      <Link to="/selfdatingchat">selfdatingchat</Link>
    </li>
    <li>
      <Link to="/matchmarkingchat">matchmarkingchat</Link>
    </li>
    <li>
      <Link to="/adminreportchat">adminreportchat</Link>
    </li>
    <li>
      <Link to="/adminpage">adminpage</Link>
    </li>
  </div>
);

export default Welcome;
