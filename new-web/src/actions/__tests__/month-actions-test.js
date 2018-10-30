import monthActions from '../month-actions';
import store from '../../reducers/store';
import * as dayActions from '../day-actions';

describe('monthActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(dayActions, 'getDaysForMonth');
  });

  describe('nextMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.nextMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'NEXT_MONTH'});
      expect(dayActions.getDaysForMonth).toHaveBeenCalled();
    });
  });

  describe('previousMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.previousMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'PREVIOUS_MONTH'});
      expect(dayActions.getDaysForMonth).toHaveBeenCalled();
    });
  });
});
