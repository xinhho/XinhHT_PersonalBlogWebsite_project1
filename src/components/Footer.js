import React from 'react'
import facebook from '../assets/images/fb-icon.jpg'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/Logo-Twitter-icon-transparent-PNG.png'

const Footer = () => {

  const contactInfoData = [
    { href: 'https://www.google.com', label: 'Disclaimer & Privacy Policy'},
    { href: 'https://www.google.com', label: 'Conntact'},
    { href: 'https://www.google.com', label: 'Newsletter'}
  ]

  const infoData = [
    { href: 'https://www.google.com', label: 'About'},
    { href: 'https://www.google.com', label: 'Service'},
    { href: 'https://www.google.com', label: 'Work With Me'},
    { href: 'https://www.google.com', label: 'Contact'},
  ]

  const exploreData = [
    { href: 'https://www.google.com', label: 'Global Culture'},
    { href: 'https://www.google.com', label: 'Responsible Trabel'},
    { href: 'https://www.google.com', label: 'City Guides'}
  ]

  const popularData = [
    { href: 'https://www.google.com', label: 'Geogia'},
    { href: 'https://www.google.com', label: 'Oman'},
    { href: 'https://www.google.com', label: 'Cambodia'},
    { href: 'https://www.google.com', label: 'Viet Nam'},
  ]

  const renderLinks = (data) => {
    return (
      data?.map((item) => {
        return <><a href={item.href}>{item.label}</a></>
      })
    )
  }

  return(
    <div className='footer'>
      <div className='informations'>
        <div className='informations-info'>
          <label>infor</label>
          {renderLinks(infoData)}
        </div>
        <div className='informations-explore'>
          <label>explore</label>
          {renderLinks(exploreData)}
        </div>
        <div className='informations-popular'>
          <label>popular</label>
          {renderLinks(popularData)}
        </div>
      </div>
      <div className='contact-info'>{renderLinks(contactInfoData)}</div>
      <div className='socials'>
        <a href='https://www.facebook.com/'><img src={facebook} alt='' /></a>
        <a href='https://twitter.com/'><img src={twitter} alt='Twitter'/></a>
        <a href='https://www.instagram.com/'><img src={instagram} alt='Instagram' /></a>
      </div>
    </div>
  )
}

export default Footer