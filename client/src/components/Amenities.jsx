import React from 'react'
import Title from './Title'
import { roomCommonData } from '../assets/assets'

const Amenities = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <Title title='Amenities' subTitle='Discover the comforts and conveniences we offer.'/>

        <div className='mt-20 space-y-4'>
          {roomCommonData.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              <img src={item.icon} alt={`${item.title}-icon`} className='w-6.5'/>
              <div>
                <p className='text-base'>{item.title}</p>
                <p className='text-gray-500'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Amenities