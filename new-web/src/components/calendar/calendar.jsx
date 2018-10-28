import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Header from './header';
// import Navigator from './navigator';
// import Month from './month';
// import { getDays } from '../../api/day-api';

export const Calendar = (props) => {
  return (
      <div>
        Month: {props.month}, Year: {props.year}
      </div>
  );  
}

        // <Header />
        // <Navigator month={this.props.month} year={this.props.year}/>
        // <Month days={this.props.days} month={this.props.month} year={this.props.year} guests={this.props.guests}
               // modalState={this.props.modalState} />

function mapStoreToProps(store) {
  return {
    month: store.calendarMonth.get('month'),
    year: store.calendarMonth.get('year')
  };
}

export default connect(mapStoreToProps)(Calendar);
