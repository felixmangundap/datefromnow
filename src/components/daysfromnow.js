import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import * as style from '../styles/style.module.scss'


class DaysFromNow extends React.Component {
  state = {
    days: 0,
    unit: 'days',
    date: moment().format('dddd, MMMM D, YYYY'),
  }

  componentDidMount() {
    // this.intervalID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // tick() {
  //   this.setState({ date: moment().format() });
  // }

  updateMoment = () => {
    const {
      days,
      unit,
    } = this.state;

    const date = moment().add(days, unit).format('dddd, MMMM D, YYYY');
    this.setState({ date });
  }

  onDaysChange = (event) => {
    const { value: days } = event.target;
    this.setState({ days }, this.updateMoment);
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
      <div className={style.dayCounter}>
        <input type="number" value={days} onChange={this.onDaysChange} className={style.days} min={0}/>
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
        <p> is </p>
        <p className={style.counts}>{ date }</p>
      </div>
    )
  }
}

DaysFromNow.propTypes = {
  
}

DaysFromNow.defaultProps = {
  
}

export default DaysFromNow
