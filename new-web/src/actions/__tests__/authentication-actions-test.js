import { login, logout } from '../authentication-actions';
import * as notificationActions from '../notification-actions';
import * as actionTypes from '../action-types';
import store from '../../reducers/store';

describe('authenticationActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(notificationActions, 'resetMessages');
  });

  describe('.login', () => {
    describe('with valid username password', () => {
      it('sends the LOGIN_SUCCESS message', () => {
        login('my-username', 'my-password');
        expect(notificationActions.resetMessages).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.LOGIN_SUCCESS });
      });
    });

    describe('with invalid username password', () => {
      it('sends the LOGIN_FAILURE action', () => {
        login('my-username', undefined);
        expect(notificationActions.resetMessages).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.LOGIN_FAILURE });
      });
    });
  });

  describe('.logout', () => {
    it('sends the LOGOUT action', () => {
      logout();
      expect(notificationActions.resetMessages).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.LOGOUT });
    });
  });
});
