import React from 'react';
import Header from './header';
import Navigator from './navigator';
import Month from './month';
import {connect} from 'react-redux';
require("../../../css/calendar.scss");

export class Calendar extends React.Component {
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

function mapStateToProps(state) {
  return {
    days: state.dayStore.get('days').toJS()
  };
}

export default connect(mapStateToProps)(Calendar);
