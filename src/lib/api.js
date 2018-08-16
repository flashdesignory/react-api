import axios from 'axios';

const url = 'https://express-api-mongo.herokuapp.com/';

export default {
  getAll(route) {
    return axios.get(`${url}${route}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
  getOne(route, id) {
    return axios.get(`${url}${route}${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
  createOne(route, user) {
    return axios.post(`${url}${route}`, user, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
  updateOne(route, user) {
    return axios.put(`${url}${route}${user.id}`, user, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
  deleteOne(route, id) {
    return axios.delete(`${url}${route}${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
};
