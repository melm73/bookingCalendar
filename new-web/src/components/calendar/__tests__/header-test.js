import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('Header', () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('has an img', () => {
    expect(header.find('img').length).toEqual(1);
  });
});
