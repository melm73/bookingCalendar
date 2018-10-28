import { Map } from 'immutable';
import { LOGIN_FAILURE, MESSAGE_RESET } from '../actions/action-types';

const initialState = Map({ errorMessage: undefined, successMessage: undefined });

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return state.set('errorMessage', 'Login failed.');
    case MESSAGE_RESET:
      return initialState;
    default:
      return state
  }
}
