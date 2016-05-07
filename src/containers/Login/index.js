'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { LoginTemplate } from './template';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin() {
    // TODO: Episode 5 will show authentication and the Redux pattern
    browserHistory.replace('/landing');
  }
  
  render() {
    return LoginTemplate(this);
  }
}