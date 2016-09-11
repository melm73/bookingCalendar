import dayModalActions from '../day-modal-actions';
import store from '../../stores/store';

describe('dayModalActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('showModal', () => {
    it('dispatches the action to the store', () => {
      dayModalActions.showModal('day');
      expect(store.dispatch).toHaveBeenCalledWith({type: 'SHOW_MODAL', day: 'day'});
    });
  });

  describe('closeModal', () => {
    it('dispatches the action to the store', () => {
      dayModalActions.closeModal();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'CLOSE_MODAL'});
    });
  });
});
