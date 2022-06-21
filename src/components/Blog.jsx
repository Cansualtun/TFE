import React from 'react'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import { FaDog } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";



const Blog = () => {
  return (
    <div>
    <div className='text-white font-[Bilo]'>
        <div className='max-w-[1240px] mt[-96px] h-full w-full mx-40 py-20 text-center flex flex-col mt-4 '>
          <h1 className='md:text-5xl sm:text-2xl text-size-[60px] font-bilo md:py-6'>
              Blog
          </h1>
          <div className="card-group space-x-6 rounded-r-lg">
  <div className="card hover:scale-105 duration-300 bg-slate-400 rounded-r-lg">
    <img src="https://picsum.photos/300/300" className="card-img-top" alt=""/>
    <div className="card-body rounded-r-lg">
    <h5 className="card-title text-black ml-20">Lorem Ipsum</h5>
     <p className="card-text text-black">This card has supporting text below as a natural lead-in to additional content
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate ab mollitia expedita.</p>
      <a href=''>
      <button class="btn btn-outline bg-purple-400 text-white">Read More</button>
      </a>
    </div>
  </div>
  <div className="card hover:scale-105 duration-300 bg-slate-400 hover:rounded-6">
    <img src='https://picsum.photos/299/300' className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title text-black ml-20">Lorem Ipsum</h5>
      <p className="card-text text-black">This card has supporting text below as a natural lead-in to additional content
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate ab mollitia expedita.</p>
      <a href=''>
      <button class="btn btn-outline bg-purple-400 text-white">Read More</button>
      </a>
    </div>
  </div>
  <div className="card hover:scale-105 duration-300 bg-slate-400 rounded-r-lg">
    <img src='https://picsum.photos/300/299' className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title text-black ml-20">Lorem Ipsum</h5>
      <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href=''>
      <button class="btn btn-outline bg-purple-400 text-white">Read More</button>
      </a>
    </div>
  </div>
</div>
        </div>
    </div>
  <a id="ok" className="ml-2 hover:scale-105 duration-300" href=''><FaArrowRight size={70} /></a>
  <p className="text-white">Click to more read!</p>
</div>
  ) ; 
} ; 

export default Blog