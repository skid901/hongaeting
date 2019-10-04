import { observable, action } from 'mobx';

class SelectedUserStore{
  @observable ID = -1;
  @observable age = '';
  @observable nationality = '';
  @observable introduction = '';
  @observable tag1 = '';
  @observable tag2 = '';
  @observable tag3 = '';
  
  contructor(root){
    this.root = root;
  }

  @action
  setSelectedUser = (id, age, nationality, introduction, tag1, tag2, tag3) => {
    this.ID = id;
    this.age = age;
    this.nationality = nationality;
    this.introduction = introduction;
    this.tag1 = tag1;
    this.tag2 = tag2;
    this.tag3 = tag3;
    console.log(this.tag1, this.tag2, this.tag3)
  }
}

export default SelectedUserStore;