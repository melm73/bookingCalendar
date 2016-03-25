import React from 'react';
import Navigator from '../navigator';
import monthActions from '../../../actions/month-actions';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('Navigator', () => {
  let navigator, month, year;
  beforeEach(() => {
    month = 2;
    year = 2016;
    navigator = shallowRenderer(
      <Navigator month={month} year={year} />
    );
  });

  describe('render', () => {
    it('has two arrows and a title', () => {
      let [leftArrow, title, rightArrow] = navigator.props.children;
      expect(title.props.children).toEqual('February 2016');
    });
  });

  describe('click events', () => {
    describe('right arrow', () => {
      it('calls the next month action', () => {
        spyOn(monthActions, 'nextMonth');
        let clickHandler = navigator.props.children[2].props.children.props.onClick;
        clickHandler();
        expect(monthActions.nextMonth).toHaveBeenCalled();
      });
    });

    describe('left arrow', () => {
      it('calls the previous month action', () => {
        spyOn(monthActions, 'previousMonth');
        let clickHandler = navigator.props.children[0].props.children.props.onClick;
        clickHandler();
        expect(monthActions.previousMonth).toHaveBeenCalled();
      });
    });
  });
});
