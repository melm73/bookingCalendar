import { Map } from 'immutable';

const INITIAL_STATE = Map({
  loaded: false,
  days: Map()
});

export default function dayStore(state = INITIAL_STATE, action = { type: 'NO_ACTION' }) {
  switch (action.type) {
    case 'SET_DAYS':
      return setDays(state, action.days);
  }
  return state;
}

function setDays(state, days) {
  return state.set('loaded', true)
    .set('days', days.reduce((map, day) => map.set(day.day, day), Map()));
}
