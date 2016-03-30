import React from 'react';

export default class BookingsForm extends React.Component {

  addBooking(e) {
    let bookings = this.props.bookings;
    if (!bookings) {
      bookings = [];
    }
    bookings.push(e.target.value);
    this.props.onChange(bookings);
  }

  removeBooking(id) {
    let bookings = this.props.bookings.filter(bookingId => bookingId !== id);
    this.props.onChange(bookings);
  }

  renderBooking(id) {
    return (
      <div className="booking" key={id}>
        <span>{this.props.guests[id].name}</span>
        <span onClick={this.removeBooking.bind(this, id)}>x</span>
      </div>
    );
  }

  renderBookings() {
    let bookings;
    if (this.props.bookings && this.props.bookings.length > 0) {
      bookings = this.props.bookings.map(id => this.renderBooking(id));
    } else {
      bookings = 'No bookings';
    }
    return bookings;
  }

  unbookedGuests() {
    let guests = Object.values(this.props.guests);

    if (this.props.bookings && this.props.bookings.length > 0) {
      guests = guests.filter(guest => !this.props.bookings.includes(guest.id));
    }
    return guests;
  }

  renderGuestOptions() {
    return this.unbookedGuests().map(guest => <option key={guest.id} value={guest.id}>{guest.name}</option>)
  }

  renderGuestSelect() {
    return (
      <select id="guests" className="form-control" value="" onChange={this.addBooking.bind(this)}>
        <option value="">Please select...</option>
        {this.renderGuestOptions()}
      </select>
    );
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="guests">Add booking:</label>
          {this.renderGuestSelect()}
        </div>
        <div className="form-group">
          {this.renderBookings()}
        </div>
      </form>
    );
  }
}

BookingsForm.propTypes = {
  guests: React.PropTypes.object.isRequired,
  bookings: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired
};
