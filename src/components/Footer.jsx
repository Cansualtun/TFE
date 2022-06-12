import React from 'react';
import {
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#616161]'>TradeForEveryOne / Logos</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex md:w-[60%] my-7'>
                    <a href='https://twitter.com/trade4every1'><FaTwitterSquare size={40} /></a>
                    <a href='https://github.com/Cansualtun/TFE'><FaGithubSquare size={40} /></a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-white'>RESOURCES</h6>
                <ul>
                    <li className='py-2 text-sm text-[#616161]'>ABOUT</li>
                    <li className='py-2 text-sm text-[#616161]'>BLOG</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>SERVICES</h6>
                <ul>
                    <li className='py-2 text-sm text-[#616161]'>Pricing</li>
                    <li className='py-2 text-sm text-[#616161]'>MENTORSHIP</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm text-[#616161]'>Privacy Policy</li>
                    <li className='py-2 text-sm text-[#616161]'>Terms & Conditions </li>
                </ul>
            </div>
      </div>
      <div className='flex max-w-[1240px] mx-auto text-m font-bold text-[#616161] items-center text-justify '><h2>© 2022 TradeForEveryone™. All Rights Reserved.</h2>
      </div>
    </div>
  );
} ;
  
export default Footer;