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
    <a href="https://www.gatsbyjs.org/" alt="gatsbyjs"><img alt="gatsby logo" src={gatsby} /></a>
    <a href="https://reactjs.org/" alt="gatsbyjs"><img alt="react logo" src={react} /></a>
    <a href="https://momentjs.com/" alt="gatsbyjs"><img alt="momentjs logo" src={momentjs} /></a>
    <a href="https://sass-lang.com/" alt="gatsbyjs"><img alt="sass logo" src={sass} /></a>
  </div>
)

Footer.propTypes = {
}

export default Footer
