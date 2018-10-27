import { LOGIN_SUCCESS, LOGIN_FAILURE } from './action-types'
import store from '../reducers/store';

export function loginSuccess() {
  store.dispatch({ type: LOGIN_SUCCESS });
}

export function loginFailure() {
  store.dispatch({ type: LOGIN_FAILURE });
}

export function login() {
	loginSuccess();
}

export function logout() {
	loginFailure();
}
