import React from 'react'
import PropTypes from 'prop-types'

import '../styles/layout.css'
import gatsby from '../images/gatsby.svg'
import react from '../images/react.svg'
import momentjs from '../images/momentjs.svg'
import sass from '../images/sass.svg'
import * as style from  '../styles/style.module.scss'

const Footer = () => (
  <div className={style.footer}>
    <p>made using</p>
    <a href="https://www.gatsbyjs.org/" alt="gatsbyjs" className={style.gatsbyIcon}></a>
    <a href="https://reactjs.org/" alt="reactjs" className={style.reactIcon}></a>
    <a href="https://momentjs.com/" alt="momentjs" className={style.momentIcon}></a>
    <a href="https://sass-lang.com/" alt="sass" className={style.sassIcon}></a>
  </div>
)

Footer.propTypes = {
}

export default Footer
