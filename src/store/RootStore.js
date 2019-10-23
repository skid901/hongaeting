import IntroductionStore from 'store/IntroductionStore';
import AlertStore from 'store/AlertStore';
import UserListStore from 'store/UserListStore';
import SocketStore from 'store/SocketStore';

class RootStore {
  //
  constructor() {
    this.alert = new AlertStore(this);
    this.introduction = new IntroductionStore(this);
    this.userListStore = new UserListStore(this);
    this.socket = new SocketStore(this);
  }
}

export default RootStore;
