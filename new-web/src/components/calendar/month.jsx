import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './month.css';
import Day from './day';
import BlankDay from './blank-day';
import { loadDays } from '../../actions/day-actions';

export default class Month extends React.Component {

  componentDidMount() {
    loadDays();
  }

  day = (i, day, attrs) => (
    <Day key={i} day={day} attributes={attrs} />
  );

  blankDay = (i) => (
    <BlankDay key={i} />
  );

  days(firstDayOffset, daysInMonth) {
    let pre = Array(firstDayOffset).fill().map((_, i) => {
      return this.blankDay(i);
    });

    let monthDays = Array(daysInMonth).fill().map((_, i) => {
      let attrs = this.props.days[(i+1)];
      if (!attrs) {
        attrs = {};
      }
      return this.day(i + firstDayOffset, i+1, attrs);
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

  renderHeadings() {
    return (
      <div className="row hidden-xs no-gutters">
        <div className="col heading"><div className="day-heading">MON</div></div>
        <div className="col heading"><div className="day-heading">TUE</div></div>
        <div className="col heading"><div className="day-heading">WED</div></div>
        <div className="col heading"><div className="day-heading">THU</div></div>
        <div className="col heading"><div className="day-heading">FRI</div></div>
        <div className="col heading"><div className="day-heading">SAT</div></div>
        <div className="col heading"><div className="day-heading">SUN</div></div>
      </div>
    );
  }

  render() {
    return (
      <div className="month">
        {this.renderHeadings()}
        {this.renderWeeks()}
      </div>
    );
  }
}

Month.propTypes = {
  days: PropTypes.object.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
