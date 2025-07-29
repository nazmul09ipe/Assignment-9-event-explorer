// @flow strict

import * as React from "react";
import { useState } from "react";
import logo from "../../../../assets/LOGO.png";
import { NavLink, useNavigate } from "react-router";
import './Nav.css';
import { use } from 'react';
import { AuthContext } from "../../../../Provider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Navbar() {


  useEffect(() => {
      AOS.init({ duration: 3000, once:true });
    }, []);
  
    const [isOpen, setIsOpen] = useState(false);
  
const{user,logOut}=use(AuthContext)
const navigate=useNavigate();
const handleLogOut=()=>{
   logOut();

navigate('/auth/login')
  }

console.log("Navbar user:", user);



  return (
    <nav className="w-full bg-cyan-900 text-white sticky top-0 z-50 p-3">
      <div className="w-11/12 mx-auto p-4 flex items-center justify-between">

      
        {/* Logo + Title */}
        <div data-aos="flip-right" className="flex items-center space-x-4">
          <img className="w-[80px] h-[60px]" src={logo} alt="Logo" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-white primary-font ">HappenHub</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-lg font-semibold primary-font  ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {
            user? <button className="ml-4 btn " onClick={handleLogOut}>Logout</button>:<NavLink to="/auth/login"><button className="ml-4 btn hover:bg-orange-400 hover:text-white transition duration-300">Login</button></NavLink>
          }
          {
            user?
            <div className="flex flex-col justify-center items-center">
            <div className="relative group">
             
             < img className="ml-4 w-[90px] h-[70px] rounded-3xl"src={user.photoURL} alt="" />
              <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100  duration-300 rounded-lg p-2"><h1 className="text-red-600 text-5 font-bold ml-5">{user.displayName || 'No Name'}</h1></div>


             </div>
           
              <div className="mt-2 font-light text-[12px]">{user.email}</div>

            </div>   
           :""
          }
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 pb-4 text-lg font-semibold primary-font">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/profile" onClick={() => setIsOpen(false)}>My Profile</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/auth/login" onClick={() => setIsOpen(false)}>Login</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
