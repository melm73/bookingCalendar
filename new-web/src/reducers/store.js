import { createStore, combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';
import notificationReducer from './notification-reducer';

export default createStore(
  combineReducers({
    authenticated: authenticationReducer,
    notifications: notificationReducer
  })
);
