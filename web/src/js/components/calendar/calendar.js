import React from 'react';
import MonthHeader from './month-header';
import MonthNavigator from './month-navigator';
import Month from './month';
require("../../../css/calendar.scss");

export default class Calendar extends React.Component {
  render() {
    return (
      <div className='container'>
        <MonthHeader />
        <MonthNavigator />
        <Month />
      </div>
    );
  }
}
