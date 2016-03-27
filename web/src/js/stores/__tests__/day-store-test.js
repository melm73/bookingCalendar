import dayStore from '../day-store';

describe('day-store', () => {
  let day1, day2;
  beforeEach(() => {
    day1 = {day: 11, month: 2, year: 2016 };
    day2 = {day: 24, month: 2, year: 2016 };
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

  describe('SET_DAY', () => {
    it('adds or replaces the day in the days array', () => {
      let newDay = {day: 12, month: 2};
      let updatedDay = {day: 11, schoolHoliday: true};
      let initialState = dayStore(undefined, {type: 'SET_DAYS', days: [day1, day2]});

      let state = dayStore(initialState, {type: 'SET_DAY', day: updatedDay});
      expect(state.get('days').toJS()).toEqual({11: updatedDay, 24: day2});

      state = dayStore(state, {type: 'SET_DAY', day: newDay});
      expect(state.get('days').toJS()).toEqual({11: updatedDay, 24: day2, 12: newDay});
    });
  });
});
