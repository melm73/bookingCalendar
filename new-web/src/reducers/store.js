import { createStore, combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';

export default createStore(
  combineReducers({
    authenticated: authenticationReducer
  })
);
