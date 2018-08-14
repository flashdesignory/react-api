import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginPage.scss';

const validUser = 'admin';
const validPassword = 'admin';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    enabled: false,
  };

  handleOnSubmit = (e) => {
    const { username, password } = this.state;
    const { updateStatus } = this.props;
    if (username === '' || password === '') {
      this.setState({
        username: '',
        password: '',
        error: 'please enter a username and password',
        enabled: false,
      });
    } else if (username === validUser && password === validPassword) {
      updateStatus(true);
    } else {
      this.setState({
        username: '',
        password: '',
        error: 'username or password do not match',
        enabled: false,
      });
    }
    e.preventDefault();
  };

  handleUsernameChange = (e) => {
    const { password } = this.state;
    let enabled = false;

    if (password !== '' && e.target.value !== '') {
      enabled = true;
    }
    this.setState({
      username: e.target.value,
      error: '',
      enabled,
    });
  };

  handlePasswordChange = (e) => {
    const { username } = this.state;
    let enabled = false;

    if (username !== '' && e.target.value !== '') {
      enabled = true;
    }

    this.setState({
      password: e.target.value,
      error: '',
      enabled,
    });
  };

  render() {
    const {
      username, password, error, enabled,
    } = this.state;
    return (
      <div className="page login">
        <form className="form login" onSubmit={this.handleOnSubmit}>
          <input
            className="input username"
            type="text"
            placeholder="Username"
            onChange={this.handleUsernameChange}
            value={username}
          />
          <input
            className="input password"
            type="text"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={password}
          />
          <input
            className="input submit"
            type="submit"
            onClick={this.handleOnSubmit}
            disabled={!enabled}
            value="Submit"
          />
        </form>
        <div className="error-message">
          {error}
        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  updateStatus: () => {},
};

LoginPage.propTypes = {
  updateStatus: PropTypes.func,
};

export default LoginPage;
