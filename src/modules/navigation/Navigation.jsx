import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import './Navigation.scss';

class Navigation extends Component {
  static propTypes = {
    updateStatus: PropTypes.func,
  };

  static defaultProps = {
    updateStatus: () => {},
  };

  handleOnClick = (e) => {
    const { updateStatus } = this.props;
    updateStatus(false);
    e.preventDefault();
  };

  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/user">
Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dog">
Dogs
            </NavLink>
          </li>
          <li>
            <Button label="Logout" onClick={this.handleOnClick} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
