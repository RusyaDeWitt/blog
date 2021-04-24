import React from 'react'
import Cards from '../Cards/Cards'
import Carousels from '../Carousel/Carousel'
import './Home.css'


function Home(){

  return (
    <div className="Home">
    <Carousels />

    <div class="text">
      <h1>My projects</h1>
    </div>
      <Cards />
    </div>
  )
}

export default Home
