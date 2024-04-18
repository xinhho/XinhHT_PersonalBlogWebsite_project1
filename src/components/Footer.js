import React from 'react'

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

    </div>
  )
}

export default Footer