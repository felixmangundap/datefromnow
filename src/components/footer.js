import React from 'react'
import '../styles/layout.css'
import * as style from  '../styles/style.module.scss'

const Footer = () => (
  <div className={style.footer}>
    <a href="https://github.com/felixmangundap/datefromnow" alt="github" target="_blank" className={style.githubIcon}></a>
    <p>made possible by</p>
    <a href="https://www.gatsbyjs.org/" alt="gatsbyjs" target="_blank" className={style.gatsbyIcon}></a>
    <a href="https://reactjs.org/" alt="reactjs" target="_blank" className={style.reactIcon}></a>
    <a href="https://momentjs.com/" alt="momentjs" target="_blank" className={style.momentIcon}></a>
    <a href="https://www.netlify.com/" alt="netlify" target="_blank" className={style.netlifyIcon}></a>
    <a href="https://sass-lang.com/" alt="sass" target="_blank" className={style.sassIcon}></a>
  </div>
)

export default Footer
