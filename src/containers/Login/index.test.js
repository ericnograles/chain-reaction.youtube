import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Login from './';

describe('/components/Login', () => {
  it('should render', () => {
    const item = renderIntoDocument(
      <Login />
    );

    // Assertions
    expect(item).toExist();
    if (navigator.userAgent === 'node.js') {
      item.handleLogin();
      expect(window.location.pathname === '/landing').toBe(true, 'Must navigate to /landing');
    }
  });
});