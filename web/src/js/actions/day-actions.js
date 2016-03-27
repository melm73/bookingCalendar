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
    store.dispatch({type: 'SET_DAYS', days: days});
  }

  storeDay(day) {
    store.dispatch({type: 'SET_DAY', day: day});
  }

  saveDay(day) {
    if (day.id) {
      this.updateDay(day);
    } else {
      this.createDay(day);
    }
  }

  updateDay(day) {
    return ajaxUtil.put({
      url: `day/${day.id}`,
      body: day,
      onSuccess: response => this.storeDay(response)
    });
  }

  createDay(day) {
    return ajaxUtil.post({
      url: 'day',
      body: day,
      onSuccess: response => this.storeDay(response)
    });
  }
}

export default new DayActions();
