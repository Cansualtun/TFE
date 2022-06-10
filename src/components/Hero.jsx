import React from 'react';
import Typed from 'react-typed';
import Meirl from '../assets/meirl.png'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[700px] mt-[-96px] w-full h-screen mx-40 text-left flex flex-col justify-center'>
        
        
        <h1 className='md:text-5xl sm:text-2xl text-4xl font-bold md:py-6'>
            UnMatched Trading Tools
        </h1>
    
        <div className=' grif justify-left items-center text-justify'>
          <p className='md:text-2xl sm:text-1xl text-2xl font-bilo py-4'>
          Step up your trading with TradeForEveryone indicator, it helps you giving better trading decisions with it's unmatched trading strategy.
          </p></div> 

                  <a className='grid justify-items-center'>
                  
                    <Typed
                    className='md:text-xl sm:text-xl text-xl font-Bilo text-purple-700'
                      strings={['BTC', 'ETH', 'EOS', 'SOL', 'SHIB', 'ALL OF CRYPTO', 'ONE PLATFORM']}
                      typeSpeed={120}
                      backSpeed={140}
                      loop
                    /></a>   
                    
        

        <button className='bg-[#606060] w-[200px] rounded-md font-medium my-6 item-left py-3 text-white'>Access Now</button>
      </div>
      <div className='w-full bg-[#F2F6FF] py-16 px-4'>
              
              <div className='flex flex-col justify-center pb-10'>
                  <div className='flex flex-col py-10 items-end mr-20 '>
                          <button className='bg-[#3d1673] text-[#606060] w-[400px] rounded-3xl font-bilo text-xl py-20 ml-20'>Get Started</button>
                        </div>
              <p className='text-[#16194F] font-Bilo text-4xl justify-start ml-20  '>Built Exclusively for cyrpto traders</p>
              <h1 className= 'md:text-2xl sm:test-2xl text-l font-bil py-4 text-left hover:text-3xl ml-20 text-[#3d1673] max-w-md '> TradeForEveryone works on all financial 
                markets but our main focus is cyrpto trades 
                and we're developing our products everyday to 
                help our members succeed.
              </h1>
                    <div className='flex flex-col py-10 items-end mr-20 mb-22 '>
                        <button className='bg-[#3d1673] text-[#606060] w-[400px] rounded-3xl font-bilo text-xl py-20 ml-20'>Get Started</button>
                    </div>
                      <div className='flex flex-col-2  items-end '>
                      <button className='bg-[#3d1673] text-[#606060] w-[200px] rounded-3xl font-bilo text-xl py-20 ml-20'>Get Started</button>
                      <button className='bg-[#3d1673] text-[#606060] w-[200px] rounded-3xl font-bilo text-xl py-20 ml-20'>Get Started</button></div>
                      <div className='flex flex-col items py-10 ml-10'>
                      <button className='bg-[#3d1673] text-[#606060] w-[470px] rounded-3xl font-bilo text-xl py-20 ml-20'>Get Started</button>
                      </div>
              </div>
          </div>

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
    <div className='w-full bg-[#6A6D9E] py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Stay In Touch
          </h1>
          <p>Join our newsletter to get news before anyone.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#3d1673] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#3d1673]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div> 


    </div>
  );
};

export default Hero;
