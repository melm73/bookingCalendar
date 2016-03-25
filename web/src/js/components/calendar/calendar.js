import React from 'react';
import Header from './header';
import Navigator from './navigator';
import Month from './month';
require("../../../css/calendar.scss");

export default class Calendar extends React.Component {
  render() {
    let month = 3;
    let year = 2016;
    return (
      <div className='container'>
        <Header />
        <Navigator month={month} year={year}/>
        <Month month={month} year={year} />
      </div>
    );
  }
}
