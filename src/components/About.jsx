import React from 'react'
import Meirl from '../assets/meirl.png'

const About = () => {
  return (
    <div className='text-white font-[Bilo] '>
        <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-40 py-20 text-center flex flex-col '>
          <h1 className='md:text-5xl sm:text-2xl text-size-[40px] font-bilo md:py-6'>
              All About "TradeForEveryone"
          </h1>

          <div className=' grif justify items-center text-left'>
              <p className='md:text-2xl sm:text-1xl text-2xl font-bilo py-4'>
                  The purpose of this website is to publish algorithm trade educational content about trading and market research.  Most of the discussion will be around the Futures trading in both cryptocurrency and legacy markets If you have any further questions about from about us or are considering the purchase of TradeForEveryOne, You can contact us at info@tradeforeveryone.com</p>
             </div> 
         </div>
         <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-40 py-20 text-center flex flex-col '> 
         <div className='max-w-[500px] mt-[-96px] w-full shadow-xl bg-[#3d1673] flex flex-col p-3 my-12 rounded-xs'>
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
              <button className='bg-[#616161] text-[FFFFFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Pay With Crypto</button>
          </div>
          </div>


    </div>

    )
}

export default About