import { LOGIN_FAILURE, MESSAGE_RESET } from '../actions/action-types';

const initialState = { errorMessage: undefined, successMessage: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return { errorMessage: 'Login failed.', successMessage: state.successMessage };
    case MESSAGE_RESET:
      return initialState;
    default:
      return state
  }
}
