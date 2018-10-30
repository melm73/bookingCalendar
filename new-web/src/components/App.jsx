import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Calendar from './calendar/calendar';
import Login from  './login/login';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import requireAuth from './require-auth';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <BrowserRouter>
            <div>
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
