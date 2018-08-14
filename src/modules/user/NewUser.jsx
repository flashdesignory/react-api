import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    error: '',
    enabled: false,
  };

  handleOnSubmit = (e) => {
    const { firstName, lastName } = this.state;
    const { createUser } = this.props;

    if (firstName === '' || lastName === '') {
      this.setState({
        firstName: '',
        lastName: '',
        error: 'please enter a first and last name',
        enabled: false,
      });
    } else {
      this.setState(
        {
          firstName: '',
          lastName: '',
          error: '',
          enabled: false,
        },
        () => createUser({ first_name: firstName, last_name: lastName }),
      );
    }
    e.preventDefault();
  };

  handleFirstNameChange = (e) => {
    const { lastName } = this.state;
    let enabled = false;

    if (lastName !== '' && e.target.value !== '') {
      enabled = true;
    }

    this.setState({
      firstName: e.target.value,
      error: '',
      enabled,
    });
  };

  handleLastNameChange = (e) => {
    const { firstName } = this.state;
    let enabled = false;

    if (firstName !== '' && e.target.value !== '') {
      enabled = true;
    }

    this.setState({
      lastName: e.target.value,
      error: '',
      enabled,
    });
  };

  render() {
    const {
      firstName, lastName, error, enabled,
    } = this.state;
    return (
      <div className="module NewUser">
        <form className="form new" onSubmit={this.handleOnSubmit}>
          <input
            className="input firstName"
            type="text"
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={firstName}
          />
          <input
            className="input lastName"
            type="text"
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={lastName}
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

NewUser.defaultProps = {
  createUser: () => {},
};

NewUser.propTypes = {
  createUser: PropTypes.func,
};

export default NewUser;
