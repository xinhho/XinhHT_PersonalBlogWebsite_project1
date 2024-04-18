import React from 'react'
import NavigationBar from './NavigationBar'

const Header = () => {
  return(
    <div className='header'>
      <NavigationBar />

      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>travel blog</span>
          <span className='heading-primary-sub'>your experience - your life</span>     
        </h1>
      </div>
    </div>
  )
}  

export default Header
  