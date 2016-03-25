import store from '../stores/store';

export class MonthActions {

  nextMonth() {
    store.dispatch({type: 'NEXT_MONTH'});
  }

  previousMonth() {
    store.dispatch({type: 'PREVIOUS_MONTH'});
  }
}

export default new MonthActions();
