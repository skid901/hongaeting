import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfDatingUserStore {
  //
  URL = 'http://34.97.117.253:80/api/datingusers';
  //@observable pageNumber = 1;
  @observable updated = false;
  @observable IsLoading = true;


  @observable pagedUser = [];
  
  @observable selectedUser = {
    id: '',
    time: '',
    email: '',
    address: '',
    gender: '',
    age: '',
    collage: '',
    appearance: '',
    personality: '',
    hobby: '',
    religion: '',
    smoke: '',
    idealtype: '',
    chatlink: '',
    tag: '',
    keysentence: '',
  };

  @observable userCount = 0;
  
  getUsers = async(pagenumber) => {
    //this.pageNumber = await pagenumber;
    await Axios.get(`${this.URL}/${pagenumber}`)
      .then(response => {
        this.pagedUser = [];
        this.pagedUser=response.data;
        this.updated = true;
        this.IsLoading = false;
        //console.log(this.pagedUser[0].id)
      });
  }

  getAllUsers = async() => {
    await Axios.get(`${this.URL}/`)
      .then(response => {this.userCount = response.data; console.log(this.userCount)})
  }

  setSelectedUser = (user) => {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  getOneUser = async(id) => {
    await Axios.get(`${this.URL}/${id}`)
      .then(response => this.selectedUser = response.data)
  }
}

export default SelfDatingUserStore;