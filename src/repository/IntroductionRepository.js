import axios from 'axios';

class IntroductionRepository {
  //
  URI = '';

  constructor(uri) {
    this.URI = uri || this.URI;
  }

  findAll(params) {
    return axios.get(`${this.URL}`, { params });
  }

  findOne(userId) {
    return axios.get(`${this.URL}/${userId}`);
  }
}

export default new IntroductionRepository();
