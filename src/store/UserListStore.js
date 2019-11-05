import { observable, action } from 'mobx';
import Axios from 'axios';
import React, { useState } from 'react';
class UserListStore {
  @observable userList = [];

  @observable selectedUser = {
    time: '',
    email: '',
    kakaoid: '',
    sex: '',
    age: '',
    collage: '',
    appearance: '',
    personality: '',
    hobby: '',
    religion: '',
    smoke: '',
    idealtype: '',
    openchatlink: '',
    hashtag: '',
    selfintro: '',
  };

  @observable selectedMeeting = {
    time: '',
    email: '',
    sex: '',
    type: '',
    TwoTwoFirstAge: '',
    TwoTwoFirstCollage: '',
    TwoTwoSecondAge: '',
    TwoTwoSecondCollage: '',
    ThreeThreeFirstAge: '',
    ThreeThreeFirstCollage: '',
    ThreeThreeSecondAge: '',
    ThreeThreeSecondCollage: '',
    ThreeThreeThirdAge: '',
    ThreeThreeThirdCollage: '',
    FourFourFirstAge: '',
    FourFourFirstCollage: '',
    FourFourSecondAge: '',
    FourFourSecondCollage: '',
    FourFourThirdAge: '',
    FourFourThirdCollage: '',
    FourFourFourthAge: '',
    FourFourFourthCollage: '',
    appearance: '',
    personality: '',
    hobby: '',
    drink: '',
    idealtype: '',
    openlink: '',
    hashtag: '',
    selfintro: '',
  };

  @observable updated = false;
  @observable IsLoading = true;

  @observable MeetingUserList = [];
  @observable meetingupdated = false;
  @observable meetingIsLoading = true;

  setTableData = async () => {
    const TableDatas = await Axios.get(
      // 'https://script.googleusercontent.com/macros/echo?user_content_key=Vouekj78ZDHKhZN8_uDcVG6S81lJbajvmL0qWHv6A9-FaZHwU85TrH1-Bu81oQ1DLVjLvIkuT1maQV0RY7KdsFw4Gc0HnOnTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAHnV50zKNKchOI6LPDRBzJqiaqXNrKnsCXdiPpUSQJM_BcUUpUFAkNjKVzuoDt6UdveWPraiRQB&lib=MFBncoPiqeUvwbaJDYMs81uf1ma5jnNam',밑에건 시즌3더미인수 밑에밑에는 시원실제데이터
      // 'https://script.googleusercontent.com/macros/echo?user_content_key=D6LDynDbxmgjivdDVU7KFBDVQ_aw_E13MLl9_ox_ghLO-QUm_8j3kF3aEZUwswrK-NYh35vmwddsA344EL4GaMo1HI04uKTbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHHGsBdDm0gWgIYaf-RZABW2htqM0nmYSdLxlRRUhwUa_BoP1FYIifYYZpTak_o22Q&lib=MmtnMiguOcAKS_Win8w0ZfuzM5lHRHPlu',
      // 'https://script.google.com/macros/s/AKfycbzxOJl2E1yNWqezxT2ScvM6O5lERGtTFRmBcgJVkU3I5yAI2AI/exec',
      'https://script.google.com/macros/s/AKfycbzxOJl2E1yNWqezxT2ScvM6O5lERGtTFRmBcgJVkU3I5yAI2AI/exec',
    );

    const datas = await TableDatas.data.user;
    console.log(datas);
    const length = datas.length;

    for (let i = 0; i < length; i++) {
      this.userList.push(datas[i]);
    }
    this.updated = true;
    this.IsLoading = false;
  };

