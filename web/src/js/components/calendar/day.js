import React from 'react';

export default class Day extends React.Component {
  schoolHolidayClass() {
    return this.props.day.schoolHoliday ? 'school-holiday' : ''
  }

  publicHolidayClass() {
    return this.props.day.publicHoliday ? 'public-holiday' : ''
  }

  clickHandler() {
    this.props.editHandler(this.props.day);
  }

  render() {
    return (
      <div className={`day ${this.schoolHolidayClass()} ${this.publicHolidayClass()}`} onClick={this.clickHandler.bind(this)}>
        <row>
          <div className="day-number col-xs-2">{this.props.day.day}</div>
          <div className="day-description col-xs-5">{this.props.day.description}</div>
        </row>
        <row>
          <ul className="bookings col-xs-7">
            <li>Melanie</li>
            <li>Paul</li>
            <li>Felicity</li>
            <li>Samantha</li>
          </ul>
        </row>
      </div>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.shape({
    id: React.PropTypes.string,
    day: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    schoolHoliday: React.PropTypes.bool,
    publicHoliday: React.PropTypes.bool,
    description: React.PropTypes.string
  }).isRequired
};
