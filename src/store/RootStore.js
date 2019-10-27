import IntroductionStore from 'store/IntroductionStore';
import AlertStore from 'store/AlertStore';
import UserListStore from 'store/UserListStore';

class RootStore {
  //
  constructor() {
    this.alert = new AlertStore(this);
    this.introduction = new IntroductionStore(this);
    this.userListStore = new UserListStore(this);
  }
}

export default RootStore;
