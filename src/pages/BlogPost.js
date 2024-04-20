import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import facebook from '../assets/images/fb-icon.jpg'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/Logo-Twitter-icon-transparent-PNG.png'


const BlogPost = ({data}) => {
  let { id } = useParams()
  const posts = [ ...data.bestPlaces, ...data.allDestination, ...data.unforgettableExperiences]
  const dataPost = posts?.filter(item => parseInt(item?.postId) === parseInt(id))

  return(
    <div className='blog-post'>
      <Header />
      <div className='container'>
        <h1>{dataPost[0]?.title}</h1>
        <p><b>Author Name</b>: {dataPost[0]?.authorName} / <b>Date</b>: {dataPost[0]?.dateCreate}</p>
        <div className='socials'>
          <a href='https://www.facebook.com/'><img src={facebook} alt='Facebook' /></a>
          <a href='https://twitter.com/'><img src={twitter} alt='Twitter'/></a>
          <a href='https://www.instagram.com/'><img src={instagram} alt='Instagram' /></a>
        </div>
        <div className='content'>
          <div className='content-right'>
            <article>{dataPost[0]?.content}</article>
          </div>
          <div className='content-left'>
            <img src={ dataPost[0]?.imageUrl } alt={dataPost[0]?.title} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object
}

export default BlogPost
