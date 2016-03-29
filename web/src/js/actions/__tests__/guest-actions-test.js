import guestActions from '../guest-actions';
import ajaxUtil from '../../util/ajax-util';
import store from '../../stores/store';
import { fromJS } from 'immutable';

describe('guestActions', () => {
  beforeEach(() => {
    spyOn(store, 'dispatch');
  });

  describe('getGuests', () => {
    it('calls the ajax util to get guests if not loaded', () => {
      spyOn(store, 'getState').and.returnValue({guestStore: fromJS({loaded: false})});
      spyOn(ajaxUtil, 'get').and.returnValue(Promise.resolve());
      guestActions.getGuests();
      expect(ajaxUtil.get).toHaveBeenCalled();

      let getArgs = ajaxUtil.get.calls.argsFor(0)[0];
      expect(getArgs.url).toEqual('guests');

      spyOn(guestActions, 'storeGuests');
      let successCallback = getArgs.onSuccess;
      successCallback(['guests']);

      expect(guestActions.storeGuests).toHaveBeenCalledWith(['guests']);
    });

    it('does not refetch if loaded', () => {
      spyOn(store, 'getState').and.returnValue({guestStore: fromJS({loaded: true})});
      spyOn(ajaxUtil, 'get');
      spyOn(guestActions, 'storeGuests');
      guestActions.getGuests();
      expect(ajaxUtil.get).not.toHaveBeenCalled();
      expect(guestActions.storeGuests).not.toHaveBeenCalled();
    });
  });

  describe('storeGuests', () => {
    it('dispatches the guests to the store', () => {
      guestActions.storeGuests('guests');
      expect(store.dispatch).toHaveBeenCalledWith({type: 'SET_GUESTS', guests: 'guests'});
    });
  });
});
