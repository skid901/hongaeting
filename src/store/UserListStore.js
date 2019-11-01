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

  @observable updated = false;
  @observable IsLoading = true;
  // getTableData = async () => {
  //   try {
  //     return await Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=i0gchVvwsUP9jNshMCbFJmsdxEZfzsm0OhK28F5KZcW3y4KE6xzXdkPNFvyCbsMPJ-bSuWB4mK-ocihz4lZETjy7W_vVzzXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNDqu7FLxnJPNNE1ki_d61McY8SZB86pQUDuNXvr0D9VXnaam-Zer9zISwXhbGIXzsTvy1m0tLyP&lib=MpM8_BiH_Lkvqa1WlJSuLJ-f1ma5jnNam');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  setTableData = async () => {
    // const TableDatas = await this.getTableData();
    const TableDatas = await Axios.get(
      // 'https://script.googleusercontent.com/macros/echo?user_content_key=Vouekj78ZDHKhZN8_uDcVG6S81lJbajvmL0qWHv6A9-FaZHwU85TrH1-Bu81oQ1DLVjLvIkuT1maQV0RY7KdsFw4Gc0HnOnTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAHnV50zKNKchOI6LPDRBzJqiaqXNrKnsCXdiPpUSQJM_BcUUpUFAkNjKVzuoDt6UdveWPraiRQB&lib=MFBncoPiqeUvwbaJDYMs81uf1ma5jnNam',
      'https://script.googleusercontent.com/macros/echo?user_content_key=D6LDynDbxmgjivdDVU7KFBDVQ_aw_E13MLl9_ox_ghLO-QUm_8j3kF3aEZUwswrK-NYh35vmwddsA344EL4GaMo1HI04uKTbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHHGsBdDm0gWgIYaf-RZABW2htqM0nmYSdLxlRRUhwUa_BoP1FYIifYYZpTak_o22Q&lib=MmtnMiguOcAKS_Win8w0ZfuzM5lHRHPlu',
    );
    const datas = await TableDatas.data.user;
    const length = datas.length;

    for (let i = 0; i < length; i++) {
      this.userList.push(datas[i]);
    }
    this.updated = true;
    this.IsLoading = false;
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
    this.selectedUser.religion = religion;
    this.selectedUser.personality = personality;
    this.selectedUser.hobby = hobby;
    this.selectedUser.idealtype = idealtype;
    this.selectedUser.smoke = smoke;
    this.selectedUser.openchatlink = openchatlink;
    this.selectedUser.hashtag = hashtag;
    this.selectedUser.selfintro = selfintro;

    console.log(this.selectedUser);
  };
}

export default UserListStore;
