import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const BlogPost = ({data}) => {
  let { id } = useParams()
  const posts = [ ...data.bestPlaces, ...data.allDestination, ...data.unforgettableExperiences]
  const dataPost = posts?.filter(item => parseInt(item?.postId) === parseInt(id))

  return(
    <div className='blog-post'>
      <Header />
      <div className='container'>
        <h1>{dataPost[0]?.title}</h1>
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
