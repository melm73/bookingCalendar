import React from 'react';
import { shallow } from 'enzyme';
import Booking from '../booking';

describe('Booking', () => {
  it('renders Kay and Trevor when name is kt', () => {
  	const booking = shallow(<Booking name="kt" />);

    expect(booking.text()).toEqual("Kay, Trevor");
  });

  it('renders Melanie and Paul when mp', () => {
  	const booking = shallow(<Booking name="mp" />);

    expect(booking.text()).toEqual("Melanie, Paul");
  });

  it('renders Felicity and Samantha when fs', () => {
  	const booking = shallow(<Booking name="fs" />);

    expect(booking.text()).toEqual("Felicity, Samantha");
  });

  it('renders Lesley and Odin when ls', () => {
  	const booking = shallow(<Booking name="ls" />);

    expect(booking.text()).toEqual("Lesley, Odin");
  });

  it('renders anything else as is', () => {
  	const booking = shallow(<Booking name="guest" />);

    expect(booking.text()).toEqual("guest");
  });
});
