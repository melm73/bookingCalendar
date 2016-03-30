import React from 'react';
import BookingsForm from '../bookings-form';
import shallowRenderer from '../../../util/__tests__/shallow-renderer';

describe('BookingsForm', () => {
  let bookingsForm, props, onChangeSpy;
  beforeEach(() => {
    let guests = {
      'ee34': {id: 'ee34', name: 'Felicity'},
      'bb8': {id: 'bb8', name: 'Samantha'},
      'ab12': {id: 'ab12', name: 'Melanie'},
      'cd34': {id: 'cd34', name: 'Paul'}
    };
    onChangeSpy = jasmine.createSpy('onChange');
    props = {
      onChange: onChangeSpy,
      bookings: [],
      guests: guests
    };
  });

  describe('render', () => {
    describe('with no bookings', () => {
      it('has a select of all guests', () => {
        bookingsForm = shallowRenderer(<BookingsForm {...props} />);

        let [selectGroup, bookingsGroup] = bookingsForm.props.children;

        expect(selectGroup.props.children[0].props.children).toEqual('Add booking:');
        let select = selectGroup.props.children[1];

        let [placeholder, guests] = select.props.children;
        expect(placeholder.props.children).toEqual('Please select...');
        expect(guests[0].props.children).toEqual('Felicity');
        expect(guests[1].props.children).toEqual('Samantha');
        expect(guests[2].props.children).toEqual('Melanie');
        expect(guests[3].props.children).toEqual('Paul');

        expect(bookingsGroup.props.children).toEqual('No bookings');
      });
    });

    describe('with a booking', () => {
      it('has a select of less guests', () => {
        props.bookings = ['ab12', 'ee34'];
        bookingsForm = shallowRenderer(<BookingsForm {...props} />);

        let [selectGroup, bookingsGroup] = bookingsForm.props.children;

        expect(selectGroup.props.children[0].props.children).toEqual('Add booking:');
        let select = selectGroup.props.children[1];

        let [placeholder, guests] = select.props.children;
        expect(placeholder.props.children).toEqual('Please select...');
        expect(guests[0].props.children).toEqual('Samantha');
        expect(guests[1].props.children).toEqual('Paul');

        let firstBooking = bookingsGroup.props.children[0].props.children;
        expect(firstBooking[0].props.children).toEqual('Melanie');

        let secondBooking = bookingsGroup.props.children[1].props.children;
        expect(secondBooking[0].props.children).toEqual('Felicity');
      });
    });
  });

  describe('events', () => {
    describe('add booking', () => {
      it('calls the on change handler with booking added', () => {
        bookingsForm = shallowRenderer(<BookingsForm {...props} />);
        let select = bookingsForm.props.children[0].props.children[1];
        select.props.onChange({target: {value: 'bb8'}});
        expect(onChangeSpy).toHaveBeenCalledWith(['bb8']);

        select.props.onChange({target: {value: 'cd34'}});
        expect(onChangeSpy).toHaveBeenCalledWith(['bb8', 'cd34']);
      });
    });

    describe('remove booking', () => {
      it('calls the on change handler with booking removed', () => {
        props.bookings = ['bb8', 'cd34', 'ee34'];
        bookingsForm = shallowRenderer(<BookingsForm {...props} />);

        let middleBooking = bookingsForm.props.children[1].props.children[1];
        let x = middleBooking.props.children[1];
        x.props.onClick();
        expect(onChangeSpy).toHaveBeenCalledWith(['bb8', 'ee34']);
      });
    });
  });
});
