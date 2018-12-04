import React from 'react'

import Layout from '../components/layout';
import Switcher from '../components/switcher';
import Footer from '../components/footer';
import DaysFromNow from '../components/daysfromnow';
import DateFromNow from '../components/datefromnow';

const IndexPage = () => (
  <Layout>
    <Switcher>
      <DateFromNow />
      <DaysFromNow />
    </Switcher>
    <Footer />
  </Layout>
)

export default IndexPage
