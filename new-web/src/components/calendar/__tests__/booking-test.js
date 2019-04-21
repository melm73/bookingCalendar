import React from 'react';
import { shallow } from 'enzyme';
import Booking from '../booking';

describe('Booking', () => {
  it('has a guest', () => {
  	const booking = shallow(<Booking guest="me" />);

    expect(booking.text()).toEqual("me");
  });
});
