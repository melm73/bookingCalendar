import guestStore from '../guest-store';

describe('guestStore', () => {
  let guest1, guest2;
  beforeEach(() => {
    guest1 = {id: '12ab', name: 'Melanie', owner: true};
    guest2 = {id: 'cd24', name: 'Paul'};
  });

  it('has a default state', () => {
    const state = guestStore();
    expect(state.get('loaded')).toEqual(false);
    expect(state.get('guests').toJS()).toEqual({});
  });

  describe('SET_GUESTS', () => {
    it('sets the guests map and loaded to true', () => {
      let state = guestStore(undefined, {type: 'SET_GUESTS', guests: [guest1, guest2]});
      expect(state.get('loaded')).toEqual(true);
      expect(state.get('guests').toJS()).toEqual({'12ab': guest1, 'cd24': guest2});
    });
  });
});
