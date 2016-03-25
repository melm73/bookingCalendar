import React from 'react';
import moment from 'moment';
import monthActions from '../../actions/month-actions';

export default function Navigator(props) {
  return (
    <div className='navigator row'>
      <div className='arrow-left col-xs-1'>
        <i className="fa fa-4x fa-angle-double-left" onClick={leftClick} />
      </div>
      <div className='title col-xs-5'>{renderMonth(props.month, props.year)}</div>
      <div className='arrow-right col-xs-1'>
        <i className="fa fa-4x fa-angle-double-right" onClick={rightClick} />
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
  month: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired
};
