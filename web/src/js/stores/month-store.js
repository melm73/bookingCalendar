import { Map } from 'immutable';
import moment from 'moment';

const INITIAL_STATE = Map({
  month: moment().month() + 1,
  year: moment().year()
});

export default function dayStore(state = INITIAL_STATE, action = { type: 'NO_ACTION' }) {
  switch (action.type) {
    case 'NEXT_MONTH':
      return nextMonth(state);
    case 'PREVIOUS_MONTH':
      return previousMonth(state);
  }
  return state;
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
