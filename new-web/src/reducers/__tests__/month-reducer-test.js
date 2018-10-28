import reducer from '../month-reducer';
import { fromJS } from 'immutable';
import moment from 'moment';

describe('reducer', () => {
  it('has a default state', () => {
    const state = reducer();
    expect(state.get('month')).toEqual(moment().month() + 1);
    expect(state.get('year')).toEqual(moment().year());
  });

  describe('NEXT_MONTH', () => {
    it('sets next month within year', () => {
      let initialState = fromJS({month: 11, year: 2015});
      let state = reducer(initialState, {type: 'NEXT_MONTH'});
      expect(state.get('month')).toEqual(12);
      expect(state.get('year')).toEqual(2015);
    });

    it('sets next month in next year', () => {
      let initialState = fromJS({month: 12, year: 2015});
      let state = reducer(initialState, {type: 'NEXT_MONTH'});
      expect(state.get('month')).toEqual(1);
      expect(state.get('year')).toEqual(2016);
    });
  });

  describe('PREVIOUS_MONTH', () => {
    it('sets previous month within year', () => {
      let initialState = fromJS({month: 11, year: 2015});
      let state = reducer(initialState, {type: 'PREVIOUS_MONTH'});
      expect(state.get('month')).toEqual(10);
      expect(state.get('year')).toEqual(2015);
    });

    it('sets previous month in previous year', () => {
      let initialState = fromJS({month: 1, year: 2016});
      let state = reducer(initialState, {type: 'PREVIOUS_MONTH'});
      expect(state.get('month')).toEqual(12);
      expect(state.get('year')).toEqual(2015);
    });
  });
});
