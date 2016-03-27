import { Map } from 'immutable';

const INITIAL_STATE = Map({
  loaded: false,
  days: Map()
});

export default function dayStore(state = INITIAL_STATE, action = { type: 'NO_ACTION' }) {
  switch (action.type) {
    case 'SET_DAYS':
      return setDays(state, action.days);
    case 'SET_DAY':
      return setDay(state, action.day);
  }
  return state;
}

function setDays(state, days) {
  return state.set('loaded', true)
    .set('days', days.reduce((map, day) => map.set(day.day, day), Map()));
}

function setDay(state, day) {
  return state.set('days', state.get('days').set(day.day, day));
}
