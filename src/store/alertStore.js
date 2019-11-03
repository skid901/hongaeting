import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class AlertStore {
  //
  @observable isOpen = false;

  @observable title = '';

  @observable message = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setIsOpen(_isOpen) {
    this.isOpen = _isOpen;
  }

  @action setTitle(_title) {
    this.title = _title;
  }

  @action setMessage(_message) {
    this.message = _message;
  }
}

export default AlertStore;
