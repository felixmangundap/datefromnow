import {
  array,
  object,
  oneOfType,
} from 'prop-types'
import React from 'react'

import * as style from '../styles/style.module.scss'


class Switcher extends React.Component {
  state = {
    visible: 0,
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  showDate = () => {
    this.setState({ visible: 0 });
  }

  showDays = () => {
    this.setState({ visible: 1 });
  }

  render() {
    const {
      visible,
    } = this.state;

    const {
      children: counter,
    } = this.props;

    const counterArray = React.Children.toArray(counter);
    const currentCounter = counterArray[visible];

    return (
      <div className={style.counterSwitcher}>
        <div className={style.switcherGroup}>
          <h1 className={style.header}>
            <a href="#" onClick={this.showDate} className={`${visible === 0 ? style.active : style.passive}`}>date</a>
            &nbsp;/&nbsp;
            <a href="#" onClick={this.showDays} className={`${visible === 1 ? style.active : style.passive}`}>days</a>
            &nbsp;from now
          </h1>
        </div>
        {currentCounter}
      </div>
    )
  }
}

Switcher.propTypes = {
  children: oneOfType([
    array,
    object,
  ]).isRequired,
}

export default Switcher
