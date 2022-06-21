import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoy from '../assets/logoyeni.png';
 

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
    

  return (
      <div className='flex justify-between items-center h-36 max-w-[1240px] mx-auto px-6 text-white'>
        
           <a href="#">
              <span className="sr-only">TradeForEveryOne</span>
              <img height={70} width={70}
              className="h-20 w-auto sm:h-15"
              src={logoy}/></a>
          <div class="flex space-x-10">
            <div className='hidden md:flex items-center h-20 
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600"'>
                  <a href='/'>Home</a>
              </div>
               <div className='hidden md:flex items-center h-20 mr-40
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600'>
                  <a href='/About'>About</a>
              </div>
               <div class
                  ="hidden md:flex items-center h-20 
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">
              <a href ='/ContactUs'>ContactUs</a>
              </div>
              <div className
              ='hidden md:flex items-center h-20 
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600'>
                  <a href='/Services'>Services</a>
                </div>
              </div>
              <div className="flex space-x-4">
              <div>
                <a href="/LogIn"><button type="button" className="hidden md:flex items-center h-20 
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-black bg-white border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">Login</button></a>
             </div>
              <div>
                <a href="/SignUp"><button type="button"className="hidden md:flex items-center h-20 
                  max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-black bg-white border-4 border-black rounded-xl   
                  focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">Sıgn Up</button></a>
              </div>
              </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div>
          <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <a href="#">
            <span className="sr-only">TradeForEveryOne</span>
            {/*<img height={80} width={80}
              src="./img/logos.svg"
  alt="" />*/}
          </a>
            <li className='p-5 border-b border-gray-600'>Home</li>
            <li className='p-5 border-b border-gray-600'>About Us</li>
            <li className='p-5 border-b border-gray-600'>Contact Us</li>
            <li className='p-5 border-b border-gray-600'>Login</li>
            <li className='p-5'>Sign In</li>
          </ul>
        </div>
      </div>
  );
};

      export default Navbar;