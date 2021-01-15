import React from 'react';
import moment from 'moment';

export default function ReportTable(props) {
  return (
    <table>
      <tr>
        <th>Month</th>
        <th>Days Used</th> 
      </tr>
      {renderRows(props.summary)}
    </table>
  );
}

const renderRows = (summary) => {
  console.log('renderRows');
  return summary.map(month => (
    <tr>
      <td>{month.month}</td>
      <td>{month.totalDaysOccupied}</td>
    </tr>
  ));
};

const countDays = (monthDays) => {
  console.log('countDays');
  console.log(monthDays);
  if (monthDays == undefined) {
    console.log('undefined');
    return '' ;
  }

  console.log('calculating counts');
  let count = 0;

  Object.keys(monthDays).forEach(key => {
    if (monthDays[key].guests.length > 0) {
      count += 1;
    }
  });

  return count;
};
