import AlertStore from 'store/alertStore';
import UserStore from 'store/userStore';
import IntroductionStore from 'store/IntroductionStore';
import UserListStore from 'store/UserListStore';

class RootStore {
  //
  constructor() {
    this.alert = new AlertStore(this);
    this.user = new UserStore(this);
    this.introduction = new IntroductionStore(this);
    this.userListStore = new UserListStore(this);
  }
}

export default RootStore;
