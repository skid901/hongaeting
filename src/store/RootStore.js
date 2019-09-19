import IntroductionStore from './IntroductionStore';

class RootStore {
  //
  constructor() {
    this.introductionStore = new IntroductionStore(this);
  }
}

export default RootStore;
