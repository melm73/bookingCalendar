import store from '../stores/store';

export class DayModalActions {

  showModal(day) {
    store.dispatch({type: 'SHOW_MODAL', day: day});
  }

  closeModal() {
    store.dispatch({type: 'CLOSE_MODAL'});
  }
}

export default new DayModalActions();
