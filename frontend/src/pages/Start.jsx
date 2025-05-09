
import React from 'react'
import backgroundImage from '../assets/images/newbg.png';
import logo from '../assets/images/logonamewhite.png';
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(../assets/images/start.png)] h-screen pt-8 flex justify-between flex-col w-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img className=' w-10 ml-3' src= {logo} alt="" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with FleetX</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start