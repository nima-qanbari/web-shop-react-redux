import React from 'react'
import "./App.css"

//react-router-dom
import { BrowserRouter as Router } from 'react-router-dom'

//components
import Disscount from './components/Disscount/Disscount'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Category from './components/Category/Category'

const App = () => {
  return (
    <div>
      <Router>

      <Navbar />
      <Disscount />
      <Slider />
      <Category />
      </Router>
    </div>
  )
}

export default App