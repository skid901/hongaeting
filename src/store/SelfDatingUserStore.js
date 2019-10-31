import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfDatingUserStore {
  //
  URL = 'http://localhost:4000/api/datingusers';
  @observable pageNumber = 1;

  @observable pagedUser = [];
  
  getUsers = async(pagenumber) => {
    this.pageNumber = await pagenumber;
    await Axios.get(`${this.URL}/${this.pagenumber}`)
     .then(response => {
       this.pagedUser = [];
       this.pagedUser=response.data;
      });
  }
}

export default SelfDatingUserStore;