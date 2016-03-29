import store from '../stores/store';
import ajaxUtil from '../util/ajax-util';

export class GuestActions {

  getGuests() {
    if (store.getState().guestStore.get('loaded')) {
      return;
    }

    return ajaxUtil.get({
      url: 'guests',
      onSuccess: response => this.storeGuests(response)
    });
  }

  storeGuests(guests) {
    store.dispatch({type: 'SET_GUESTS', guests: guests});
  }
}

export default new GuestActions();
