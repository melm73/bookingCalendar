import dayModalStore from '../day-modal-store';
import { fromJS } from 'immutable';

describe('dayModalStore', () => {
  it('has a default state', () => {
    const state = dayModalStore();
    expect(state.get('show')).toEqual(false);
    expect(state.get('day')).toEqual(null);
  });

  describe('SHOW_MODAL', () => {
    it('sets show flag to true and day to day', () => {
      let state = dayModalStore(undefined, {type: 'SHOW_MODAL', day: 'day'});
      expect(state.get('show')).toEqual(true);
      expect(state.get('day')).toEqual('day');
    });
  });

  describe('CLOSE_MODAL', () => {
    it('sets show flag to false and day to null', () => {
      let state = dayModalStore(fromJS({show: true}), {type: 'CLOSE_MODAL'});
      expect(state.get('show')).toEqual(false);
      expect(state.get('day')).toEqual(null);
    });
  });
});
