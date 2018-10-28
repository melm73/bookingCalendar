import { resetMessages } from '../notification-actions';
import * as actionTypes from '../action-types';
import store from '../../reducers/store';

describe('notificationActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('resetMessages', () => {
    it('dispatches the action to the store', () => {
      resetMessages();
      expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.MESSAGE_RESET });
    });
  });
});
