import React from 'react'
import { Link } from 'react-router-dom'
import { STRINGS } from '../constants/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => {
  const {LABLE_HOMEPAGE, LABLE_PLACES, LABLE_ABOUT, LABLE_INSPIRATION} = STRINGS.NAVIGATION_BAR

  return(
    <div className='navigation-bar'>
      <nav className=''>
        <Link to='/'>{LABLE_HOMEPAGE}</Link>
        <Link to='/about'>{LABLE_ABOUT}</Link>
        <Link to='/places'>{LABLE_PLACES}</Link>
        <Link to='/inspiration'>{LABLE_INSPIRATION}</Link>
      </nav>
      <div className='search'>
        <span className='icon'><FontAwesomeIcon icon="fas fa-search" /></span>
      </div>

    </div>
    
  )
}

export default NavigationBar
