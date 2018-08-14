import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Router from './Router';
import Header from './modules/header/Header';

import './ui.scss';
import './App.scss';

class App extends Component {
  state = {
    loggedIn: false,
  };

  updateStatus = (loggedIn) => {
    const { history } = this.props;
    if (loggedIn) history.push('/dog');
    this.setState({ loggedIn });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="container">
        <Header loggedIn={loggedIn} updateStatus={this.updateStatus} />
        <Router loggedIn={loggedIn} updateStatus={this.updateStatus} />
      </div>
    );
  }
}

App.defaultProps = {
  history: {},
};

App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
