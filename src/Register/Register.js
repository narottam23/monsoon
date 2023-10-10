import React, { useState } from 'react';
import Register from "../Login/Login"
const Login = () => {
  const [showRegister,setShowRegister]=useState(false)
    function handleRegister(){
          setShowRegister(!showRegister)
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 bg-white shadow-lg rounded-lg p-8">
                <h4 className="text-3xl font-bold mb-4 text-center text-primary">Sign In</h4>
                <p className="text-gray-600 mb-6 text-center">
                    Find your favorite items, saved addresses, and payments
                </p>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700"
                        type="text"
                        placeholder="Enter your phone number and email"
                        required
                    />
                </div>
                <button
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark focus:outline-none"
                    type="submit"
                >
                    Submit
                </button>
                <div className="flex items-center justify-center mt-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <p className="mx-4 text-gray-400 font-semibold">OR</p>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>
                <button
                    className="w-full bg-white text-black py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-200 focus:outline-none mt-6"
                    onClick={handleRegister}
                    type="submit"
                >
                    <svg
                        className="w-6 h-6 text-red-500 fill-current mr-2"
                        
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.39 12l-2.98-2.98C16.6 8.24 16 7.15 16 6c0-1.65-1.35-3-3-3s-3 1.35-3 3c0 1.15-.6 2.24-1.41 2.98L7.61 12l-1.4 1.41c-.8.8-1.22 1.86-1.22 2.99 0 2.48 2.02 4.5 4.5 4.5h7c2.48 0 4.5-2.02 4.5-4.5 0-1.13-.42-2.19-1.22-2.99L20.4 12zM12 19c-1.93 0-3.5-1.57-3.5-3.5S10.07 12 12 12s3.5 1.57 3.5 3.5S13.93 19 12 19zm5-5c-.55 0-1-.45-1-1s.45-1 1-1c.55 0 1 .45 1 1s-.45 1-1 1zm-5-12C6.48 2 4.46 4.02 4.46 6.5c0 .57.19 1.1.51 1.53L2.11 11.9c-.4.4-.4 1.04 0 1.44s1.04.4 1.44 0l2.86-2.86c.45.33.96.56 1.53.56 1.93 0 3.5-1.57 3.5-3.5S13.93 3 12 3z" />
                    </svg>
                    Sign in with Google
                </button>
            </div>
            {/* Background overlay for the login form */}
            {showRegister && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            )}
            {/* Login form */}
            {showRegister && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
                   <Register/>
                  
                </div>
            )}
        </div>
    );
}

export default Login;
