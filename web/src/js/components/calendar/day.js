import React from 'react';

export default function Day(props) {
  return (
      <div className="day">{props.day.day}</div>
  );
}

Day.propTypes = {
  day: React.PropTypes.shape({
    id: React.PropTypes.string,
    day: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired
  }).isRequired
};
