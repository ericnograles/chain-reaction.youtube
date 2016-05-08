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
  });
});