// import React from 'react';
import {  FaArrowRight  } from "react-icons/fa";


const Navbar = () => {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'CP', href: '#cp' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];


    return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="navbar bg-black/80 backdrop-blur-[2px] border border-neutral-800 rounded-sm px-6 py-3 w-full shadow-2xl transition-all duration-300">
        
        {/* Brand Name with Gradient Text */}
        <div className="navbar-start">
          <a
            href="/" 
            className="text-lg font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Fardin <br />Chowdhruy
          </a>
        </div>

        {/* Center Links (Desktop) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white hover:bg-transparent focus:bg-transparent active:bg-transparent transition-colors px-2 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA Button */}
        <div className="navbar-end gap-2">
          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-neutral-900 border border-neutral-800 rounded-xl w-52 text-gray-300"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk Button with Glow Effect */}
          <a
            href="#contact"
            className="btn btn-sm md:btn-md bg-blue-300/30 hover:bg-blue-400/30 text-blue-300 border border-blue-800/40 hover:border-blue-400/60 rounded-sm font-medium px-4 shadow-[0_0_15px_rgba(163,230,53,0.15)] transition-all duration-300 gap-2 normal-case"
          >
            <FaArrowRight className="w-4 h-4 text-cyan-400" />
            <span>Let's Talk</span>
          </a>
        </div>

      </nav>
    </div>
    );
};

export default Navbar;