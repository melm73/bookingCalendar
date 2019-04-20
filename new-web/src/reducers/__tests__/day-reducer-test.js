import reducer from '../day-reducer';

describe('day-reducer', () => {
  it('has a default state', () => {
    const state = reducer();
    expect(state.get('loaded')).toEqual(false);
    expect(state.get('days').toJS()).toEqual({});
  });

  describe('SET_DAYS', () => {
    it('sets the days array and loaded to true', () => {
      let days = {
        '11': { school_holiday: true },
        '24': { notes: 'some notes' }
      };

      let state = reducer(undefined, {type: 'SET_DAYS', days: days});
      expect(state.get('loaded')).toEqual(true);
      expect(state.get('days').toJS()).toEqual(days);
    });
  });
});
