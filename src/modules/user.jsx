import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../fonts.scss';
import './user.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  componentDidMount() {
    const { first, last } = this.props;
    this.setState({
      firstName: first,
      lastName: last,
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

  deleteOne(e) {
    const { deleteOne, id } = this.props;
    e.preventDefault();
    deleteOne(id);
  }

  updateOne(e) {
    const { first, last } = this.props;
    const { updateOne, id } = this.props;
    const { firstName, lastName } = this.state;
    e.preventDefault();
    if (firstName === first && lastName === last) {
      return;
    }

    updateOne({
      id,
      first_name: firstName,
      last_name: lastName,
    });
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div className="user-container">
        <form className="user" onSubmit={this.handleOnSubmit}>
          <input className="field first-name" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} value={firstName} />
          <input className="field last-name" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} value={lastName} />
          <button className="button update" type="submit" onClick={this.updateOne}>
            <span className="icon-refresh" />
          </button>
          <button className="button delete" onClick={this.deleteOne} type="button">
            <span className="icon-cancel" />
          </button>
        </form>
      </div>
    );
  }
}

User.defaultProps = {
  deleteOne: () => {},
  updateOne: () => {},
  first: '',
  last: '',
  id: '',
};

User.propTypes = {
  updateOne: PropTypes.func,
  deleteOne: PropTypes.func,
  first: PropTypes.string,
  last: PropTypes.string,
  id: PropTypes.string,
};

export default User;
