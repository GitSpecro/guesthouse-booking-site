import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import { facilityIcons } from '../assets/assets'
import { assets } from '../assets/assets'

const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find((room) => room._id === id);
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <h1 className='text-3xl md:text-4xl font-playfair'>Room {room.number} <span className='font-inner text-sm'>({room.type})</span></h1>

        {/* Room Images */}
        <div className='flex flex -col lg:flex-row gap-6 mt-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>

            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image, index) => (
                    <img onClick={() => setMainImage(image)} key={index} src={image} alt='Room Image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-[var(--color-primary)]'}`}/>
                ))}
            </div>
        </div>

        {/* Room Highlights */}
        <div className='flex flex-col mt-10'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CheckIn CheckOut Form */}
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-md:mx-auto shadow-md border border-gray-300 w-fit'>
                  
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required/>
            </div>
    
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required/>
            </div>
    
            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" required/>
            </div>
    
            <button type='submit' className='rounded-md bg-[var(--color-primary)] py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
                <span>Check Availability</span>
            </button>
        </form>
    </div>
  )
}

export default RoomDetails