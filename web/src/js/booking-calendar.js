import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Month from './components/calendar/calendar';
require('babel-polyfill');

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

let host = document.getElementById('host').textContent;
//apiUtil.setUrl(host);

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Month}/>
    </Route>
  </Router>
), document.getElementById('app'));
