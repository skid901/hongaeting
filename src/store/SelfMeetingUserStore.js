import { observable, action } from 'mobx';
import Axios from 'axios';

class SelfMeetingUserStore{
  //URL = 'http://34.97.117.253:80/api/meetingusers';
 // URL = 'http://localhost:4000/api/meetingusers';
 URL = `${process.env.REACT_APP_DOMAIN}/api/meetingusers`;

  @observable updated = false;
  @observable IsLoading = true;
  @observable gender = 0;
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

  /*
  getUsers = async(pagenumber) => {
    await Axios.get(`${this.URL}/${pagenumber}`)
    .then(response => {
      this.pagedUser = [];
      this.pagedUser=response.data;
      this.updated = true;
      this.IsLoading = false;
      console.log(this.pagedUser)
    });
    console.log("pagedUser :" + this.pagedUser);
  }
  */
  setGender = async(gender) => {
    this.gender = await gender;
  }
  setUsers = async(pagenumber) => {
    const res = await Axios.get(`${this.URL}/pageNumber/${pagenumber}/gender/${this.gender}`);
    this.pagedUser = [];
    this.pagedUser=res.data;
    this.updated = true;
    this.IsLoading = false;
  }

  setUserCount = async() => {
    const res = await Axios.get(`${this.URL}/gender/${this.gender}`);
    this.userCount = res.data;
  }

  setSelectedUser = (user) => {
    this.selectedUser = user;
  }
}

export default SelfMeetingUserStore;