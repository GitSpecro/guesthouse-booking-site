import React from 'react'
import Hero from '../components/Hero'
import FeaturedRooms from '../components/FeaturedRooms'
import Amenities from '../components/Amenities'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedRooms />
        <Amenities />
        <Testimonial />
    </>
  )
}

export default Home