import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from 'component/01Welcome/Welcome';
import SignUp from 'component/02SignUp/SignUp';
import Summit from 'component/02SignUp/Summit';
import Auth from 'component/02SignUp/Auth';
import SignIn from 'component/03SignIn/SignIn';
import MyPage from 'component/04MyPage/MyPage';
import IntroductionForm from 'component/05IntroductionForm/IntroductionForm';
import SelfDatingList from 'component/06SelfDatingList/SelfDatingList';
import SelfDatingDetails from 'component/07SelfDatingDetails/SelfDatingDetails';
import SelfDatingChat from 'component/08SelfDatingChat/SelfDatingChat';
import MatchmarkingChat from 'component/09MatchmarkingChat/MatchmarkingChat';
import AdminReportChat from 'component/10AdminReportChat/AdminReportChat';
import AdminPage from 'component/11AdminPage/AdminPage';
import ErrorPage from 'component/12ErrorPage/ErrorPage';

import demo from 'component/04MyPage/demo';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/signup/form" component={SignUp} />
    <Route path="/signup/summit" component={Summit} />
    <Route path="/signup/auth/:hashedAuthEmail" component={Auth} />
    <Route path="/signin" component={SignIn} />
    <Route path="/mypage/:nickName" component={MyPage} />
    <Route path="/introductionform" component={IntroductionForm} />
    <Route path="/selfdatinglist" component={SelfDatingList} />
    <Route path="/selfdatingdetails" component={SelfDatingDetails} />
    <Route path="/selfdatingchat" component={SelfDatingChat} />
    <Route path="/matchmarkingchat" component={MatchmarkingChat} />
    <Route path="/adminreportchat" component={AdminReportChat} />
    <Route path="/adminpage" component={AdminPage} />
    <Route path="/errorpage" component={ErrorPage} />
    <Route path="/demo" component={demo} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Router;
