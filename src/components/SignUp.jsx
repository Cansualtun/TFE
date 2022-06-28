import { async } from '@firebase/util';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [error, setError] = useState('');
    const {SignUp} = UserAuth();

    const {handleSubmit} =async (e) => {
        e.preventDefault()
        setError('')
        try {
            await SignUp(email,password)
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            
        }
    }

  return (
     <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <div className="max-w-lg mx-auto">
        <a href="#">
            <h1 className="text-4xl font-bold text-white text-center">Sıgn Up</h1>
            {error ? <p className='bg-red-300 p-3 my-2'>{error}</p>: null}
        </a>
    </div>
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <h3 className="font-bold text-2xl text-center">Welcome to TradeForEveryone</h3>
            <p className="text-gray-600 pt-2 text-center">Sign in to your account</p>
       <div className="mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col" method="POST" action="#">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="Name">Name</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="Name">Surname</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
               
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value) } 
                     type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                    
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="Tradingview ID">TradingWiew ID</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input onChange={(e)=>setPasword(e.target.value) } 
                    type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                    </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password Again</label>
                    <input onChange={(e)=>setPasword(e.target.value) } 
                    type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                 </div>
                <button id="Register" className="bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" href="../compenents/hero" >Sign In</button>
            </form>
       </div>
    </div>
</div>
  );
};

export default SignUp; 
