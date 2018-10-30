import React from 'react';
import {connect} from 'react-redux';
import Header from './header.jsx';
import Navigator from './navigator.jsx';
// import Month from './month';
// import { getDays } from '../../api/day-api';

export const Calendar = (props) => {
  return (
      <div>
        <Header />
        <Navigator month={props.month} year={props.year}/>
      </div>
  );  
}

        // <Month days={this.props.days} month={this.props.month} year={this.props.year} guests={this.props.guests}
               // modalState={this.props.modalState} />

function mapStoreToProps(store) {
  return {
    month: store.calendarMonth.get('month'),
    year: store.calendarMonth.get('year')
  };
}

export default connect(mapStoreToProps)(Calendar);
