import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class UserStore {
  //
  @observable email = '';

  @observable nickName = '';

  @observable sex = '';

  @observable authEmail = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setEmail(email) {
    this.email = email;
  }

  @action setNickName(nickName) {
    this.nickName = nickName;
  }

  @action setSex(sex) {
    this.sex = sex;
  }

  @action setAuthEmail(authEmail) {
    this.authEmail = authEmail;
  }
}

export default UserStore;
