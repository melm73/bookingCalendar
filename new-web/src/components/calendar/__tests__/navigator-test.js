import React from 'react';
import { shallow } from 'enzyme';
import Navigator from '../navigator';
import monthActions from '../../../actions/month-actions';

describe('Navigator', () => {
  let navigator, month, year;
  beforeEach(() => {
    month = 2;
    year = 2016;
    navigator = shallow(<Navigator month={month} year={year} />);
  });

  describe('render', () => {
    it('has two arrows and a title', () => {
      let title = navigator.childAt(1);
      expect(title.text()).toEqual('February 2016');
    });
  });

  describe('click events', () => {
    describe('right arrow', () => {
      it('calls the next month action', () => {
        spyOn(monthActions, 'nextMonth');
        let clickHandler = navigator.childAt(2).find('i').prop('onClick');
        clickHandler();
        expect(monthActions.nextMonth).toHaveBeenCalled();
      });
    });

    describe('left arrow', () => {
      it('calls the previous month action', () => {
        spyOn(monthActions, 'previousMonth');
        let clickHandler = navigator.childAt(0).find('i').prop('onClick');
        clickHandler();
        expect(monthActions.previousMonth).toHaveBeenCalled();
      });
    });
  });
});
