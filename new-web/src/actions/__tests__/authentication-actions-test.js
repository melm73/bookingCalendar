import { loginSuccess, loginFailure } from '../authentication-actions';
import * as actionTypes from '../action-types';
import store from '../../reducers/store';

describe('authenticationActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('loginSuccess', () => {
    it('dispatches the action to the store', () => {
      loginSuccess();
      expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.LOGIN_SUCCESS });
    });
  });

  describe('loginFailure', () => {
    it('dispatches the action to the store', () => {
      loginFailure();
      expect(store.dispatch).toHaveBeenCalledWith({ type: actionTypes.LOGIN_FAILURE });
    });
  });
});
