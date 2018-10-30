import store from '../reducers/store';
import { getDaysForMonth } from './day-actions';

export class MonthActions {

  nextMonth() {
    store.dispatch({type: 'NEXT_MONTH'});
    getDaysForMonth();
  }

  previousMonth() {
    store.dispatch({type: 'PREVIOUS_MONTH'});
    getDaysForMonth();
  }
}

export default new MonthActions();
