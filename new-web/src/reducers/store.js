import { createStore, combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';
import notificationReducer from './notification-reducer';
import monthReducer from './month-reducer';

export default createStore(
  combineReducers({
    authenticated: authenticationReducer,
    notifications: notificationReducer,
    calendarMonth: monthReducer
  })
);
