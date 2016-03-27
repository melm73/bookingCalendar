import React from 'react';
import Day from './day';
import moment from 'moment';
import dayActions from '../../actions/day-actions';
import DayModal from './day-modal';

export default class Month extends React.Component {

  componentDidMount() {
    dayActions.getDays();
    this.state = {showModal: false};
  }

  renderDays(month, year) {
    let calendarMonth = moment([year, month-1, 1]);
    let daysInMonth = calendarMonth.daysInMonth();
    let firstDayOffset = `col-sm-offset-${(calendarMonth.day() + 6) % 7}`;

    return Array(daysInMonth).fill().map((_, i) => {
      let day = this.props.days[(i+1).toString()];
      if (!day) {
        day = {day: i + 1, month: month, year: year};
      }
      return (
        <div key={i} className={`col-xs-7 col-sm-1 ${i===0 ? firstDayOffset : ''}`}>
          <Day day={day} editHandler={this.showModal.bind(this)}/>
        </div>
      );
    });
  }

  saveDay(day) {
    dayActions.saveDay(day);
    this.hideModal();
  }

  showModal(day) {
    console.log('showModal', day);
    this.setState({showModal: true, day: day})
  }

  hideModal() {
    this.setState({showModal: false});
  }

  renderModal() {
    if (this.state && this.state.showModal) {
      return <DayModal day={this.state.day} onHide={this.hideModal.bind(this)} onSave={this.saveDay.bind(this)}/>;
    }
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
        <div className="row">
          {this.renderDays(this.props.month, this.props.year)}
        </div>
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
