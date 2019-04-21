import React from 'react';
import { shallow } from 'enzyme';
import Month from '../month';
import BlankDay from '../blank-day';
import Day from '../day';

describe('Month', () => {
  let monthComponent, days, day11, day24, month, year;

  beforeEach(() => {
    day11 = { school_holiday: true };
    day24 = { notes: 'my notes' };
    days = { '11': day11, '24': day24 };
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

      expect(firstRow.childAt(0).text()).toEqual('MON');
      expect(firstRow.childAt(1).text()).toEqual('TUE');
      expect(firstRow.childAt(2).text()).toEqual('WED');
      expect(firstRow.childAt(3).text()).toEqual('THU');
      expect(firstRow.childAt(4).text()).toEqual('FRI');
      expect(firstRow.childAt(5).text()).toEqual('SAT');
      expect(firstRow.childAt(6).text()).toEqual('SUN');
    });

    it('has blank days at the start of the first row of days', () => {
      let secondRow = monthComponent.childAt(1);

      expect(secondRow.children().length).toEqual(7);

      console.log(secondRow.childAt(0).type());
      expect(secondRow.childAt(0).type()).toEqual(BlankDay);
      expect(secondRow.childAt(1).type()).toEqual(Day);
    });

    it('has blank days at the end of the last row of days', () => {
      let sixthRow = monthComponent.childAt(5);

      expect(sixthRow.children().length).toEqual(7);

      expect(sixthRow.childAt(3).type()).toEqual(Day);
      expect(sixthRow.childAt(4).type()).toEqual(BlankDay);
      expect(sixthRow.childAt(5).type()).toEqual(BlankDay);
      expect(sixthRow.childAt(6).type()).toEqual(BlankDay);
    });

    it('passes new day objects if none exist', () => {
      let secondRow = monthComponent.childAt(1);
      let sixthRow = monthComponent.childAt(5);

      expect(secondRow.childAt(1).prop('attributes')).toEqual({});
      expect(sixthRow.childAt(3).prop('attributes')).toEqual({});
    });

    it('passes the day objects to the correct days', () => {
      let thirdRow = monthComponent.childAt(2);
      let fifthRow = monthComponent.childAt(4);

      expect(thirdRow.childAt(4).prop('attributes')).toEqual(day11);
      expect(fifthRow.childAt(3).prop('attributes')).toEqual(day24);
    });
  });
});
