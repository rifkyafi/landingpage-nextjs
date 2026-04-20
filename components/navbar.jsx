"use client";
import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/*  Blur Background */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4">
        
        <nav className="relative w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">

          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="p-2 rounded-full bg-white/10">
              <FaHome className="text-xl" />
            </div>
            <span className="hidden sm:block">MyPortfolio</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-white/80">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#About" className="hover:text-white transition">About</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact Me</a></li>
          </ul>

          {/* Mobile Button */}
          <div
            className="md:hidden text-white cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-white/80 shadow-xl">
              
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#About" className="hover:text-white transition">About</a>
              <a href="#Contact" className="hover:text-white transition">Contact Me</a>

            </div>
          </div>

        </nav>
      </header>
    </>
  );
};

export default Navbar;