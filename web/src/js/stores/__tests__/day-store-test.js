import dayStore from '../day-store';

describe('day-store', () => {
  let day1, day2;
  beforeEach(() => {
    day1 = {id: 'ab12', day: 11, month: 2, year: 2016 };
    day2 = {id: 'cd34', day: 24, month: 2, year: 2016 };
  });

  it('has a default state', () => {
    const state = dayStore();
    expect(state.get('loaded')).toEqual(false);
    expect(state.get('days').toJS()).toEqual({});
  });

  describe('SET_DAYS', () => {
    it('sets the days array and loaded to true', () => {
      let state = dayStore(undefined, {type: 'SET_DAYS', days: [day1, day2]});
      expect(state.get('loaded')).toEqual(true);
      expect(state.get('days').toJS()).toEqual({11: day1, 24: day2});
    });
  });
});
