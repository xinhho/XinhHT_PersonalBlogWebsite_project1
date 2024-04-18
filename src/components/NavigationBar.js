import React from 'react'
import { Link } from 'react-router-dom'
import { STRINGS } from '../constants/global'

const NavigationBar = () => {
  const {LABLE_HOMEPAGE, LABLE_PLACES, LABLE_ABOUT, LABLE_INSPIRATION} = STRINGS.NAVIGATION_BAR

  return(
    <div className='navigation-bar'>
      <nav>
        <Link to='/'>{LABLE_HOMEPAGE}</Link>
        <Link to='/about'>{LABLE_ABOUT}</Link>
        <Link to='/blog-post/:id'>{LABLE_PLACES}</Link>
        <Link to='/inspiration'>{LABLE_INSPIRATION}</Link>
      </nav>

      <div className='search-container'>
        <input type='text' placeholder='Search..' name='search' />
        <button type='submit'><i class='fa fa-search'></i></button>
      </div>

    </div>
    
  )
}

export default NavigationBar
