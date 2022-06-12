import React from 'react'

const LogIn = () => {
  return (
    <div>
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div>
            <h3 className="font-Bilo text-2xl text-center">Welcome to TradeForEveryone </h3>
            <p className="text-gray-600 pt-2 text-center">Log into your account</p>
        </div>
        <div className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label id="button" className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input  type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
                <button id="btn" className="bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" href="/src/index.html" >Log In</button>
            </form>
        </div>
    </div>

    <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <a className="text-white">Don't have an account?</a><a href="/src/register.html" className="font-bold hover:underline text-purple-400">Sign up</a>
    </div>
</div> 
  ) ; 
} ; 

export default LogIn ; 