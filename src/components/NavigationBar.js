import React from 'react'
import { Link } from 'react-router-dom'
import { STRINGS } from '../constants/global'

const NavigationBar = () => {
  // const location = useLocation()
  const {LABLE_HOMEPAGE, LABLE_BLOG_POST} = STRINGS.NAVIGATION_BAR

  return(
    <nav className='navigation-bar'>
      <Link to='/'>{LABLE_HOMEPAGE}</Link>
      <Link to='/blog-post'>{LABLE_BLOG_POST}</Link>
    </nav>
  )
}

export default NavigationBar
