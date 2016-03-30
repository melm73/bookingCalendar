import React from 'react';

export default class PublicHolidayInput extends React.Component {
  onCheck(e) {
    if (e.target.checked) {
      this.props.onChange('');
    } else {
      this.props.onChange(null);
    }
  }

  isPublicHoliday() {
    return !!this.props.publicHoliday || (this.props.publicHoliday === '');
  }

  inputType() {
    return this.isPublicHoliday() ? 'text' : 'hidden';
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="form-group ">
        <div className="checkbox col-sm-4">
          <label>
            <input type="checkbox" checked={this.isPublicHoliday()} onChange={this.onCheck.bind(this)}/>
            Public Holiday
          </label>
        </div>
        <div className="col-sm-3">
          <input type={this.inputType()} className="form-control" id="description"
                 value={this.props.publicHoliday} onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}

PublicHolidayInput.propTypes = {
  publicHoliday: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};
