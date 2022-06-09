import React from 'react';
import Typed from 'react-typed';

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
    </div>
  );
};

export default Hero;
