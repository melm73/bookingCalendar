import React from 'react';
import PropTypes from 'prop-types';
import './booking.css';

export default function Booking(props) {
  return (
    <div className='booking'>
      <div className='booking-dot' />
      <div className="booking-name">{renderName(props.name)}</div>
    </div>
  );
}

function renderName(key) {
  switch(key) {
  case 'kt':
    return 'Kay, Trevor';
  case 'mp':
    return 'Melanie, Paul';
  case 'fs':
    return 'Felicity, Samantha';
  case 'ls':
    return 'Lesley, Odin';
  default:
    return key;
  }
}

Booking.propTypes = {
  name: PropTypes.string.isRequired
};
