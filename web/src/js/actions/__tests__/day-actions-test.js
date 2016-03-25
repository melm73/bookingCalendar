import dayActions from '../day-actions';
import ajaxUtil from '../../util/ajax-util';
import store from '../../stores/store';
import { fromJS } from 'immutable';

describe('dayActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('getDays', () => {
    it('calls the ajax util to get days for store month and year', () => {
      spyOn(store, 'getState').and.returnValue({monthStore: fromJS({month: 2, year: 2015})});
      spyOn(ajaxUtil, 'get').and.returnValue(Promise.resolve());
      let promise = dayActions.getDays();
      expect(ajaxUtil.get).toHaveBeenCalled();
      expect(promise.then).toBeDefined();

      let getArgs = ajaxUtil.get.calls.argsFor(0)[0];
      expect(getArgs.url).toEqual('days?month=2&year=2015');

      spyOn(dayActions, 'storeDays');
      let successCallback = getArgs.onSuccess;
      successCallback(['days']);

      expect(dayActions.storeDays).toHaveBeenCalledWith(['days']);
    });
  });

  describe('storeDays', () => {
    it('dispatches the days to the store', () => {
      dayActions.storeDays('days');
      expect(store.dispatch).toHaveBeenCalledWith({type: 'SET_DAYS', days: 'days'});
    });
  });
});
