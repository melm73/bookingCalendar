import monthActions from '../month-actions';
import store from '../../stores/store';
import dayActions from '../day-actions';

describe('monthActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(dayActions, 'getDays');
  });

  describe('nextMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.nextMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'NEXT_MONTH'});
      expect(dayActions.getDays).toHaveBeenCalled();
    });
  });

  describe('previousMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.previousMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'PREVIOUS_MONTH'});
      expect(dayActions.getDays).toHaveBeenCalled();
    });
  });
});
