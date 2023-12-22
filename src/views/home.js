import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lotus Estate</title>
        <meta property="og:title" content="Lotus Estate" />
      </Helmet>
      <div className="home-header"></div>
    </div>
  )
}

export default Home
