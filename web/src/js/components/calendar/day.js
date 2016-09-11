import React from 'react';
import dayModalActions from '../../actions/day-modal-actions';

export default class Day extends React.Component {

  schoolHolidayClass() {
    return this.props.day.schoolHoliday ? 'school-holiday' : ''
  }

  publicHolidayClass() {
    return this.props.day.publicHoliday ? 'public-holiday' : ''
  }

  editDay() {
    dayModalActions.showModal(this.props.day);
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
        <row>
          <div className="day-number col-xs-2">{this.props.day.day}</div>
          <div className="day-description col-xs-5">{this.props.day.publicHoliday}</div>
        </row>
        <row>
          <div className="col-xs-7">
            {this.renderBookings()}
          </div>
        </row>
        <row>
          <div className="col-xs-7">
            {this.props.day.notes}
          </div>
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
    publicHoliday: React.PropTypes.string,
    description: React.PropTypes.string
  }).isRequired
};
