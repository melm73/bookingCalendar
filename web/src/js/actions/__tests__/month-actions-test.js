import monthActions from '../month-actions';
import store from '../../stores/store';

describe('monthActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('nextMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.nextMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'NEXT_MONTH'});
    });
  });

  describe('previousMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.previousMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'PREVIOUS_MONTH'});
    });
  });
});
