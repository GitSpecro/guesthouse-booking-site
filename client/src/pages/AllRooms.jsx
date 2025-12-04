import React, { useState } from 'react'
import Title from '../components/Title'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({label, selected = false, onChange = () => { }}) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);

    const roomTypes = [
        'Single Bed',
        'Double Bed',
        'Family (1 Double + 3 Single)',
    ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-42 md:pt-49 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <Title title='Rooms' subTitle='Take a look at our available rooms and find your perfect stay.' align='left'/>
        
            {roomsDummyData.map((room) => (
                <div key={room._id} className='flex flex-col md:flex-row items-start justify-center py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                    <img onClick={() => {navigate(`/rooms/${room._id}`), scrollTo(0, 0)}} src={room.images[0]} alt="room-img" title="View Room Details" className='md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                    <div className='md:w-1/2 flex flex-col gap-2'>
                        <p className='text-gray-500/90'>{room.type}</p>
                        <p onClick={() => {navigate(`/rooms/${room._id}`), scrollTo(0, 0)}}  className='font-playfair text-3xl font-medium text-gray-800 cursor-pointer'>Room {room.number}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Filters */}
        <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16'>
            <div className={`flex items center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilters && 'border-b'}`}>
                <p className='text-base font-medium text-gray-800'>FILTERS</p>
                <div className='text-xs cursor-pointer'>
                    <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
                        {openFilters ? 'HIDE' : 'SHOW'}
                    </span>
                    <span className='hidden lg:block'>
                        CLEAR
                    </span>
                </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                <div className='px-5 pt-5 pb-7'>
                    {roomTypes.map((type) => (
                        <CheckBox key={type} label={type} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllRooms