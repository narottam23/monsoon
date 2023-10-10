import { useState } from "react";
import Login from "../Register/Register";

const Navbar = () => {
    const [showLogin,setshowLogin]=useState(false);

    function handleLogin(){
        setshowLogin(!showLogin)
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black py-4 lg:px-20 shadow border-solid border-t-2 border-blue-700">

            <img src="https://innovist.com/cdn/shop/files/White_60fc8f08-8550-4a16-8409-298532881676_170x.png?v=1670321901" alt='logo' />

            <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <a href="#responsive-header"
                    className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded ">
                    <img src="https://innovist.com/cdn/shop/files/bare-logo_b27e2e10-7e5e-40d2-a5be-1fbbb44dd79a.png?v=1677248586" alt="logo1" className="w-20 h-20" />
                </a>
                <a href="#responsive-header"
                    className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded ">
                    <img src="https://innovist.com/cdn/shop/files/Artboard_1_1.png?v=1654863164" alt="logo2" className="w-20 h-20" />
                </a>
                <a href="#responsive-header"
                    className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-20 ">
                    <img src="https://innovist.com/cdn/shop/files/Artboard_1_2051f510-a6ca-4798-8036-c9e632a81cab.png?v=1654863229" alt="logo3" className="w-20 h-20" />
                </a>

                <input
                    className="border border-gray-300 bg-white text-black h-10 px-3 w-full rounded-lg text-sm focus:outline-none mr-10 "
                    type="search" name="search" placeholder="Search"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                        width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex justify-between items-center mr-10" onClick={handleLogin}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>

            {/* Background overlay for the login form */}
            {showLogin && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            )}
            {/* Login form */}
            {showLogin && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
                    <Login/>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
