import React from 'react';
import { shallow } from 'enzyme';
import Day from '../day';
import Guest from '../guest';

describe('Day', () => {
  let dayComponent;
  const guests = [{ name: 'Me', owner: true }, { name: 'You', owner: false }];

  beforeEach(() => {
  	dayComponent = shallow(
      <Day 
        day={12}
        schoolHoliday
        publicHoliday='Holiday Name'
        notes='some notes'
        guests={guests}
      />
    );
  });

  it('has a day number', () => {
  	const firstRow = dayComponent.childAt(0);
    expect(firstRow.childAt(0).text()).toEqual('12');
  });

  it('has a description', () => {
  	const firstRow = dayComponent.childAt(0);
    expect(firstRow.childAt(1).text()).toEqual('Holiday Name');
  });

  it('has guests', () => {
    const thirdRow = dayComponent.childAt(1);

    expect(thirdRow.children().length).toEqual(2);

    expect(thirdRow.childAt(0).type()).toEqual(Guest);
    expect(thirdRow.childAt(0).prop('name')).toEqual('Me');
    expect(thirdRow.childAt(0).prop('owner')).toEqual(true);
    
    expect(thirdRow.childAt(1).type()).toEqual(Guest);
    expect(thirdRow.childAt(1).prop('name')).toEqual('You');
    expect(thirdRow.childAt(1).prop('owner')).toEqual(false);
  });

  it('has notes', () => {
  	const fourthRow = dayComponent.childAt(2);
    expect(fourthRow.text()).toEqual('some notes');
  });
});
