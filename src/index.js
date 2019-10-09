import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserListStore from './store/UserListStore';

const userlist = new UserListStore();

ReactDOM.render(
  <Provider userlist = {userlist}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
