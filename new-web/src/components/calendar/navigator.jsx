import React from 'react';
import PropTypes from 'prop-types';
import './navigator.css';
import moment from 'moment';
import monthActions from '../../actions/month-actions';

export default function Navigator(props) {
  return (
    <div className='navigator row no-gutters'>
      <div className='arrow-left col-4'>
        <i className="fa fa-3x fa-angle-double-left" onClick={leftClick} />
      </div>
      <div className='title col-4'>{renderMonth(props.month, props.year)}</div>
      <div className='arrow-right col-4'>
        <i className="fa fa-3x fa-angle-double-right" onClick={rightClick} />
      </div>
    </div>
  );
}

function renderMonth(month, year) {
  let date = moment([year, month - 1, 1]);
  return date.format('MMMM YYYY');
}

function leftClick() {
  monthActions.previousMonth();
}

function rightClick() {
  monthActions.nextMonth();
}

Navigator.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
