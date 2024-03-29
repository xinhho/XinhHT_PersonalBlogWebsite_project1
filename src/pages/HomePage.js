import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = () => {
  return(
    <div className='homepage'>
      <Header />
      <div className='content'>
        <div className='lasted-post'></div>
        <div className='posts-favorites'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