  setMeetingData = async () => {
    const MeetingSheetDatas = await Axios.get(
      'https://script.google.com/macros/s/AKfycbwsCGb-5VAXGuNRX1PIKzw85EemG52KMHbGTU7wWae9PrLK97FR/exec',
    );

    const meetingdatas = await MeetingSheetDatas.data.user;
    const length = meetingdatas.length;
    console.log(meetingdatas);
    for (let i = 0; i < length; i++) {
      this.MeetingUserList.push(meetingdatas[i]);
    }
    this.meetingupdated = true;
    this.meetingIsLoading = false;
  };
  @action
  setSelectedMeeting = (
    time,
    email,
    sex,
    type,
    TwoTwoFirstAge,
    TwoTwoFirstCollage,
    TwoTwoSecondAge,
    TwoTwoSecondCollage,
    ThreeThreeFirstAge,
    ThreeThreeFirstCollage,
    ThreeThreeSecondAge,
    ThreeThreeSecondCollage,
    ThreeThreeThirdAge,
    ThreeThreeThirdCollage,
    FourFourFirstAge,
    FourFourFirstCollage,
    FourFourSecondAge,
    FourFourSecondCollage,
    FourFourThirdAge,
    FourFourThirdCollage,
    FourFourFourthAge,
    FourFourFourthCollage,
    appearance,
    personality,
    hobby,
    drink,
    idealtype,
    openlink,
    hashtag,
    selfintro,
  ) => {
    this.selectedMeeting.time = time;
    this.selectedMeeting.email = email;
    this.selectedMeeting.sex = sex;
    this.selectedMeeting.type = type;
    this.selectedMeeting.TwoTwoFirstAge = TwoTwoFirstAge;
    this.selectedMeeting.TwoTwoFirstCollage = TwoTwoFirstCollage;
    this.selectedMeeting.TwoTwoSecondAge = TwoTwoSecondAge;
    this.selectedMeeting.TwoTwoSecondCollage = TwoTwoSecondCollage;
    this.selectedMeeting.ThreeThreeFirstAge = ThreeThreeFirstAge;
    this.selectedMeeting.ThreeThreeFirstCollage = ThreeThreeFirstCollage;
    this.selectedMeeting.ThreeThreeSecondAge = ThreeThreeSecondAge;
    this.selectedMeeting.ThreeThreeSecondCollage = ThreeThreeSecondCollage;
    this.selectedMeeting.ThreeThreeThirdAge = ThreeThreeThirdAge;
    this.selectedMeeting.ThreeThreeThirdCollage = ThreeThreeThirdCollage;
    this.selectedMeeting.FourFourFirstAge = FourFourFirstAge;
    this.selectedMeeting.FourFourFirstCollage = FourFourFirstCollage;
    this.selectedMeeting.FourFourSecondAge = FourFourSecondAge;
    this.selectedMeeting.FourFourSecondCollage = FourFourSecondCollage;
    this.selectedMeeting.FourFourThirdAge = FourFourThirdAge;
    this.selectedMeeting.FourFourThirdCollage = FourFourThirdCollage;
    this.selectedMeeting.FourFourFourthAge = FourFourFourthAge;
    this.selectedMeeting.FourFourFourthCollage = FourFourFourthCollage;
    this.selectedMeeting.appearance = appearance;
    this.selectedMeeting.personality = personality;
    this.selectedMeeting.hobby = hobby;
    this.selectedMeeting.drink = drink;
    this.selectedMeeting.idealtype = idealtype;
    this.selectedMeeting.openlink = openlink;
    this.selectedMeeting.hashtag = hashtag;
    this.selectedMeeting.selfintro = selfintro;

    console.log(this.selectedMeeting);
  };
  @action
  setSelectedUser = (
    time,
    email,
    kakaoid,
    sex,
    age,
    collage,
    appearance,
    personality,
    hobby,
    religion,
    smoke,
    idealtype,
    openchatlink,
    hashtag,
    selfintro,
  ) => {
    this.selectedUser.time = time;
    this.selectedUser.email = email;
    this.selectedUser.kakaoid = kakaoid;
    this.selectedUser.sex = sex;
    this.selectedUser.age = age;
    this.selectedUser.collage = collage;
    this.selectedUser.appearance = appearance;
    this.selectedUser.personality = personality;
    this.selectedUser.hobby = hobby;
    this.selectedUser.religion = religion;
    this.selectedUser.smoke = smoke;
    this.selectedUser.idealtype = idealtype;
    this.selectedUser.openchatlink = openchatlink;
    this.selectedUser.hashtag = hashtag;
    this.selectedUser.selfintro = selfintro;

    console.log(this.selectedUser);
  };
}

export default UserListStore;
