import axios from 'axios';

const url = 'https://express-api-mongo.herokuapp.com/';

export default {
  signin(user) {
    return axios.post(`${url}signin`, user);
  },
};
