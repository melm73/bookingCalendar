import { Map } from 'immutable';
import moment from 'moment';
import { SET_REPORT_DAYS } from '../actions/action-types';

const INITIAL_STATE = Map({
  year: moment().year(),
  days: Map()
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_REPORT_DAYS:
      return setDays(state, action.month, action.days);
    default:
      return state
  }
}

function setDays(state, month, days) {
  return state.setIn(['days', month.toString()], days);
}
