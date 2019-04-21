import React from 'react';
import './booking.css';

export default function Booking(props) {
  return (
    <div className='booking'>
      <div className='booking-dot' />
      <div className="booking-name">{props.guest}</div>
    </div>
  );
}
