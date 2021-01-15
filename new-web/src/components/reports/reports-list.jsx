import React from 'react';
import {connect} from 'react-redux';
import ReportTable from './report-table';
import { loadDaysForYear } from '../../actions/day-actions';
import { summariseJan } from '../../selectors/report-selector';
// import './header.css';

export function ReportsList(props) {
  return (
    <div className='header'>
    	Reports List
    	<button onClick={goGetIt}>Go</button>
    	<ReportTable summary={props.summary} />
    </div>
  );
}

const goGetIt = () => {
  loadDaysForYear(2018);
};


function mapStoreToProps(store) {
  return {
    year: store.report.get('year'),
    summary: [
      summariseJan(store)
    ]
  };
}

export default connect(mapStoreToProps)(ReportsList);

