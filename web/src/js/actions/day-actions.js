import store from '../stores/store';
import ajaxUtil from '../util/ajax-util';

export class DayActions {

  getDays(month, year) {
    return ajaxUtil.get({
      url: `days?month=${month}&year=${year}`,
      onSuccess: response => this.storeDays(response)
    });
  }

  storeDays(days) {
    console.log(days);
    store.dispatch({type: 'SET_DAYS', days: days});
  }
}

export default new DayActions();
