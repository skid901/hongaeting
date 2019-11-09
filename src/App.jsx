import React, { useEffect, useContext, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import './App.scss';

import CustomAppBar from 'component/00Common/AppBar';
import AlertDialog from 'component/00Common/AlertDialog';
import Router from './Router';

import storage from './store/storage';
import { observer, inject } from 'mobx-react';
import { observable } from '../node_modules/mobx/lib/mobx';


//@inject('rootStore')
//@observer
class App extends Component{
  
  initializeUserInfo = async () => {
    const loggedInfo = storage('loggedInfo');
    if(!loggedInfo) return;
    let message = ``;
    try{
      const { data } = await Axios.post(`api/auth/signIn`, {...loggedInfo});
      message = data.message || ``;
      if((message === `noEmail`)||(message == `invalidPassword`)||(message == `noAuth`)){
        return;
      }
      user.setEmail(data.email);
      user.setNickName(data.nickName);
      user.setSex(data.sex);
      user.setAuthEmail(data.authEmail);
      storage.set('loggedInfo', loggedInfo);
    } catch(e){
      storage.remove('loggedInfo');
      window.location.href = '';
    }
  }

  componentDidMount() {
    this.initializeUserInfo();
  }

  render(){
      <BrowserRouter>
        <div className="App">
          <CustomAppBar />
          <AlertDialog />
          <Router />
        </div>
      </BrowserRouter>
  }
}

export default App;
