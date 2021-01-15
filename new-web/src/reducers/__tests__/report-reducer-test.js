import reducer from '../report-reducer';
import moment from 'moment';
import store from '../store';

describe('reportReducer', () => {
  it('defaults to current year', () => {
    const state = reducer();
    expect(state.get('year')).toEqual(moment().year());
  });

  it('saves the day information for each month', () => {
    const state = reducer(undefined, {type: 'SET_REPORT_DAYS', month: 1, days: 'days1'});


    const newState = reducer(state, {type: 'SET_REPORT_DAYS', month: 2, days: 'days2'});
    console.log(newState.toJS());

    expect(newState.get('days').get('1')).toEqual('days1');
    expect(newState.get('days').get('2')).toEqual('days2');
  });
});
