import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import App from './';

describe('/components/App', () => {
  it('should render', () => {
    const item = renderIntoDocument(
      <App />
    );

    // Assertions
    expect(item).toExist();
  });
});