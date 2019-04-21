import React from 'react';
import { shallow } from 'enzyme';
import Navigator from '../navigator';
import { Link } from 'react-router-dom'
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
      let title = navigator.childAt(3);
      expect(title.text()).toEqual('FEBRUARY 2016');
    });
  });

  describe('click events', () => {
    describe('right arrow', () => {
      it('calls the next month action', () => {
        spyOn(monthActions, 'nextMonth');
        let clickHandler = navigator.childAt(2).prop('onClick');
        clickHandler();
        expect(monthActions.nextMonth).toHaveBeenCalled();
      });
    });

    describe('left arrow', () => {
      it('calls the previous month action', () => {
        spyOn(monthActions, 'previousMonth');
        let clickHandler = navigator.childAt(1).prop('onClick');
        clickHandler();
        expect(monthActions.previousMonth).toHaveBeenCalled();
      });
    });

    describe('today button', () => {
      it('calls the current month action', () => {
        spyOn(monthActions, 'currentMonth');
        let clickHandler = navigator.childAt(0).prop('onClick');
        clickHandler();
        expect(monthActions.currentMonth).toHaveBeenCalled();
      });
    });

    describe('reports link', () => {
      it('has a link to the reports page', () => {
        let link = navigator.childAt(4).find(Link);
        expect(link.prop('to')).toEqual('/reports');
      });
    });
  });
});
