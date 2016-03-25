import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Month from './components/calendar/calendar';
import ajaxUtil from './util/ajax-util';
import store from './stores/store';
require('babel-polyfill');

const App = React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    )
  }
});

let host = document.getElementById('host').textContent;
ajaxUtil.setUrl(host);

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Month}/>
    </Route>
  </Router>
), document.getElementById('app'));
