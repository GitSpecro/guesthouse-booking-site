import React from 'react'
import { roomsDummyData } from '../assets/assets'
import RoomCard from './RoomCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedRooms = () => {

  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

      <Title title='Featured Rooms' subTitle='Explore our most popular rooms.'/>

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
            <RoomCard room={room} index={index} key={room._id}/>
        ))}
      </div>

      <button onClick={() => {navigate('/rooms'); scrollTo(0, 0);}} className='my-16 px-4 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>View All Rooms</button>
    </div>
  )
}

export default FeaturedRooms