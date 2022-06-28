import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email,password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <h3 className="font-bold text-2xl text-center">Welcome to TradeForEveryone</h3>
            <p className="text-black pt-2 text-center">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-purple-400 border border-input rounded-2xl text-white'
                type='email'
              />
              
            </div>
          </div>
          <div className='my-10'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-purple-400 border border-input rounded-2xl'
                type='password'
              />
              
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
            Sign up
          </button>
        </form>
        <p className='my-4'>
          Already have an account?{' '}
          <Link to='/signin' className='text-white'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;