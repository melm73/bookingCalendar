import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import Calendar from './calendar/Calendar';
import Login from  './login/Login';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import requireAuth from './require-auth';

const Report = () => <h3>Report</h3>;

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <BrowserRouter>
            <div className="container">
              <Route exact path="/" component={Login} />
              <Route path="/app" component={requireAuth(Calendar)} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
