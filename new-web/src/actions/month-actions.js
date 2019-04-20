import store from '../reducers/store';
import { loadDays } from './day-actions';

export class MonthActions {

  nextMonth() {
    store.dispatch({type: 'NEXT_MONTH'});
    loadDays();
  }

  previousMonth() {
    store.dispatch({type: 'PREVIOUS_MONTH'});
    loadDays();
  }
}

export default new MonthActions();
