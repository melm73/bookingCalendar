import { createStore, combineReducers } from 'redux';
import dayStore from './day-store';
import monthStore from './month-store';

export default createStore(
  combineReducers({
    dayStore: dayStore,
    monthStore: monthStore
  })
);
