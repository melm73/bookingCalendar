import React from 'react';
import PropTypes from 'prop-types';
import Guest from './guest';
import './day.css';

// import dayModalActions from '../../actions/day-modal-actions';

export default class Day extends React.Component {

  schoolHolidayClass() {
    return this.props.schoolHoliday ? 'school-holiday' : ''
  }

  publicHolidayClass() {
    return this.props.publicHoliday ? 'public-holiday' : ''
  }

  editDay() {
    // dayModalActions.showModal(this.props.day);
  }

  renderGuests() {
    if (this.props.guests) {
      return this.props.guests.map(guest => (
        <Guest key={guest.name} name={guest.name} owner={guest.owner} />
      )); 
    }
  }

  render() {
    return (
      <div className={`col day ${this.schoolHolidayClass()} ${this.publicHolidayClass()}`}
           onClick={this.editDay.bind(this)}>
        <div className='title-row'>
          <div className="day-number">{this.props.day}</div>
          <div className="day-description">{this.props.publicHoliday}</div>
        </div>
        <div className='guests-row'>
          {this.renderGuests()}
        </div>
        <div className='notes-row'>
          {this.props.notes}
        </div>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number.isRequired,
  schoolHoliday: PropTypes.bool,
  publicHoliday: PropTypes.string,
  guests: PropTypes.array,
  notes: PropTypes.string
};
