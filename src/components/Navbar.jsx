import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
    

  return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-white'>
      <a href="#">
            <span className="sr-only">TradeForEveryOne</span>
            <img height={70} width={70}
              className="h-20 w-auto sm:h-15"
              src="./img/logos.svg"
              alt="" />
          </a>
          <div class="flex flex-auto space-x-12 mr-30">
              <li class="hidden md:flex items-center justify-center h-20 
              max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
              focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">Home </li>

                
                <li class="hidden md:flex items-center justify-center h-20
                max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
                focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">About Us </li> 
             

             <li class="hidden md:flex items-center justify-center h-20 
              max-w-screen-lg mx-auto px-7 py-4 mt-5 font-Bilo text-gray-500-500 bg-purple-400 border-4 border-black rounded-xl   
              focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-purple-600">Contact Us </li>
              
              <button type="button" className="px-3 py-3 font-semibold rounded- dark:bg-gray-100 dark:text-gray-800">Login</button>

          </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div>
          <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <a href="#">
            <span className="sr-only">TradeForEveryOne</span>
            <img height={80} width={80}
              src="./img/logos.svg"
              alt="" />
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