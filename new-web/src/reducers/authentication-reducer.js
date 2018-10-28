import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/action-types';

const initialState = false;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return false;
    case LOGIN_SUCCESS:
      return true;
    default:
      return state
  }
}
