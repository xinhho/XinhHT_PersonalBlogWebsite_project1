import React from 'react'
import { Link } from 'react-router-dom'
import { STRINGS } from '../constants/global'

export const NavigationBar = () => {
  // const location = useLocation()
  const {LABLE_HOMEPAGE} = STRINGS.NAVIGATION_BAR

  return(
    <nav className='navigation-bar'>
      <Link to='/homepage'>{LABLE_HOMEPAGE}</Link>
    </nav>
  )
}
