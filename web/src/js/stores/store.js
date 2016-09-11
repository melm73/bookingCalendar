import { createStore, combineReducers } from 'redux';
import dayStore from './day-store';
import monthStore from './month-store';
import guestStore from './guest-store';
import dayModalStore from './day-modal-store';

export default createStore(
  combineReducers({
    dayStore: dayStore,
    monthStore: monthStore,
    guestStore: guestStore,
    dayModalStore: dayModalStore
  })
);
