import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'store/RootStore';

import Welcome from 'component/welcome/Welcome';
import MyPage from 'component/myPage/MyPage';

import './App.scss';

const { introductionStore } = new RootStore();

const App = () => (
  <Provider introductionStore={introductionStore}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/mypage">MyPage</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Welcome} />
      <Route path="/mypage" component={MyPage} />
    </BrowserRouter>
  </Provider>
);

export default App;
