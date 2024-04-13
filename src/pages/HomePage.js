import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img1 from '../assets/images/ninh-binh-viet-nam.jpg'
import img2 from '../assets/images/trung-thu-o-hoi-an-top-banner.jpg'
import img3 from '../assets/images/sapa-vietnam-trekking.png'
import img4 from '../assets/images/Ha-Long-Bay-Vietnam-guide.png'
import img6 from '../assets/images/hon-do-ninh-thuan-6.jpg'
import img7 from '../assets/images/khu-du-lich-mang-den-kon-tum-4_05e7354efbf6402c9863b98dae6ae8fb_grande.jpg'
import img8 from '../assets/images/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-1.png'

const Homepage = () => {
const bestPlaces = [
  {
    imageUrl: img1,
    title: 'Best Things To Do in Ninh Binh & Tam Coc (Vietnam)',
    href:''
  },
  {
    imageUrl: img2,
    title: '14 Things To Do in Hoi An, Vietnam',
    href:''
  },
  {
    imageUrl: img3,
    title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
    href:''
  },
  {
    imageUrl: img4,
    title: 'Ha Long Bay: How to Visit & Things to do',
    href:''
  }
]

const allDestination = [
  {
    imageUrl: img1,
    title: 'Best Things To Do in Ninh Binh & Tam Coc (Vietnam)',
    href:''
  },
  {
    imageUrl: img3,
    title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
    href:''
  },
  {
    imageUrl: img4,
    title: 'Ha Long Bay: How to Visit & Things to do',
    href:''
  },
  {
    imageUrl: img6,
    title: 'Hon Do Ninh Thuan',
    href:''
  },
  {
    imageUrl: img7,
    title: 'Mang-Den kontum Vietnam',
    href:''
  },
  {
    imageUrl: img8,
    title: 'Da Lat Vietnam',
    href:''
  }
]

const unforgettableExperiences = [
  {
    imageUrl: img8,
    title: 'Discover Vietnam by Motorbike with Easy Riders',
    href:''
  },
  {
    imageUrl: img6,
    title: 'Trekking in Sapa: Balancing on the Borders of the Ricefields',
    href:''
  },
  {
    imageUrl: img7,
    title: '14 Best Things to do in Vietnam in 2024',
    href:''
  }
]

  const renderSliderItems = (data) => {
    return data?.map((item) => {
      return (
        <div className='img-carousel'>
          <img src={ item?.imageUrl } alt={item?.title} />
          <p><a href={item?.href}>{item.title}</a></p>
        </div>
      )
    })
  }

  return(
    <div className='homepage'>
      <Header />
      <div className='content'>

        <div className='all-destinations'>
          <div className='all-destinations-title'>All destinations</div>
          <div className='all-destinations-content'>
            <div className='main'>
              <div className='img-carousel'>
                <img src={ img2 } alt='14 Things To Do in Hoi An, Vietnam' />
                <p><a href='/gg'>14 Things To Do in Hoi An, Vietnam</a></p>
              </div>
            </div>
            <div className='sub'>
              {renderSliderItems(allDestination)}
            </div>
          </div>
        </div>

        <div className='favorites-post'>
          <div className='favorites-post-title'>Best places to visit in Vietnam</div>
          <div className='favorites-post-wrapper'>
            {renderSliderItems(bestPlaces)}
          </div>
        </div>

        <div className='unforgettable-experiences'>
          <div className='unforgettable-experiences-title'>Unforgettable experiences</div>
          <div className='unforgettable-experiences-wrapper'>
            {renderSliderItems(unforgettableExperiences)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
