import { createStore, combineReducers } from 'redux';
import dayStore from './day-store';

export default createStore(
  combineReducers({
    dayStore: dayStore
  })
);
