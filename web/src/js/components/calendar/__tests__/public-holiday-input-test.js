import React from 'react';
import PublicHolidayInput from '../public-holiday-input';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('PublicHolidayInput', () => {
  let onChangeSpy;
  beforeEach(() => {
    onChangeSpy = jasmine.createSpy('onChange');
  });

  describe('render', () => {
    it('does not show input when public holiday is null', () => {
      let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={null}/>);

      let [checkboxGroup, input] = publicHolidayInput.props.children;

      let [checkbox, label] = checkboxGroup.props.children.props.children;
      expect(checkbox.props.checked).toEqual(false);
      expect(label).toEqual('Public Holiday');

      expect(input.props.children.props.type).toEqual('hidden');
    });

    it('does not show input when public holiday is undefined', () => {
      let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={undefined}/>);

      let [checkboxGroup, input] = publicHolidayInput.props.children;

      let [checkbox, label] = checkboxGroup.props.children.props.children;
      expect(checkbox.props.checked).toEqual(false);
      expect(label).toEqual('Public Holiday');

      expect(input.props.children.props.type).toEqual('hidden');
    });

    it('shows input when public holiday is an empty string', () => {
      let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={''}/>);

      let [checkboxGroup, input] = publicHolidayInput.props.children;

      let [checkbox, label] = checkboxGroup.props.children.props.children;
      expect(checkbox.props.checked).toEqual(true);
      expect(label).toEqual('Public Holiday');

      expect(input.props.children.props.type).toEqual('text');
      expect(input.props.children.props.value).toEqual('');
    });

    it('shows input when public holiday is a string', () => {
      let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={'public holiday'}/>);

      let [checkboxGroup, input] = publicHolidayInput.props.children;

      let [checkbox, label] = checkboxGroup.props.children.props.children;
      expect(checkbox.props.checked).toEqual(true);
      expect(label).toEqual('Public Holiday');

      expect(input.props.children.props.type).toEqual('text');
      expect(input.props.children.props.value).toEqual('public holiday');
    });
  });

  describe('events', () => {
    describe('checkbox', () => {
      it('check calls the onChange prop with empty string value', () => {
        let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={null}/>);
        let checkbox = publicHolidayInput.props.children[0].props.children.props.children[0];

        checkbox.props.onChange({target: {checked: true}});

        expect(onChangeSpy).toHaveBeenCalledWith('');
      });

      it('uncheck calls the onChange prop with null value', () => {
        let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={'val'}/>);
        let checkbox = publicHolidayInput.props.children[0].props.children.props.children[0];

        checkbox.props.onChange({target: {checked: false}});

        expect(onChangeSpy).toHaveBeenCalledWith(null);
      });
    });

    describe('input', () => {
      it('calls the onChange prop with new value', () => {
        let publicHolidayInput = shallowRenderer(<PublicHolidayInput onChange={onChangeSpy} publicHoliday={'val'}/>);
        let input = publicHolidayInput.props.children[1].props.children;

        input.props.onChange({target: {value: 'newVal'}});

        expect(onChangeSpy).toHaveBeenCalledWith('newVal');
      });
    });
  });
});
