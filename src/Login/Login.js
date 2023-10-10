import React from 'react';

const Register = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <form className='bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-md'>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>Almost There</h1>
        <p className='text-center text-gray-600 mb-6'>
          <span className="border-b border-black pb-1">Welcome To Innovist</span>
        </p>
        <div className="space-y-4">
          <input className="p-2 w-full bg-gray-100 rounded shadow-md " type='text' placeholder='Enter your first name' />
          <input className="p-2 w-full bg-gray-100 rounded shadow-md " type='text' placeholder='Enter your last name' />
          <input className="p-2 w-full bg-gray-100 rounded shadow-md " type='text' placeholder='Enter your email address' />
          <input className="p-2 w-full bg-gray-100 rounded shadow-md " type='text' placeholder='Enter your phone number' />
          <input className="p-2 w-full bg-gray-100 rounded shadow-md " type='password' placeholder='Set a password' />
          <button type='submit' className='w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-600 '>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
