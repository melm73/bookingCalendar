import { getDays } from '../api/day-api';
import store from '../reducers/store';
import { resetMessages } from './notification-actions';
import { SET_DAYS } from './action-types';

export const loadDays = () => {
  resetMessages();

  let state = store.getState().calendarMonth.toJS();

  return getDays(state.month, state.year).then((days) => {
	  store.dispatch({type: SET_DAYS, days: days});
  });
}
