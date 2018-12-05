import React from 'react'
import moment from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import '../styles/custom.css';
import * as style from '../styles/style.module.scss'


class DateFromNow extends React.Component {
  state = {
    days: 0,
    unit: 'days',
    date: moment().format('dddd, MMMM D, YYYY'),
  }

  updateMoment = () => {
    const {
      date,
      unit,
    } = this.state;

    const days = moment(date).startOf('day').diff(moment().startOf('day'), unit);
    this.setState({ days: isNaN(days) ? 0 : days });
  }

  onDateChange = (day) => {
    this.setState({ date: day }, this.updateMoment);
  }

  onUnitChange = (event) => {
    const { value: unit } = event.target;
    this.setState({ unit }, this.updateMoment);
  }

  render() {
    const {
      date,
      days,
      unit,
    } = this.state;

    return (
      <div className={style.dateCounter}>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="dddd, MMMM D, YYYY"
          onDayChange={this.onDateChange}
          value={date}
        />
        
        <p> is </p>
        <p className={style.counts}>{ days }</p>
        <select value={unit} onChange={this.onUnitChange}>
          <option value="years">years</option>
          <option value="months">months</option>
          <option value="weeks">weeks</option>
          <option value="days">days</option>
          <option value="hours">hours</option>
          <option value="minutes">minutes</option>
          <option value="seconds">seconds</option>
        </select>
        <p> from </p>
        <p> now </p>
      </div>
    )
  }
}

export default DateFromNow
