import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class IntroductionStore {
  //
  @observable IntroductionList = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export default IntroductionStore;
