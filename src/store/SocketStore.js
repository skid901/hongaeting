import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';
import socketIoClient from 'socket.io-client';

@autobind
class SocketStore {
  //
  @observable instance = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action login = () => {
    this.instance = socketIoClient(process.env.REACT_APP_API_URI);
    this.instance.emit('login', {
      name: 'test-name',
      userid: 'test-userid',
    });
    this.instance.on('login', data => {
      console.log('on login', { data });
    });
    this.instance.on('s2c chat', data => {
      console.log('on s2c chat', { data });
    });
  };
}

export default SocketStore;
