'use strict';

import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Login from '../Login';
import Landing from '../Landing';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }
  
  requireAuth(nextState, replace) {
    // TODO: Episode 5 will go over authentication using the Redux pattern
    var isAuthenticated = true;
    if (!isAuthenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }
  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/landing" component={Landing} onEnter={this.requireAuth} />
      </Router>
    );
  }
}