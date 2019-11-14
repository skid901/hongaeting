import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfDatingUserStore {
  //
  // URL = 'http://34.97.117.253:80/api/datingusers';
  // URL = 'http://localhost:4000/api/datingusers';
  URL = `${process.env.REACT_APP_DOMAIN}/api/datingusers`;

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
  setUsers = async(pagenumber) => {
    const res = await Axios.get(`${this.URL}/pageNumber/${pagenumber}/gender/${this.gender}`);
    this.pagedUser = [];
    this.pagedUser=res.data;
    this.updated = true;
    this.IsLoading = false;
    
  }

  setUserCount = async () => {
    const res = await Axios.get(`${this.URL}/gender/${this.gender}`);
    this.userCount = res.data;
  }

  // const response = await Axios(sdadasdas)/ .then(X)
  // this.userCount = response.data

  setSelectedUser = (user) => {
    this.selectedUser = user;
  }
}

export default SelfDatingUserStore;