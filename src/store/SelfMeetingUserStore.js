import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfMeetingUserStore{
  URL = 'http://34.97.117.253:80/api/meetingusers';

  @observable updated = false;
  @observable IsLoading = true;

  @observable pagedUser = [];
  @observable selectedUser = {
    id: '',
    time: '',
    email: '',
    number: '',
    age1: '',
    collage1: '',
    age2: '',
    collage2: '',
    age3: '',
    collage3: '',
    age4: '',
    collage4: '',
    gender: '',
    appearance: '',
    personality: '',
    hobby: '',
    drink: '',
    idealtype: '',
    chatlink: '',
    tag: '',
    keysentence: ''
  };

  @observable userCount = 0;

  getUsers = async(pagenumber) => {
    await Axios.get(`${this.URL}/${pagenumber}`)
    .then(response => {
      this.pagedUser = [];
      this.pagedUser=response.data;
      this.updated = true;
      this.IsLoading = false;
      console.log(this.pagedUser)
    });
  }

  getAllUsers = async() => {
    await Axios.get(`${this.URL}/`)
      .then(response => {this.userCount = response.data;})
  }

  setSelectedUser = (user) => {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}

export default SelfMeetingUserStore;