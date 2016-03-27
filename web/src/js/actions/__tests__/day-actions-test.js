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
      dayActions.getDays();
      expect(ajaxUtil.get).toHaveBeenCalled();

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

  describe('saveDay', () => {
    it('calls update day if day already exists', () => {
      let day = {id: '123'};
      spyOn(dayActions, 'updateDay');
      dayActions.saveDay(day);
      expect(dayActions.updateDay).toHaveBeenCalledWith(day);
    });

    it('calls create day if day doenst exists', () => {
      let day = {day: 11};
      spyOn(dayActions, 'createDay');
      dayActions.saveDay(day);
      expect(dayActions.createDay).toHaveBeenCalledWith(day);
    });
  });

  describe('createDay', () => {
    it('calls the ajax util to post the day', () => {
      let day = {day: 11};
      spyOn(ajaxUtil, 'post').and.returnValue(Promise.resolve());
      dayActions.createDay(day);
      expect(ajaxUtil.post).toHaveBeenCalled();

      let postArgs = ajaxUtil.post.calls.argsFor(0)[0];
      expect(postArgs.url).toEqual('day');
      expect(postArgs.body).toEqual(day);

      spyOn(dayActions, 'storeDay');
      let successCallback = postArgs.onSuccess;
      successCallback('day');

      expect(dayActions.storeDay).toHaveBeenCalledWith('day');
    });
  });

  describe('updateDay', () => {
    it('calls the ajax util to update the day', () => {
      let day = {id: '12', day: 11};
      spyOn(ajaxUtil, 'put').and.returnValue(Promise.resolve());
      dayActions.updateDay(day);
      expect(ajaxUtil.put).toHaveBeenCalled();

      let putArgs = ajaxUtil.put.calls.argsFor(0)[0];
      expect(putArgs.url).toEqual('day/12');
      expect(putArgs.body).toEqual(day);

      spyOn(dayActions, 'storeDay');
      let successCallback = putArgs.onSuccess;
      successCallback('day');

      expect(dayActions.storeDay).toHaveBeenCalledWith('day');
    });
  });

  describe('storeDay', () => {
    it('sends the day to the store', () => {
      dayActions.storeDay('day');
      expect(store.dispatch).toHaveBeenCalledWith({type: 'SET_DAY', day: 'day'});
    });
  });
});
