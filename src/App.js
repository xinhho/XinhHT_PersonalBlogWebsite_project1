import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import About from './pages/About'
import Places from './pages/Places'
import Inspiration from './pages/Inspiration'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/inspiration" element={<Inspiration />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
