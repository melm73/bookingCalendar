import React from 'react';
import { shallow } from 'enzyme';
import Day from '../day';
import Booking from '../booking';
import Guest from '../guest';

describe('Day', () => {
  let dayComponent;
  const attrs = {
  	public_holiday: 'Holiday Name',
  	bookings: { 'kt': 1, 'mp': 1 },
    guests: [{ name: 'Me', owner: true }, { name: 'You', owner: false }],
  	notes: 'some notes'
  }

  beforeEach(() => {
  	dayComponent = shallow(<Day day={12} attributes={attrs} />);
  });

  it('has a day number', () => {
  	const firstRow = dayComponent.childAt(0);
    expect(firstRow.childAt(0).text()).toEqual('12');
  });

  it('has a description', () => {
  	const firstRow = dayComponent.childAt(0);
    expect(firstRow.childAt(1).text()).toEqual('Holiday Name');
  });

  it('has bookings', () => {
  	const secondRow = dayComponent.childAt(1);

  	expect(secondRow.children().length).toEqual(2);

  	expect(secondRow.childAt(0).type()).toEqual(Booking);
  	expect(secondRow.childAt(0).prop('name')).toEqual('kt');
  	
  	expect(secondRow.childAt(1).type()).toEqual(Booking);
  	expect(secondRow.childAt(1).prop('name')).toEqual('mp');
  });

  it('has guests', () => {
    const thirdRow = dayComponent.childAt(2);

    expect(thirdRow.children().length).toEqual(2);

    expect(thirdRow.childAt(0).type()).toEqual(Guest);
    expect(thirdRow.childAt(0).prop('name')).toEqual('Me');
    expect(thirdRow.childAt(0).prop('owner')).toEqual(true);
    
    expect(thirdRow.childAt(1).type()).toEqual(Guest);
    expect(thirdRow.childAt(1).prop('name')).toEqual('You');
    expect(thirdRow.childAt(1).prop('owner')).toEqual(false);
  });

  it('has notes', () => {
  	const fourthRow = dayComponent.childAt(3);
    expect(fourthRow.text()).toEqual('some notes');
  });
});
