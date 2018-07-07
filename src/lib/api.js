import axios from 'axios';

const url = 'https://express-api-json.herokuapp.com/user/';

export default {
  getAll() {
    return axios.get(url);
  },
  getOne(id) {
    return axios.get(`${url}${id}`);
  },
  createOne(user) {
    return axios.post(`${url}`, user);
  },
  updateOne(user) {
    return axios.put(`${url}${user.id}`, user);
  },
  deleteOne(id) {
    return axios.delete(`${url}${id}`);
  },
};
