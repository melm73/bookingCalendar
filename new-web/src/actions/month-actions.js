import store from '../reducers/store';
import { loadDays } from './day-actions';
import { NEXT_MONTH, PREVIOUS_MONTH, CURRENT_MONTH } from './action-types';

export class MonthActions {

  nextMonth() {
    store.dispatch({type: NEXT_MONTH});
    loadDays();
  }

  previousMonth() {
    store.dispatch({type: PREVIOUS_MONTH});
    loadDays();
  }

  currentMonth() {
  	store.dispatch({type: CURRENT_MONTH});
    loadDays();
  }
}

export default new MonthActions();
