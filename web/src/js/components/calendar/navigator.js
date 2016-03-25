import React from 'react';

export default function Navigator(props) {
  return (
    <div className='navigator row'>
      <div className='arrow-left col-xs-1'><i className="fa fa-4x fa-angle-double-left"></i></div>
      <div className='title col-xs-5'>March 2016</div>
      <div className='arrow-right col-xs-1'><i className="fa fa-4x fa-angle-double-right"></i></div>
    </div>
  );
}

Navigator.propTypes = {
  month: React.PropTypes.number.isRequired,
  year: React.PropTypes.number.isRequired
};
