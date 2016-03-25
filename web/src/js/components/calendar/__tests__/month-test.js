import React from 'react';
import Month from '../month';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('Month', () => {
  let monthComponent, days, month, year;
  beforeEach(() => {
    days = {'11': {id: '123', day: 11, month: 2, year: 2016}, '24': {id: '456', day: 24, month: 2, year: 2016}};
    month = 2;
    year = 2016;
    monthComponent = shallowRenderer(
      <Month days={days} month={month} year={year} />
    );
  });

  describe('render', () => {
    it('has a row of day titles', () => {
      let firstRow = monthComponent.props.children[0];
      expect(firstRow.props.children.length).toEqual(7);
    });

    it('has a row of days', () => {
      let secondRow = monthComponent.props.children[1];
      expect(secondRow.props.children.length).toEqual(29);
      expect(secondRow.props.children[0].props.children.props.day).toEqual({day: 1, month: 2, year: 2016});
      expect(secondRow.props.children[9].props.children.props.day).toEqual({day: 10, month: 2, year: 2016});
      expect(secondRow.props.children[10].props.children.props.day).toEqual({id: '123', day: 11, month: 2, year: 2016});
      expect(secondRow.props.children[11].props.children.props.day).toEqual({day: 12, month: 2, year: 2016});
      expect(secondRow.props.children[22].props.children.props.day).toEqual({day: 23, month: 2, year: 2016});
      expect(secondRow.props.children[23].props.children.props.day).toEqual({id: '456', day: 24, month: 2, year: 2016});
      expect(secondRow.props.children[24].props.children.props.day).toEqual({day: 25, month: 2, year: 2016});
      expect(secondRow.props.children[28].props.children.props.day).toEqual({day: 29, month: 2, year: 2016});
    });
  });
});
