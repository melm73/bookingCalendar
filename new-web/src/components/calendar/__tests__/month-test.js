import React from 'react';
import { shallow } from 'enzyme';
import Month from '../month';

describe('Month', () => {
  let monthComponent, days, month, year;

  beforeEach(() => {
    days = {'11': {id: '123', day: 11, month: 3, year: 2016}, '24': {id: '456', day: 24, month: 3, year: 2016}};
    month = 3;
    year = 2016;

    monthComponent = shallow(
      <Month days={days} month={month} year={year} />
    );
  });

  describe('render', () => {
    it('has a row of day titles', () => {
      let firstRow = monthComponent.childAt(0);

      expect(firstRow.children().length).toEqual(7);

      expect(firstRow.childAt(0).text()).toEqual('Monday');
      expect(firstRow.childAt(1).text()).toEqual('Tuesday');
      expect(firstRow.childAt(2).text()).toEqual('Wednesday');
      expect(firstRow.childAt(3).text()).toEqual('Thursday');
      expect(firstRow.childAt(4).text()).toEqual('Friday');
      expect(firstRow.childAt(5).text()).toEqual('Saturday');
      expect(firstRow.childAt(6).text()).toEqual('Sunday');
    });

    it('has blank days at the start of the first row of days', () => {
      let secondRow = monthComponent.childAt(1);

      expect(secondRow.children().length).toEqual(7);

      expect(secondRow.childAt(0).hasClass('blank')).toBeTruthy();
      expect(secondRow.childAt(1).hasClass('blank')).toBeFalsy();
    });

    it('has blank days at the end of the last row of days', () => {
      let sixthRow = monthComponent.childAt(5);

      expect(sixthRow.children().length).toEqual(7);

      expect(sixthRow.childAt(3).hasClass('blank')).toBeFalsy();
      expect(sixthRow.childAt(4).hasClass('blank')).toBeTruthy();
      expect(sixthRow.childAt(5).hasClass('blank')).toBeTruthy();
      expect(sixthRow.childAt(6).hasClass('blank')).toBeTruthy();
    });

    it('passes new day objects if none exist', () => {
      let secondRow = monthComponent.childAt(1);
      let sixthRow = monthComponent.childAt(5);

      expect(secondRow.childAt(1).childAt(0).prop('day')).toEqual({ day: 1, month: 3, year: 2016 });
      expect(sixthRow.childAt(3).childAt(0).prop('day')).toEqual({ day: 31, month: 3, year: 2016 });
    });

    it('passes the day objects to the correct days', () => {
      let thirdRow = monthComponent.childAt(2);
      let fifthRow = monthComponent.childAt(4);

      expect(thirdRow.childAt(4).childAt(0).prop('day')).toEqual({id: '123', day: 11, month: 3, year: 2016});
      expect(fifthRow.childAt(3).childAt(0).prop('day')).toEqual({id: '456', day: 24, month: 3, year: 2016});
    });
  });
});
