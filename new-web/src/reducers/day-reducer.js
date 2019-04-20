import { Map } from 'immutable';
import { SET_DAYS } from '../actions/action-types';

const INITIAL_STATE = Map({
  loaded: false,
  days: Map()
});

export default function dayStore(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_DAYS:
      return setDays(state, action.days);
    default:
      return state
  }
}

function setDays(state, days) {
  return state.set('loaded', true)
    .set('days', new Map(days));
}
