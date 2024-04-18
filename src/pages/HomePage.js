import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Homepage = ({ data, img }) => {
  const renderSliderItems = (data) => {
    return data?.map((item) => {
      return (
        <div key={item.id} className='img-carousel card'>
          <img src={ item?.imageUrl } alt={item?.title} />
          <p><a href={`/blog-post/${item?.id}`}>{item?.title}</a></p>
        </div>
      )
    })
  }

  console.log('data', data)

  return(
    <div className='homepage'>
      <Header />
      <div className='content'>

        <div className='all-destinations'>
          <div className='all-destinations-title'>All destinations</div>
          <div className='all-destinations-content'>
            <div className='main'>
              <div className='img-carousel card'>
                <img src={ img?.imageUrl } alt={img?.title} />
                <p><a href={`/blog-post/${img?.id}`}>{img?.title}</a></p>
              </div>
            </div>
            <div className='sub'>
              {renderSliderItems(data?.allDestination)}
            </div>
          </div>
        </div>

        <div className='favorites-post'>
          <div className='favorites-post-title'>Best places to visit in Vietnam</div>
          <div className='favorites-post-wrapper'>
            {renderSliderItems(data?.bestPlaces)}
          </div>
        </div>

        <div className='unforgettable-experiences'>
          <div className='unforgettable-experiences-title'>Unforgettable experiences</div>
          <div className='unforgettable-experiences-wrapper'>
            {renderSliderItems(data?.unforgettableExperiences)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Homepage.prototype = {
  data: PropTypes.object,
  img: PropTypes.object
}

export default Homepage
