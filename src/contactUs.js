import React  from 'react';
import emailjs from '@emailjs-com';

const ContactUs = () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_a6uc8us', 'template_eocaxzh', e.target, 'qmk8lZRY0B6uBt4co')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
    <form onSubmit={sendEmail} className="mx-auto max-w-[1240px]  bg-gray-600 rounded shadow-xl">
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
  
  );
};