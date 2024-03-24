import React from 'react'

const Footer = () => {

  const contactInfoData = [
    { href: '', label: 'Disclaimer & Privacy Policy'},
    { href: '', label: 'Conntact'},
    { href: '', label: 'Newsletter'}
  ]

  const infoData = [
    { href: '', label: 'About'},
    { href: '', label: 'Service'},
    { href: '', label: 'Work With Me'},
    { href: '', label: 'Contact'},
  ]

  const exploreData = [
    { href: '', label: 'Global Culture'},
    { href: '', label: 'Responsible Trabel'},
    { href: '', label: 'City Guides'}
  ]

  const popularData = [
    { href: '', label: 'Geogia'},
    { href: '', label: 'Oman'},
    { href: '', label: 'Cambodia'},
    { href: '', label: 'Viet Nam'},
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
        {/* <div className='informations-notice'></div> */}
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