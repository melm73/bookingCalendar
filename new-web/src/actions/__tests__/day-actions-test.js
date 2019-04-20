import * as NotificationActions from '../notification-actions';
import * as actionTypes from '../action-types';
import store from '../../reducers/store';
import * as DayApi from '../../api/day-api';
import { loadDays } from '../day-actions';

import { fromJS } from 'immutable';

describe('dayActions', () => {
  describe('loadDays', () => {
    it('retrieves the days from backend and sends the action to the store', () => {
      spyOn(store, 'getState').and.returnValue({calendarMonth: fromJS({month: 2, year: 2015})});
      spyOn(store, 'dispatch');
      spyOn(NotificationActions, 'resetMessages');

      let days = { '11': { school_holidays: true }};
      spyOn(DayApi, 'getDays').and.returnValue(Promise.resolve(days))

      return loadDays().then(() => {
		expect(DayApi.getDays).toHaveBeenCalledWith(2, 2015);
		expect(NotificationActions.resetMessages).toHaveBeenCalled();
		expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.SET_DAYS, days: days });
      });
    });
  });
});
