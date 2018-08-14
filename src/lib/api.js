import axios from 'axios';

const url = 'https://express-api-mongo.herokuapp.com/';

export default {
  getAll(route) {
    return axios.get(`${url}${route}`);
  },
  getOne(route, id) {
    return axios.get(`${url}${route}${id}`);
  },
  createOne(route, user) {
    return axios.post(`${url}${route}`, user);
  },
  updateOne(route, user) {
    return axios.put(`${url}${route}${user.id}`, user);
  },
  deleteOne(route, id) {
    return axios.delete(`${url}${route}${id}`);
  },
};
