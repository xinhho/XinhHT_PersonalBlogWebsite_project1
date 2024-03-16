import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar } from './components/NavigationBar'
import { Homepage } from './pages/HomePage'
import { BlogPost } from './pages/BlogPost'

export const App = () => {
  return (
    <div className='app'>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/homepage" component={Homepage} />
          <Route path="/blog-post" component={BlogPost} />
        </Routes>
      </Router>
      
    </div>
  )
}
