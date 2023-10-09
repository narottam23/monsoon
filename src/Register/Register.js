import React from 'react';

const Register = () => {
  return (
    <div>
      <form className=' m-20 bg-opacity-50 rounded-lg border border-gray-200 p-4 text-center'>
        <h1 className='font-bold text-3xl'>Sign In</h1>
        <p>
          <span className="inline-block border-b border-black pb-1">
            Find your favorite items, saved addresses, and <br /> payments.
          </span>
        </p>
        <div className="mx-auto max-w-xs">
          <input className="p-2 my-6 w-full bg-white shadow-md text-center" type='text' placeholder='Enter your phone number or email' />

          <button type='submit' className='w-full bg-blue-700 text-white p-2 mt-1 rounded'>
            Submit
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex-grow border-b border-black"></div>
          <div className="px-4">OR</div>
          <div className="flex-grow border-b border-black"></div>
        </div>

      </form>
    </div>
  );
}

export default Register;
