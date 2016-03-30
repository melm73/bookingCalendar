import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import guestActions from '../../actions/guest-actions';
import PublicHolidayInput from './public-holiday-input';
import BookingsForm from './bookings-form';

export default class DayModal extends React.Component {
  componentWillMount() {
    this.state = Object.assign({}, this.props.day);
  }

  checkSchoolHoliday(e) {
    this.setState({schoolHoliday: e.target.checked});
  }

  changePublicHoliday(publicHoliday) {
    console.log(`change public holiday: "${publicHoliday}"`);
    this.setState({publicHoliday: publicHoliday});
  }

  changeNotes(e) {
    this.setState({notes: e.target.value});
  }

  changeBookings(bookings) {
    this.setState({bookings: bookings});
  }

  save() {
    this.props.onSave(this.state);
  }

  renderTitle() {
    let date = moment([this.props.day.year, this.props.day.month - 1, 1]);
    return (
      <Modal.Title>
        <div className='day-number pull-left'>{this.state.day}</div>
        <div className='week-day'>{date.format('dddd')}</div>
        <div className='month-year'>{date.format('MMMM, YYYY')}</div>
      </Modal.Title>
    )
  }

  renderForm() {
    return (
      <div className="row">
        <form className="form-horizontal col-xs-3">
          <div className="form-group">
            <div className="col-sm-7 checkbox">
              <label>
                <input type="checkbox" checked={this.state.schoolHoliday}
                       onChange={this.checkSchoolHoliday.bind(this)} />
                School Holiday
              </label>
            </div>
          </div>
          <PublicHolidayInput publicHoliday={this.state.publicHoliday}
                              onChange={this.changePublicHoliday.bind(this)} />
          <div className="form-group">
            <label htmlFor="description">Notes</label>
                <textarea id='notes' className="form-control" rows="3"
                          value={this.state.notes} onChange={this.changeNotes.bind(this)} />
          </div>
        </form>
        <div className="col-xs-1" />
        <div className="col-xs-3">
          <BookingsForm bookings={this.state.bookings} guests={this.props.guests}
                        onChange={this.changeBookings.bind(this)}/>
        </div>
      </div>
    );
  }

  renderButtons() {
    return [
      <Button onClick={this.props.onHide}>Cancel</Button>,
      <Button onClick={this.save.bind(this)}>Save</Button>
      ];
  }

  render() {
    return (
      <Modal show onHide={this.props.onHide}>
        <Modal.Header closeButton>
          {this.renderTitle()}
        </Modal.Header>
        <Modal.Body>
          {this.renderForm()}
        </Modal.Body>
        <Modal.Footer>
          {this.renderButtons()}
        </Modal.Footer>
      </Modal>
    );
  }
}

DayModal.propTypes = {
  day: React.PropTypes.object.isRequired,
  onHide: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};
