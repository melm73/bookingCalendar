import React from 'react';
import Day from './day';
import moment from 'moment';
import dayActions from '../../actions/day-actions';

export default class Month extends React.Component {

  componentDidMount() {
    dayActions.getDays(this.props.month, this.props.year);
  }

  renderDays(month, year) {
    let calendarMonth = moment([year, month-1, 1]);
    let daysInMonth = calendarMonth.daysInMonth();
    let firstDayOffset = `col-sm-offset-${(calendarMonth.day() + 6) % 7}`;

    return Array(daysInMonth).fill().map((_, i) => {
      return (
        <div key={i} className={`col-xs-7 col-sm-1 ${i===0 ? firstDayOffset : ''}`}>
          <Day day={i+1} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="month">
        <div className="row hidden-xs">
          <div className="dayTitle col-xs-1">Monday</div>
          <div className="dayTitle col-xs-1">Tuesday</div>
          <div className="dayTitle col-xs-1">Wednesday</div>
          <div className="dayTitle col-xs-1">Thursday</div>
          <div className="dayTitle col-xs-1">Friday</div>
          <div className="dayTitle col-xs-1">Saturday</div>
          <div className="dayTitle col-xs-1">Sunday</div>
        </div>
        <div className="row">
          {this.renderDays(this.props.month, this.props.year)}
        </div>
      </div>
    );
  }
}

Month.propTypes = {
  month: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired
};
