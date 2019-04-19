import React from 'react';
import PropTypes from 'prop-types';
// import dayModalActions from '../../actions/day-modal-actions';

export default class Day extends React.Component {

  schoolHolidayClass() {
    return this.props.day.schoolHoliday ? 'school-holiday' : ''
  }

  publicHolidayClass() {
    return this.props.day.publicHoliday ? 'public-holiday' : ''
  }

  editDay() {
    // dayModalActions.showModal(this.props.day);
  }

  renderBookings() {
    if (this.props.day.bookings) {
      return this.props.day.bookings.map(id => {
        return <div className="booking" key={id}>{this.props.guests[id].name}</div>;
      });
    }
  }

  render() {
    return (
      <div className={`day ${this.schoolHolidayClass()} ${this.publicHolidayClass()}`}
           onClick={this.editDay.bind(this)}>
        <div>
          <div className="day-number col-xs-2">{this.props.day.day}</div>
          <div className="day-description col-xs-5">{this.props.day.publicHoliday}</div>
        </div>
        <div>
          <div className="col-xs-7">
            {this.renderBookings()}
          </div>
        </div>
        <div>
          <div className="col-xs-7">
            {this.props.day.notes}
          </div>
        </div>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.shape({
    id: PropTypes.string,
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    schoolHoliday: PropTypes.bool,
    publicHoliday: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};
