import React from 'react';
import Month from '../month';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('Month', () => {
  let monthComponent, days, month, year;
  beforeEach(() => {
    days = {'11': {id: '123', day: 11, month: 3, year: 2016}, '24': {id: '456', day: 24, month: 3, year: 2016}};
    month = 3;
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

    it('has rows of days', () => {
      let secondRow = monthComponent.props.children[1][0];
      let thirdRow = monthComponent.props.children[1][1];
      let fourthRow = monthComponent.props.children[1][2];
      let fifthRow = monthComponent.props.children[1][3];
      let sixthRow = monthComponent.props.children[1][4];

      expect(secondRow.props.children.length).toEqual(6);
      expect(thirdRow.props.children.length).toEqual(7);
      expect(fourthRow.props.children.length).toEqual(7);
      expect(fifthRow.props.children.length).toEqual(7);
      expect(sixthRow.props.children.length).toEqual(4);

      expect(secondRow.props.children[0].props.children.props.day).toEqual({day: 1, month: 3, year: 2016});
      expect(thirdRow.props.children[3].props.children.props.day).toEqual({day: 10, month: 3, year: 2016});
      expect(thirdRow.props.children[4].props.children.props.day).toEqual({id: '123', day: 11, month: 3, year: 2016});
      expect(thirdRow.props.children[5].props.children.props.day).toEqual({day: 12, month: 3, year: 2016});
      expect(fifthRow.props.children[2].props.children.props.day).toEqual({day: 23, month: 3, year: 2016});
      expect(fifthRow.props.children[3].props.children.props.day).toEqual({id: '456', day: 24, month: 3, year: 2016});
      expect(fifthRow.props.children[4].props.children.props.day).toEqual({day: 25, month: 3, year: 2016});
      expect(sixthRow.props.children[3].props.children.props.day).toEqual({day: 31, month: 3, year: 2016});
    });
  });
});
