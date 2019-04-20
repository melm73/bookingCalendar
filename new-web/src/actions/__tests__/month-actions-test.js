import monthActions from '../month-actions';
import store from '../../reducers/store';
import * as dayActions from '../day-actions';

describe('monthActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(dayActions, 'loadDays');
  });

  describe('nextMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.nextMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'NEXT_MONTH'});
      expect(dayActions.loadDays).toHaveBeenCalled();
    });
  });

  describe('previousMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.previousMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'PREVIOUS_MONTH'});
      expect(dayActions.loadDays).toHaveBeenCalled();
    });
  });

  describe('currentMonth', () => {
    it('dispatches the action to the store', () => {
      monthActions.currentMonth();
      expect(store.dispatch).toHaveBeenCalledWith({type: 'CURRENT_MONTH'});
      expect(dayActions.loadDays).toHaveBeenCalled();
    });
  });
});
