import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dog extends Component {
  state = {
    name: '',
    owner: '',
  };

  componentDidMount() {
    const { name, owner } = this.props;
    this.setState({ name, owner });
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleOwnerChange = (e) => {
    this.setState({
      owner: e.target.value,
    });
  };

  updateDog = (e) => {
    const { updateDog, id } = this.props;
    const { name, owner } = this.state;
    const { name: originalName, owner: originalOwner } = this.props;

    if (name === originalName && owner === originalOwner) return;

    updateDog({ id, name, owner });
    e.preventDefault();
  };

  deleteDog = (e) => {
    const { deleteDog, id } = this.props;
    deleteDog(id);
    e.preventDefault();
  };

  render() {
    const { name, owner } = this.state;

    return (
      <div className="module dog">
        <form className="form dog">
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
          <button className="button update" type="button" onClick={this.updateDog}>
            <span className="icon-refresh" />
          </button>
          <button className="button delete" type="button" onClick={this.deleteDog}>
            <span className="icon-cancel" />
          </button>
        </form>
      </div>
    );
  }
}

Dog.defaultProps = {
  name: '',
  owner: '',
  id: '',
  updateDog: () => {},
  deleteDog: () => {},
};

Dog.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  id: PropTypes.string,
  updateDog: PropTypes.func,
  deleteDog: PropTypes.func,
};

export default Dog;
