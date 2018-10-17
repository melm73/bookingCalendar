import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './calendar/Calendar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Calendar} />
      </Router>
    );
  }
}

export default App;
