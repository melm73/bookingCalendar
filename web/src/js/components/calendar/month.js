import React from 'react';
import Day from './day';
import moment from 'moment';
import dayActions from '../../actions/day-actions';
import dayModalActions from '../../actions/day-modal-actions';
import guestActions from '../../actions/guest-actions';
import DayModal from './day-modal';

export default class Month extends React.Component {

  componentDidMount() {
    guestActions.getGuests();
    dayActions.getDays();
  }

  days(firstDayOffset, daysInMonth) {
    return Array(daysInMonth).fill().map((_, i) => {
      let day = this.props.days[(i+1).toString()];
      if (!day) {
        day = {day: i + 1, month: this.props.month, year: this.props.year};
      }
      return (
        <div key={i} className={`col-xs-7 col-sm-1 ${i===0 ? `col-sm-offset-${firstDayOffset}` : ''}`}>
          <Day day={day} guests={this.props.guests}/>
        </div>
      );
    });
  }

  weeks(firstDayOffset, daysInMonth, dayDivs) {
    let rows = [];
    for (let i=-firstDayOffset; i < daysInMonth; i+=7) {
      rows.push(
        <div key={i} className="row">
          {dayDivs.slice(Math.max(i, 0), Math.min(i + 7, daysInMonth))}
        </div>
      )
    }
    return rows;
  }

  renderWeeks() {
    let calendarMonth = moment([this.props.year, this.props.month-1, 1]);
    let daysInMonth = calendarMonth.daysInMonth();
    let firstDayOffset = (calendarMonth.day() + 6) % 7;

    let days = this.days(firstDayOffset, daysInMonth);
    return this.weeks(firstDayOffset, daysInMonth, days);
  }

  renderModal() {
    return <DayModal modalState={this.props.modalState} guests={this.props.guests} />;
  }

  render() {
    return (
      <div className="month">
        <div className="row hidden-xs">
          <div className="day-heading col-xs-1">Monday</div>
          <div className="day-heading col-xs-1">Tuesday</div>
          <div className="day-heading col-xs-1">Wednesday</div>
          <div className="day-heading col-xs-1">Thursday</div>
          <div className="day-heading col-xs-1">Friday</div>
          <div className="day-heading col-xs-1">Saturday</div>
          <div className="day-heading col-xs-1">Sunday</div>
        </div>
        {this.renderWeeks()}
        {this.renderModal()}
      </div>
    );
  }
}

Month.propTypes = {
  days: React.PropTypes.object.isRequired,
  month: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired
};
