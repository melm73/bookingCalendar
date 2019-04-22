import React from 'react';
import PropTypes from 'prop-types';
import './guest.css';

export default function Guest(props) {
  return (
    <div className='guest'>
      <div className='guest-dot' />
      <div className="guest-name">{props.name}</div>
    </div>
  );
}

Guest.propTypes = {
  name: PropTypes.string.isRequired
};
