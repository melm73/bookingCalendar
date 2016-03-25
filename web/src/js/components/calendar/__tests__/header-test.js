import React from 'react';
import Header from '../header';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('Header', () => {
  let header;
  beforeEach(() => {
    header = shallowRenderer(<Header />);
  });

  it('has an img', () => {
    expect(header.props.children.type).toEqual('img');
  });
});
