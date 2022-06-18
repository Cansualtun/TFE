import React from 'react'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import { FaDog } from 'react-icons/fa';



const Blog = () => {
  return (
    <div>
    <div className='text-white font-[Bilo]'>
        <div className='max-w-[1240px] mt-[-96px] h-full w-full mx-40 py-20 text-center flex flex-col mt-4 '>
          <h1 className='md:text-5xl sm:text-2xl text-size-[60px] font-bilo md:py-6'>
              Blog
          </h1>
          <div className="card-group">
  <div className="card">
    <img src="https://picsum.photos/300/300" className="card-img-top" alt=""/>
    <div className="card-body">
      <h4 className="card-title text-black ml-20">Lorem Ipsum</h4>
      <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src='https://picsum.photos/299/300' className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title text-black ml-20">Lorem Ipsum</h5>
      <p className="card-text text-black">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src='https://picsum.photos/300/299' className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title text-black ml-20">Lorem Ipsum</h5>
      <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </div>
    </div>
</div>
  ) ; 
} ; 

export default Blog