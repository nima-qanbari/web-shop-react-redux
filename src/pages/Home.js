import React from 'react'

//components
import Disscount from '../components/Disscount/Disscount'
import Slider from '../components/Slider/Slider'
import Category from '../components/Category/Category'
import JumpToUp from "../components/JumpToUp/JumpToUp"

const Home = () => {
  return (
    <div>
       <Disscount />
      <Slider />
      <Category />
      <JumpToUp />
    </div>
  )
}

export default Home