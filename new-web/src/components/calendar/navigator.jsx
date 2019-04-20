import React from 'react';
import PropTypes from 'prop-types';
import './navigator.css';
import moment from 'moment';
import monthActions from '../../actions/month-actions';

export default function Navigator(props) {
  return (
    <div className='navigator no-gutters'>
      <div className='today' onClick={todayClick}><button>Today</button></div>
      <div className='arrow-left' onClick={leftClick}><button>&lt;</button></div>
      <div className='arrow-right' onClick={rightClick}><button>&gt;</button></div>
      <div className='title'>{renderMonth(props.month, props.year)}</div>
    </div>
  );
}

function renderMonth(month, year) {
  let date = moment([year, month - 1, 1]);
  return date.format('MMMM YYYY').toUpperCase();
}

function leftClick() {
  monthActions.previousMonth();
}

function rightClick() {
  monthActions.nextMonth();
}

function todayClick() {
  monthActions.currentMonth();
}

Navigator.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
