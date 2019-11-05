import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfDatingUserStore {
  //
  URL = 'http://localhost:4000/api/datingusers';
  //@observable pageNumber = 1;
  @observable updated = false;

  @observable pagedUser = [];

  @observable userCount = 0;
  
  getUsers = async(pagenumber) => {
    //this.pageNumber = await pagenumber;
    await Axios.get(`${this.URL}/${pagenumber}`)
     .then(response => {
       this.pagedUser = [];
       this.pagedUser=response.data;
       this.updated = true;
       console.log(this.pagedUser[0].id)
      });
  }

  getAllUsers = async() => {
    await Axios.get(`${this.URL}/`)
      .then(response => this.userCount = response.data)
  }
}

export default SelfDatingUserStore;