import store from '../stores/store';
import dayActions from './day-actions';

export class MonthActions {

  nextMonth() {
    store.dispatch({type: 'NEXT_MONTH'});
    dayActions.getDays();
  }

  previousMonth() {
    store.dispatch({type: 'PREVIOUS_MONTH'});
    dayActions.getDays();
  }
}

export default new MonthActions();
