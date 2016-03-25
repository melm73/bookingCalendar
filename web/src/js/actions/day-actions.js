import store from '../stores/store';
import ajaxUtil from '../util/ajax-util';

export class DayActions {

  getDays() {
    let state = store.getState().monthStore.toJS();
    return ajaxUtil.get({
      url: `days?month=${state.month}&year=${state.year}`,
      onSuccess: response => this.storeDays(response)
    });
  }

  storeDays(days) {
    console.log(days);
    store.dispatch({type: 'SET_DAYS', days: days});
  }
}

export default new DayActions();
