import React from 'react';
import {
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-5 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#616161] mt-12 '>TradeForEveryOne / Logos</h1>
                <p className='py-4'>Our goal as TradeForEveryone is making trading easier and profitable by using unmatched algorithms and strategies developed by professional traders.</p>
                <div className='flex md:w-[60%] my-7'>
                    <a href='https://twitter.com/trade4every1'><FaTwitterSquare size={40} /></a>
                    <a href='https://github.com/Cansualtun/TFE'><FaGithubSquare size={40} /></a>
                </div>
            </div>
            <div className='lg:col-span-1 flex justify-between mt-20'>
            <div>
                <h6 className='font-medium text-white'>Resources</h6>
                <ul>
                    <li className='py-2 text-sm text-[#616161]'>About</li>
                    <li className='py-2 text-sm text-[#616161]'>Blog</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>Services</h6>
                <ul>
                    <li className='py-2 text-sm text-[#616161]'>Pricing</li>
                    <li className='py-2 text-sm text-[#616161]'>Mentorship</li>
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
      <div className='flex max-w-[1240px] text-m font-bold text-[#616161] mt-20'><h2>© 2022 TradeForEveryone™. All Rights Reserved.</h2>
      </div>
    </div>
  );
} ;
  
export default Footer;