import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/layout.css'
import * as style from  '../styles/style.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A simple yet complete date from now and days from now calculator' },
            { name: 'keywords', content: 'days, date, days from now, date from now, 30 days from now, time, date calculator, day calculator, calculate days, calculate date, calendar' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={style.main}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
