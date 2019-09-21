import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'store/RootStore';
import './App.scss';

import Welcome from 'component/01Welcome/Welcome';
import SignUp from 'component/02SignUp/SignUp';
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

const {
  introductionStore
} = new RootStore();

const App = () => (
  <Provider
    introductionStore={introductionStore}
  >
    <BrowserRouter>
      <div className="App">
        <nav>
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/signup">signup</Link></li>
          <li><Link to="/signin">signin</Link></li>
          <li><Link to="/mypage">MyPage</Link></li>
          <li><Link to="/introductionform">introductionform</Link></li>
          <li><Link to="/selfdatinglist">selfdatinglist</Link></li>
          <li><Link to="/selfdatingdetails">selfdatingdetails</Link></li>
          <li><Link to="/selfdatingchat">selfdatingchat</Link></li>
          <li><Link to="/matchmarkingchat">matchmarkingchat</Link></li>
          <li><Link to="/adminreportchat">adminreportchat</Link></li>
          <li><Link to="/adminpage">adminpage</Link></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/introductionform" component={IntroductionForm} />
          <Route path="/selfdatinglist" component={SelfDatingList} />
          <Route path="/selfdatingdetails" component={SelfDatingDetails} />
          <Route path="/selfdatingchat" component={SelfDatingChat} />
          <Route path="/matchmarkingchat" component={MatchmarkingChat} />
          <Route path="/adminreportchat" component={AdminReportChat} />
          <Route path="/adminpage" component={AdminPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
