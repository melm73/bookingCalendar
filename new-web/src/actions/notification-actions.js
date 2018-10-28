import { MESSAGE_RESET } from './action-types'
import store from '../reducers/store';

export function resetMessages() {
  store.dispatch({ type: MESSAGE_RESET });
}
