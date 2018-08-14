import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    const { firstName, lastName } = this.props;
    this.setState({ firstName, lastName });
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  updateUser = (e) => {
    const { updateUser, id } = this.props;
    const { firstName, lastName } = this.state;
    const { firstName: originalFirstname, lastName: originalLastName } = this.props;

    if (firstName === originalFirstname && lastName === originalLastName) return;

    updateUser({ id, first_name: firstName, last_name: lastName });
    e.preventDefault();
  };

  deleteUser = (e) => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
    e.preventDefault();
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="module user">
        <form className="form user">
          <input
            className="input firstName"
            type="text"
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={firstName}
          />
          <input
            className="input lastname"
            type="text"
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={lastName}
          />
          <button className="button update" type="button" onClick={this.updateUser}>
            <span className="icon-refresh" />
          </button>
          <button className="button delete" type="button" onClick={this.deleteUser}>
            <span className="icon-cancel" />
          </button>
        </form>
      </div>
    );
  }
}

User.defaultProps = {
  firstName: '',
  lastName: '',
  id: '',
  updateUser: () => {},
  deleteUser: () => {},
};

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
  updateUser: PropTypes.func,
  deleteUser: PropTypes.func,
};

export default User;
