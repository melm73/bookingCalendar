import React from 'react';
import { Calendar } from '../calendar';
import Header from '../header';
import Navigator from '../navigator';
import Month from '../month';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('Calendar', () => {
  let calendar, days, month, year;
  beforeEach(() => {
    days = ['days'];
    month = 2;
    year = 2016;
    calendar = shallowRenderer(
      <Calendar days={days} month={month} year={year} />
    );
  });

  it('has a header', () => {
    expect(calendar.props.children[0].type).toEqual(Header);
  });

  it('has a navigator', () => {
    let navigator = calendar.props.children[1];
    expect(navigator.type).toEqual(Navigator);
    expect(navigator.props.month).toEqual(month);
    expect(navigator.props.year).toEqual(year);
  });

  it('has a month table', () => {
    let monthTable = calendar.props.children[2];
    expect(monthTable.type).toEqual(Month);
    expect(monthTable.props.days).toEqual(days);
    expect(monthTable.props.month).toEqual(month);
    expect(monthTable.props.year).toEqual(year);
  });
});
