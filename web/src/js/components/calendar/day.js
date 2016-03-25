import React from 'react';

export default function Day(props) {
  return (
      <div className="day">{props.day}</div>
  );
}

Day.propTypes = {
  day: React.PropTypes.number.isRequired
};
