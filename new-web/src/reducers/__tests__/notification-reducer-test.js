import reducer from '../notification-reducer';
import store from '../store';

describe('notificationReducer', () => {
  it('is empty by default', () => {
    expect(reducer().toJS()).toEqual({ errorMessage: undefined, successMessage: undefined });
  });

  it('sets errorMessage when LOGIN_FAILURE is received', () => {
    expect(reducer(undefined, { type: 'LOGIN_FAILURE' }).toJS())
      .toEqual({ errorMessage: 'Login failed.', successMessage: undefined });
  });

  it('resets messages when MESSAGE_RESET is received', () => {
    expect(reducer({ errorMessage: 'message', successMessage: 'message' }, { type: 'MESSAGE_RESET' }).toJS())
      .toEqual({ errorMessage: undefined, successMessage: undefined });
  });
});
