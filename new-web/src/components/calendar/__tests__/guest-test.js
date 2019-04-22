import React from 'react';
import { shallow } from 'enzyme';
import Guest from '../guest';

describe('Guest', () => {
  it('renders the name', () => {
  	const guest = shallow(<Guest name="Melanie" owner />);

    expect(guest.text()).toEqual("Melanie");
  });
});
