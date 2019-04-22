import * as NotificationActions from '../notification-actions';
import * as actionTypes from '../action-types';
import store from '../../reducers/store';
import * as DayApi from '../../api/day-api';
import { loadDays } from '../day-actions';
import * as Transformers from '../../transformers/day-transformer';

import { fromJS } from 'immutable';

describe('dayActions', () => {
  describe('loadDays', () => {
    it('retrieves the days from backend and sends the transformed days to the store', () => {
      spyOn(store, 'getState').and.returnValue({calendarMonth: fromJS({month: 2, year: 2015})});
      spyOn(store, 'dispatch');
      spyOn(NotificationActions, 'resetMessages');

      let apiDays = { '11': { school_holidays: true }};
      let transformedDays = { '11': { schoolHolidays: true }};
      spyOn(DayApi, 'getDays').and.returnValue(Promise.resolve(apiDays))
      spyOn(Transformers, 'transformFromApi').and.returnValue({ schoolHolidays: true });

      return loadDays().then(() => {
    		expect(DayApi.getDays).toHaveBeenCalledWith(2, 2015);
    		expect(NotificationActions.resetMessages).toHaveBeenCalled();
        expect(Transformers.transformFromApi).toHaveBeenCalledWith({ school_holidays: true });
    		expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.SET_DAYS, days: transformedDays });
      });
    });
  });
});
