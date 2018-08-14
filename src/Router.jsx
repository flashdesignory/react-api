import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserPage from './routes/UserPage';
import DogPage from './routes/DogPage';
import LoginPage from './routes/LoginPage';

const Router = ({ loggedIn, updateStatus }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (loggedIn ? <DogPage /> : <LoginPage updateStatus={updateStatus} />)}
    />
    <Route
      path="/user"
      render={() => (loggedIn ? <UserPage /> : <LoginPage updateStatus={updateStatus} />)}
    />
    <Route
      path="/dog"
      render={() => (loggedIn ? <DogPage /> : <LoginPage updateStatus={updateStatus} />)}
    />
    <Route path="/login" component={LoginPage} />
  </Switch>
);

Router.defaultProps = {
  loggedIn: false,
  updateStatus: () => {},
};

Router.propTypes = {
  loggedIn: PropTypes.bool,
  updateStatus: PropTypes.func,
};

export default Router;
