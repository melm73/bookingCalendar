import React from 'react';
import Header from './header';
import Navigator from './navigator';
import Month from './month';
import {connect} from 'react-redux';
require("../../../css/calendar.scss");

export class Calendar extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Navigator month={this.props.month} year={this.props.year}/>
        <Month days={this.props.days} month={this.props.month} year={this.props.year} />
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {
    days: store.dayStore.get('days').toJS(),
    month: store.monthStore.get('month'),
    year: store.monthStore.get('year')
  };
}

export default connect(mapStoreToProps)(Calendar);
