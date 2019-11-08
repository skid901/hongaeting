import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfDatingUserStore {
  //
  URL = 'http://34.97.117.253:80/api/datingusers';
  //URL = 'http://localhost:4000/api/datingusers';
  //@observable pageNumber = 1;
  @observable updated = false;
  @observable IsLoading = true;

  @observable gender = 0;
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
  setGender = (gender) => {
    this.gender = gender;
  }
  getUsers = async(pagenumber) => {
    await Axios.get(`${this.URL}/pageNumber/${pagenumber}/gender/${this.gender}`)
      .then(response => {
        this.pagedUser = [];
        this.pagedUser=response.data;
        this.updated = true;
        this.IsLoading = false;
      });
  }

  getAllUsers = () => {
    Axios.get(`${this.URL}/gender/${this.gender}`)
      .then(response => {this.userCount = response.data; console.log('this.userCount' + this.userCount)})
  }

  // const response = await Axios(sdadasdas)/ .then(X)
  // this.userCount = response.data

  setSelectedUser = (user) => {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}

export default SelfDatingUserStore;