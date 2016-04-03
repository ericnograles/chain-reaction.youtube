'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="hello-container">
          <span>{this.props.message}</span>
        </div>
    );
  }
}

ReactDOM.render(
  <Hello message="Holy smokes React is awesome. One more time with feeling!"></Hello>,
  document.getElementById('app')
);
