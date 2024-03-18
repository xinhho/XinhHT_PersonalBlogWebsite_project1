import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Homepage from './pages/HomePage'
import BlogPost from './pages/BlogPost'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/blog-post" element={<BlogPost />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
