import React from 'react';
import PropTypes from 'prop-types';
import Booking from './booking';
import './day.css';

// import dayModalActions from '../../actions/day-modal-actions';

export default class Day extends React.Component {

  schoolHolidayClass() {
    return this.props.attributes.school_holiday ? 'school-holiday' : ''
  }

  publicHolidayClass() {
    return this.props.attributes.public_holiday ? 'public-holiday' : ''
  }

  editDay() {
    // dayModalActions.showModal(this.props.day);
  }

  renderBookings() {
    if (this.props.attributes.bookings) {
      let bookings = [];

      Object.keys(this.props.attributes.bookings).forEach((key, idx) => {
        bookings.push(<Booking key={key} guest={key} />);
      }); 

      return bookings;
    }
  }

  render() {
    return (
      <div className={`col day ${this.schoolHolidayClass()} ${this.publicHolidayClass()}`}
           onClick={this.editDay.bind(this)}>
        <div className='title-row'>
          <div className="day-number">{this.props.day}</div>
          <div className="day-description">{this.props.attributes.public_holiday}</div>
        </div>
        <div className='bookings-row'>
          {this.renderBookings()}
        </div>
        <div className='notes-row'>
          {this.props.attributes.notes}
        </div>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    schoolHoliday: PropTypes.bool,
    public_holiday: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};
