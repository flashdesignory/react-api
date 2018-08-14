import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';

import './Header.scss';

const Header = ({ loggedIn, updateStatus }) => (
  <div className="header">
    <div className="title">
API Playground
    </div>
    {loggedIn && <Navigation updateStatus={updateStatus} />}
  </div>
);

Header.defaultProps = {
  loggedIn: false,
  updateStatus: () => {},
};

Header.propTypes = {
  loggedIn: PropTypes.bool,
  updateStatus: PropTypes.func,
};

export default Header;
