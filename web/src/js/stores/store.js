import { createStore, combineReducers } from 'redux';
import dayStore from './day-store';
import monthStore from './month-store';
import guestStore from './guest-store';

export default createStore(
  combineReducers({
    dayStore: dayStore,
    monthStore: monthStore,
    guestStore: guestStore
  })
);
