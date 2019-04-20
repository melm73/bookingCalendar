import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './month.css';
import Day from './day';
import { loadDays } from '../../actions/day-actions';
// import dayModalActions from '../../actions/day-modal-actions';
// import DayModal from './day-modal';

export default class Month extends React.Component {

  componentDidMount() {
    loadDays();
  }

  day = (i, day) => (
    <div key={i} className="col">
      <Day day={day} guests={this.props.guests} />
    </div>
  );

  blankDay = (i) => (
    <div key={i} className="col blank">
      <div className="day blank-day" />
    </div>
  );

  days(firstDayOffset, daysInMonth) {
    let pre = Array(firstDayOffset).fill().map((_, i) => {
      return this.blankDay(i);
    });

    let monthDays = Array(daysInMonth).fill().map((_, i) => {
      let day = this.props.days[(i+1).toString()];
      if (!day) {
        day = {};
      }
      return this.day(i + firstDayOffset, day);
    });

    let lastRow = (firstDayOffset + daysInMonth) % 7;
    let blankAfter = lastRow === 0 ? 0 : 7 - lastRow;

    let post = Array(blankAfter).fill().map((_, i) => {
      return this.blankDay(i + firstDayOffset + daysInMonth);
    })

    return pre.concat(monthDays).concat(post);
  }

  weeks(firstDayOffset, daysInMonth, dayDivs) {
    let rows = [];

    for (let i=0; i < dayDivs.length; i+=7) {
      let weekDays = dayDivs.slice(i, i + 7);

      rows.push(
        <div key={i} className="row no-gutters">
          {weekDays}
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
    // return <DayModal modalState={this.props.modalState} guests={this.props.guests} />;
  }

  renderHeadings() {
    return (
      <div className="row hidden-xs no-gutters">
        <div className="col"><div className="day-heading">Monday</div></div>
        <div className="col"><div className="day-heading">Tuesday</div></div>
        <div className="col"><div className="day-heading">Wednesday</div></div>
        <div className="col"><div className="day-heading">Thursday</div></div>
        <div className="col"><div className="day-heading">Friday</div></div>
        <div className="col"><div className="day-heading">Saturday</div></div>
        <div className="col"><div className="day-heading">Sunday</div></div>
      </div>
    );
  }

  render() {
    return (
      <div className="month">
        {this.renderHeadings()}
        {this.renderWeeks()}
        {this.renderModal()}
      </div>
    );
  }
}

Month.propTypes = {
  days: PropTypes.object.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
