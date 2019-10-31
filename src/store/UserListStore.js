import { observable, action } from 'mobx';
import Axios from 'axios';

class UserListStore {
  @observable userList = [];

  @observable selectedUser = {
    id: '',
    time: '',
    age: '',
    collage: '',
    kakaoid: '',
    religion: '',
    personality: '',
    hobby: '',
    idealtype: ''
  };

  @observable updated = false;

  // getTableData = async () => {
  //   try {
  //     return await Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=i0gchVvwsUP9jNshMCbFJmsdxEZfzsm0OhK28F5KZcW3y4KE6xzXdkPNFvyCbsMPJ-bSuWB4mK-ocihz4lZETjy7W_vVzzXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNDqu7FLxnJPNNE1ki_d61McY8SZB86pQUDuNXvr0D9VXnaam-Zer9zISwXhbGIXzsTvy1m0tLyP&lib=MpM8_BiH_Lkvqa1WlJSuLJ-f1ma5jnNam');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  setTableData = async() => {
    // const TableDatas = await this.getTableData();
    const TableDatas = await Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=WnWpFhM5yj5Z3WR_saaDQbmRt1eZd2ujdEEdD_N8kaD7e--pL4x2fuN0OBzkOhud0M4Ze8MYYEFLukGg1ejohTN10843S_ksm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFBPz73e2WrZkf9wP3ZO19i8s8kPpA2RWAuoucn2i0fRJ0hcCy9P5lbBGfutvBSb5Poty-kVphcN&lib=MBv-eepqUijz4BcKdzqH2ie43OX7LkImB');
    const datas = await TableDatas.data.user;
    const length = datas.length;

    for(let i = 0; i < length ; i++){

      this.userList.push(datas[i])
    }
    this.updated = true;
  }

  @action
  setSelectedUser = (id, time, age, collage, kakaoid, religion, personality, hobby, idealtype) => {
    this.selectedUser.id = id;
    this.selectedUser.time = time;
    this.selectedUser.age = age;
    this.selectedUser.collage = collage;
    this.selectedUser.kakaoid = kakaoid;
    this.selectedUser.religion = religion;
    this.selectedUser.personality = personality;
    this.selectedUser.hobby = hobby;
    this.selectedUser.idealtype = idealtype;
    console.log(this.selectedUser)
  }
}



export default UserListStore;