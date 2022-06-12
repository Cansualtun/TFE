import React from 'react'

const ContactUs = () => {
  return (
    <div className="mx-auto h-full max-w-[1240px] text-center">
        <div className="ml-5 mr-5">
      <h1 className="mx-auto text-6xl text-white items-center">Contant-Us</h1>
          <div className="max-w-[700px] my-6 ml-60 mr-60">
              <p className="mx-auto md:text-xl sm:text-l text-center text-white">
                  <i className="text-l text-justify"></i> Please Write For Us Something
              </p>
              </div>
           <div>
              <form className="mx-auto max-w-[1240px]  bg-gray-600 rounded shadow-xl">
                      <div className="">
                          <label className="block text-sm text-gray-600" for="name">Name</label>
                          <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="name" name="name" type="text" required="" placeholder="Your Name" aria-label="Name"></input>
                      </div>
                      <div className="mt-2">
                          <label className="block text-sm text-gray-600" for="email">Email</label>
                          <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="email" name="email" type="text" required="" placeholder="Your Email" aria-label="Email"></input>
                      </div>
                      <div className="mt-2">
                          <label className=" block text-sm text-gray-600" for="message">Message</label>
                          <textarea className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="message" name="message" rows="6" required="" placeholder="Your inquiry.." aria-label="Email"></textarea>
                      </div>
                      <div className="mt-10">
                        <button class="btn btn-outline bg-purple-400 text-white">Submit</button>
                      </div>      
              </form>
              </div>
              </div>
   </div>
  );
};

export default ContactUs