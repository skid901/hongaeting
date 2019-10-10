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

  getTableData = async () => {
    try {
      return await Axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=i0gchVvwsUP9jNshMCbFJmsdxEZfzsm0OhK28F5KZcW3y4KE6xzXdkPNFvyCbsMPJ-bSuWB4mK-ocihz4lZETjy7W_vVzzXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNDqu7FLxnJPNNE1ki_d61McY8SZB86pQUDuNXvr0D9VXnaam-Zer9zISwXhbGIXzsTvy1m0tLyP&lib=MpM8_BiH_Lkvqa1WlJSuLJ-f1ma5jnNam');
    } catch (error) {
      console.error(error);
    }
  }

  setTableData = async() => {
    const TableDatas = await this.getTableData();
    const datas = await TableDatas.data.user;
    const length = datas.length;
    let list = [];
    let tmp = {
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
    for(let i = 0; i < length ; i++){
      // tmp.id = TableDatas.data.user[i].id;
      // tmp.time = TableDatas.data.user[i].name;
      // tmp.age = TableDatas.data.user[i].age;
      // tmp.collage = TableDatas.data.user[i].collage;
      // tmp.kakaoid = TableDatas.data.user[i].kakaoid;
      // tmp.religion = TableDatas.data.user[i].religion;
      // tmp.personality = TableDatas.data.user[i].personality;
      // tmp.hobby = TableDatas.data.user[i].hobby;
      // tmp.idealtype = TableDatas.data.user[i].idealtype;
      // this.userList.push({
      //   id : tmp.id,
      //   time: tmp.time,
      //   age: tmp.age,
      //   collage: tmp.collage,
      //   kakaoid: tmp.kakaoid,
      //   religion: tmp.religion,
      //   personality: tmp.personality,
      //   hobby: tmp.hobby,
      //   idealtype: tmp.idealtype,
      // });
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