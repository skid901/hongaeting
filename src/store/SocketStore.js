import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';
import socketIoClient from 'socket.io-client';

@autobind
class SocketStore {
  //
  @observable instance = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.instance = socketIoClient(process.env.REACT_APP_API_URI, {
      path: '/socket.io',
    });
    // this.instance.off('confirm');
    this.instance.on('confirm', data => {
      console.log('on confirm', data.socketid, { data });
    });
    this.instance.emit('login', {
      name: 'test name',
      userid: 'test userid',
    });
    // this.instance.off('test');
    // this.instance.on('test', data => {
    //   console.log(data);
    // });
  }

  @action on = (eventName, callback) => {
    this.instance.on(eventName, callback);
  };

  @action off = eventName => {
    this.instance.off(eventName);
  };

  @action emit = (eventName, params) => {
    this.instance.emit(eventName, params);
  };
}

export default SocketStore;
