import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import BlogPost from './pages/BlogPost'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<BlogPost />} />
          <Route path="/places" element={<BlogPost />} />
          <Route path="/inspiration" element={<BlogPost />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
