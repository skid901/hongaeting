import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class UserModel {
  //
  constructor(data) {
    extendObservable(this, data);
  }
}

export default UserModel;
