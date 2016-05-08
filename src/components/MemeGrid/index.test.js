import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import MemeGrid from './';

describe('/components/MemeGrid', () => {
  it('should render with memes', () => {
    var memes = [
      'http://www.multipelife.com/wp-content/uploads/2015/06/create-http-server-with-nodejs.png'
    ];
    const item = renderIntoDocument(
      <MemeGrid memes={memes} />
    );

    expect(item).toExist();
    expect(item.props.memes.length > 0).toBe(true, 'Memes should have been rendered');
  });
});