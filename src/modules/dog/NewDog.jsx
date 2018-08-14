import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewDog extends Component {
  state = {
    name: '',
    owner: '',
    error: '',
    enabled: false,
  };

  handleOnSubmit = (e) => {
    const { name, owner } = this.state;
    const { createDog } = this.props;

    if (name === '' || owner === '') {
      this.setState({
        name: '',
        owner: '',
        error: 'please enter a name and an owner',
        enabled: false,
      });
    } else {
      this.setState(
        {
          name: '',
          owner: '',
          error: '',
          enabled: false,
        },
        () => createDog({ name, owner }),
      );
    }
    e.preventDefault();
  };

  handleNameChange = (e) => {
    const { owner } = this.state;
    let enabled = false;

    if (owner !== '' && e.target.value !== '') {
      enabled = true;
    }

    this.setState({
      name: e.target.value,
      error: '',
      enabled,
    });
  };

  handleOwnerChange = (e) => {
    const { name } = this.state;
    let enabled = false;

    if (name !== '' && e.target.value !== '') {
      enabled = true;
    }

    this.setState({
      owner: e.target.value,
      error: '',
      enabled,
    });
  };

  render() {
    const {
      name, owner, error, enabled,
    } = this.state;
    return (
      <div className="module newdog">
        <form className="form new" onSubmit={this.handleOnSubmit}>
          <input
            className="input name"
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={name}
          />
          <input
            className="input owner"
            type="text"
            placeholder="Owner"
            onChange={this.handleOwnerChange}
            value={owner}
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

NewDog.defaultProps = {
  createDog: () => {},
};

NewDog.propTypes = {
  createDog: PropTypes.func,
};

export default NewDog;
