import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newUser.scss';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleOnSubmit(e) {
    const { createOne } = this.props;
    const { firstName, lastName } = this.state;
    e.preventDefault();

    createOne({
      first_name: firstName,
      last_name: lastName,
    });

    this.setState({
      firstName: '',
      lastName: '',
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div className="new-user-container">
        <form className="new-user" onSubmit={this.handleOnSubmit}>
          <input className="input first-name" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} value={firstName} />
          <input className="input last-name" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} value={lastName} />
          <input className="button button-block" type="submit" value="Add User" onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

NewUser.defaultProps = {
  createOne: () => {},
};

NewUser.propTypes = {
  createOne: PropTypes.func,
};

export default NewUser;
