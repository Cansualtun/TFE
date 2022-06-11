import React from 'react'
import Meirl from '../assets/meirl.png'

const Liste = () => {
  return (

      <div  className='w-full shadow-xl bg-[#3d1673] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Meirl} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Lorem Ipsum</h2>
      <p className='text-center text-4xl font-bilo'>$949</p>
      <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>LOREM IPSUM</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
        
    </div>
  )
}

export default Liste