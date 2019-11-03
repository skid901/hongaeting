import AlertStore from 'store/alertStore';
import IntroductionStore from 'store/IntroductionStore';

class RootStore {
  //
  constructor() {
    this.alert = new AlertStore(this);
    this.introductionStore = new IntroductionStore(this);
  }
}

export default RootStore;
