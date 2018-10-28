import { Map } from 'immutable';
import moment from 'moment';
import { NEXT_MONTH, PREVIOUS_MONTH } from '../actions/action-types';

const initialState = Map({
  month: moment().month() + 1,
  year: moment().year()
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEXT_MONTH:
      return nextMonth(state);
    case PREVIOUS_MONTH:
      return previousMonth(state);
    default:
      return state
  }
}

function nextMonth(state) {
  if (state.get('month') === 12) {
    return state.set('month', 1).set('year', state.get('year') + 1);
  } else {
    return state.set('month', state.get('month') + 1);
  }
}

function previousMonth(state) {
  if (state.get('month') === 1) {
    return state.set('month', 12).set('year', state.get('year') - 1);
  } else {
    return state.set('month', state.get('month') - 1);
  }
}
