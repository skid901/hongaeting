import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'store/RootStore';
import './App.scss';

import CustomAppBar from 'component/00Common/AppBar';
import AlertDialog from 'component/00Common/AlertDialog';
import Router from './Router';
import UserListStore from './store/UserListStore';
import SelfDatingUserStore from './store/SelfDatingUserStore';

const userlist = new UserListStore();
const selfDatingUser = new SelfDatingUserStore();
const rootStore = new RootStore();

const App = () => (
  <Provider {...rootStore} userlist = {userlist} selfDatingUser = {selfDatingUser}>
    <BrowserRouter>
      <div className="App">
        <CustomAppBar />
        <AlertDialog />
        <Router />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
