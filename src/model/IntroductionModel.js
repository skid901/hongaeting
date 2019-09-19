import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class IntroductionModel {
  //
  constructor(data) {
    extendObservable(this, data);
  }
}

export default IntroductionModel;
