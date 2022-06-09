import React from 'react';
import Meirl from '../assets/meirl.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#F2F6FF]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-[#3d1673] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-[#F2F6FF]' src={Meirl} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Lorem Ipsum</h2>
              <p className='text-center text-4xl font-bold'>$549</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <button className='bg-[#3d1673] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-[#3d1673] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
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
              <button className='bg-[#F2F6FF] text-[#3d1673] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
