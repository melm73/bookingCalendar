import { Map } from 'immutable';

const INITIAL_STATE = Map({
  loaded: false,
  guests: Map()
});

export default function guestStore(state = INITIAL_STATE, action = { type: 'NO_ACTION' }) {
  switch (action.type) {
    case 'SET_GUESTS':
      return setGuests(state, action.guests);
  }
  return state;
}

function setGuests(state, guests) {
  return state.set('loaded', true)
    .set('guests', guests.reduce((map, guest) => map.set(guest.id, guest), Map()));
}
