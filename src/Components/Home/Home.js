import React from 'react'

//search form 
import Reservation from './ReservationForm'
import Info from '../InfoSection/Info'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import Discover from './Discover'


const Home = () => {
  return (
    <div>
      <div className="containerHome">
        {/* backgroud image div */}
        <div className='homeImage'>
        </div>

        {/* content div */}
        <div className="content">
          <h2>
            Where Dreams Take Flight, Reservations Take Off
          </h2>
          <p>Welcome to SkyBooker, your gateway to seamless and stress-free flight reservations. Discover a world of convenience as you explore 
            our user-friendly platform designed to make booking your next journey a breeze</p>
        </div>
        <Reservation/>
      </div>
      <Info/>
      <Discover />
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
