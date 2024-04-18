import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPost = ({data}) => {
  const posts = [ ...data.bestPlaces, ...data.allDestination, ...data.unforgettableExperiences]
  console.log('posts', posts)
  return(
    <div className='blog-post'>
      <Header />
      <div className='container'>
        {/* <h1>{post.title}</h1>
        <div className='content'>
          <div className='content-right'>
            <article>{post.content}</article>
          </div>
          <div className='content-left'>
            <img src={ post.imageUrl } alt={post.title} />
          </div> */}

        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object
}

export default BlogPost
