import dayActions from '../day-actions';
import ajaxUtil from '../../util/ajax-util';

describe('dayActions', () => {
  describe('getDays', () => {
    it('calls the ajax util to get days for month and year', () => {
      spyOn(ajaxUtil, 'get').and.returnValue(Promise.resolve());
      let promise = dayActions.getDays(2, 2015);
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
});
