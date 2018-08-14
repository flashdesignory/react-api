import React, { Component } from 'react';
import NewUser from '../modules/user/NewUser';
import UserList from '../modules/user/UserList';
import api from '../lib/api';
import './UserPage.scss';

const route = 'user/';

class UserPage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    api
      .getAll(route)
      .then((res) => {
        this.updateState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getUser = (id) => {
    api
      .getOne(route, id)
      .then((res) => {
        const currentUser = res.data[0];
        console.log(currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createUser = (user) => {
    const { users } = this.state;
    api
      .createOne(route, user)
      .then((res) => {
        this.updateState([res.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateUser = (updatedUser) => {
    const { users } = this.state;
    api
      .updateOne(route, updatedUser)
      .then((res) => {
        console.log(res.data);
        users.map((user) => {
          // eslint-disable-next-line no-underscore-dangle
          if (user._id !== updatedUser._id) return user;
          return Object.assign({}, users, updatedUser);
        });
        this.updateState(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteUser = (id) => {
    const { users } = this.state;
    api
      .deleteOne(route, id)
      .then((res) => {
        console.log(res.data);
        // eslint-disable-next-line no-underscore-dangle
        this.updateState(users.filter(user => user._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateState(users) {
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="page user">
        <div className="separator" />
        <NewUser createUser={this.createUser} />
        <div className="separator-bottom" />
        <UserList users={users} updateUser={this.updateUser} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default UserPage;
