'use strict';

import React, { Component } from 'react';
import { MemeGridTemplate } from './template';
import { findMemes } from '../../services/api';

export default class MemeGrid extends Component {
  constructor(props) {
    super(props);

    this.refreshMemes = this.refreshMemes.bind(this);
    this.state = {
      memes: []
    };
  }

  refreshMemes() {
    var self = this;
    findMemes()
      .then(payload => {
        self.setState({
          memes: payload.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.refreshMemes();
  }

  render() {
    return MemeGridTemplate(this);
  }
}
