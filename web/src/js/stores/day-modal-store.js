import { Map } from 'immutable';

const INITIAL_STATE = Map({
  show: false,
  day: null
});

export default function dayModalStore(state = INITIAL_STATE, action = { type: 'NO_ACTION' }) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return showModal(state, action.day);
    case 'CLOSE_MODAL':
      return closeModal(state);
  }
  return state;
}

function showModal(state, day) {
  return state.set('show', true)
              .set('day', day);
}

function closeModal(state) {
  return state.set('show', false)
              .set('day', null);
}
