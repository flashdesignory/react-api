import React, { Component } from 'react';
// import axios from 'axios';
import api from './lib/api';
import List from './modules/list';
import NewUser from './modules/newUser';
import './app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      /* currentUser: '', */
    };
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.createOne = this.createOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    api.getAll().then((res) => {
      this.updateUsers(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  getOne(id) {
    this.funcName = 'getOne'; // eslint ... but why????
    api.getOne(id).then((res) => {
      const currentUser = res.data[0];
      console.log(currentUser);
      // this.setState({ currentUser });
    })
      .catch((err) => {
        console.log(err);
      });
  }

  createOne(user) {
    api.createOne(user).then((res) => {
      this.updateUsers(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  updateOne(user) {
    api.updateOne(user).then((res) => {
      console.log('updated user');
      this.updateUsers(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteOne(id) {
    api.deleteOne(id).then((res) => {
      console.log('deleted user');
      this.updateUsers(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUsers(users) {
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <NewUser createOne={this.createOne} />
        <div className="separator" />
        <List
          users={users}
          deleteOne={this.deleteOne}
          updateOne={this.updateOne}
          getOne={this.getOne}
        />
      </div>
    );
  }
}

export default App;
