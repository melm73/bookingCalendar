import reducer from '../authentication-reducer';
import store from '../store';

describe('authenticationReducer', () => {
  it('returns false by default', () => {
    expect(reducer()).toEqual(false);
  });

  it('returns true when authentication succeeded', () => {
    expect(reducer(undefined, { type: 'LOGIN_SUCCESS' })).toEqual(true);
  });

  it('returns false when authentication failed', () => {
    expect(reducer(true, { type: 'LOGIN_FAILURE' })).toEqual(false);
  });
});
