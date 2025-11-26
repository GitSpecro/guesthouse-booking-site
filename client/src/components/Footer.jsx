import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
            <div className='max-w-80'>
                <img src={assets.logo} alt="logo" className='mb-4 h-15' />
                <p className='text-sm'>
                    Experience comfort and relaxation like never before. Book your stay at Rose Garden Guest House now!
                </p>
                <div className='flex items-center gap-3 mt-4'>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/RosegardenPongola" target="_blank"><img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/></a>
                </div>
            </div>

            <div>
                <p className='font-platyfair text-lg text-gray-800'>Quick Links</p>
                <ul className='mt-3 flex flex-col gap-2 text-sm'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>

            <div className='flex items-center'>
                <button className="px-4 py-2 text-sm border border-gray-300 rounded-full transition-all cursor-pointer">
                    Admin Login
                </button>
            </div>
        </div>
        <hr className='border-gray-300 mt-8' />
        <p className='py-5 text-center'>© {new Date().getFullYear()} Rose Garden Guest House. All rights reserved.</p>
    </div>
  )
}

export default Footer