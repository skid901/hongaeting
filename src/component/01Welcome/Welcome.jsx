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
      <Link to="/mypage">myPage</Link>
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
    <li>
      <Link to="/demo">demo</Link>
    </li>
    <li>
      <Link to="/selfmeetinglist">selfmeetinglist</Link>
    </li>
    <li>
      <Link to="/selfmeetingdetails">selfmeetingdetails</Link>
    </li>
    <li>
      <Link to="/meetingform">meetingform</Link>
    </li>
    <li>
      <Link to="/realwelcome">RealWelcome</Link>
    </li>
    <li>
      <Link to="/waitinginfo">WaitingInfo</Link>
    </li>
  </div>
);

export default Welcome;
