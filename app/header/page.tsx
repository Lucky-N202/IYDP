'use client'

import Link from "next/link"
import Image from "next/image"

import logo from "@/public/images/logo.jpg"
import hero from "@/public/images/hero.jpg"
import { useEffect, useState } from "react";


function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };
  
      // Event listener for closing the navigation when clicking outside the menu
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.header-nav') && isNavOpen) {
          setIsNavOpen(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isNavOpen]);
  

  return (
    
         <header className=" bg-gradient-to-t from-white to-blue-950 m-4 shadow-md rounded-lg">
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="IYDP Logo" width={40} height={40} className=" hover:cursor-pointer" />
          <h1 className="text-white text-2xl font-bold hover:cursor-pointer">IYDP</h1>
        </div>

        <button className="text-white md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <ul className={`header-nav md:flex ${isNavOpen ? 'block' : 'hidden'} md:flex-row md:space-x-4`}>
        <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link href="/projects" className="text-white hover:text-gray-300">Gallery</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 shadow-md ">
        <Image src={hero} alt="Hero Image"  className="object-cover w-full h-full rounded-lg" />
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wide">Empowering Youth for a Brighter Future</h2>
        </div>
      </div>
    </header>
    
  )
}

export default Header