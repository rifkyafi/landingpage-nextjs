"use client";
import React, { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (isExpand) {
      const t = setTimeout(() => setShowMenu(true), 250);
      return () => clearTimeout(t);
    } else {
      setShowMenu(false);
    }
  }, [isExpand]);

  return (
    <>
      {/* Blur (Mobile) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-2 py-4">
        <nav
          className={`relative md:absolute md:left-1/2 md:-translate-x-1/2
          flex items-center
          rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg
          transition-all duration-500 ease-in-out
          
          px-4 py-3
          w-full max-w-[95%] sm:max-w-xl
          
          ${isExpand ? "md:w-[700px] justify-start" : "md:w-[150px] justify-center"}
          `}
        >

          {/* Logo */}
          <div
            className="flex items-center gap-2 text-white font-semibold cursor-pointer z-10"
            onClick={() => setIsExpand(!isExpand)}
          >
            <div className="p-2 rounded-full bg-white/10">
              <FaHome className="text-xl" />
            </div>
            <span className="hidden sm:block">
              {isExpand ? "MyPortfolio" : "Menu"}
            </span>
          </div>

          {/* Desktop Menu (di kanan, bukan tengah) */}
          <ul
            className={`hidden md:flex items-center gap-8 text-lg text-white/80
            absolute right-6
            transition-all duration-500
            
            ${showMenu 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-4 pointer-events-none"
            }
            `}
          >
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact</a></li>
          </ul>

          {/* Mobile Button */}
          <div
            className="md:hidden text-white cursor-pointer ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-500 md:hidden
            ${isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-white/80">
              <a href="#" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#About" onClick={() => setIsOpen(false)}>About</a>
              <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>

        </nav>
      </header>
    </>
  );
};

export default Navbar;