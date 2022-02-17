import React from 'react'
import Cards from '../Cards/Cards'
import Carousels from '../Carousel/Carousel'
import { Container , Col , Row } from 'react-bootstrap'
import './Home.css'


function Home(){

  return (
    <div className="Home">


    <h1 className="my-name"> RUSLAN KASHAYEV </h1>
    <img src="./wallpaper.gif" className="img-fluid"/>


    <Container className="about">
    <h1 >About me</h1>
      <p>
      Hey! I am Ruslan, but you can call me Rusya if you want. I am student of Kazakh-British Technical University. Honestly,
      I was never best at school or academics, I am just super curious guy. A lot of stuff interests me, one of them is programming.
      I have a lot of ideas and here I will post my progress
      </p>

      <div className="lists">
      <p id="tmp"> My Stack of Techonologies </p>
          <ul>
            <li> React-bootstrap </li>
            <li> JavaScript </li>
            <li> HTML/CSS </li>
            <li> PostgreSQL </li>
            <li> Python </li>
          </ul>
      </div>

      <div className="lists">
      <p id="tmp"> Languages </p>
          <ul>
            <li> Kazakh (C1) </li>
            <li> Russian (C2) </li>
            <li> English (B2) </li>
          </ul>
      </div>
    </Container>

      <h1 className="text">My work experience</h1>

      <Cards />


      <div className="footer">
        <p>Contacts</p>
        <p>Email: kashayevruslan@gmail.com</p>
      </div>
    </div>
  )
}

export default Home
