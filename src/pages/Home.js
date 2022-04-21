import React from 'react'

//components
import Disscount from '../components/Disscount/Disscount'
import Slider from '../components/Slider/Slider'
import Category from '../components/Category/Category'

const Home = () => {
  return (
    <div>
       <Disscount />
      <Slider />
      <Category />
    </div>
  )
}

export default Home