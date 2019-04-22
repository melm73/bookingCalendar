import { getDays } from '../api/day-api';
import store from '../reducers/store';
import { resetMessages } from './notification-actions';
import { SET_DAYS } from './action-types';
import { transformFromApi } from '../transformers/day-transformer';

export const loadDays = () => {
  resetMessages();

  let state = store.getState().calendarMonth.toJS();

  return getDays(state.month, state.year).then((days) => {
  	let transformedDays = {};
  	Object.keys(days).forEach(key => {
  		transformedDays[key] = transformFromApi(days[key])
  	});

    store.dispatch({type: SET_DAYS, days: transformedDays});
  });
}
