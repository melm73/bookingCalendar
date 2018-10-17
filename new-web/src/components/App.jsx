import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './calendar/Calendar';
import Login from  './login/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
