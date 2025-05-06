import React, { useState } from 'react'
import BrandLogo from '../../assets/Big Campers Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#1b415c] basic-font z-20 w-full fixed'>
      {/* Desktop Navbar */}
      <div className='flex flex-row justify-between items-center h-35 px-4 md:px-7'>
        <div className='brand-logo py-2'>
          <img src={BrandLogo} alt="Big Campers Logo" className='h-16 md:h-20' />
        </div>

        {/* Hamburger menu for mobile */}
        <button 
          className='md:hidden text-tetiary rounded-lg ml-3.5 bg-[#b5dbdf] focus:outline-none p-2'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop menu items */}
        <div className='hidden md:block'>
          <ul className='flex flex-row list-none text-[#b5dbdf] text-lg lg:text-[1.25rem] gap-3 lg:gap-5'>
            <li className='hover:text-white cursor-pointer'>CAMPERS</li>
            <li className='hover:text-white cursor-pointer'>FOR SALE</li>
            <li className='hover:text-white cursor-pointer'>EXTRAS</li>
            <li className='hover:text-white cursor-pointer'>FAQs</li>
            <li className='hover:text-white cursor-pointer'>NEWS</li>
            <li className='hover:text-white cursor-pointer'>GALLERY</li>
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden md:block'>
          <button className='py-3 rounded-lg bg-[#dcc760] px-4 lg:px-6 hover:bg-[#93c3c3] text-lg lg:text-[1.25rem] transition-colors duration-300'>
            BOOK A CAMPER VAN
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className='md:hidden bg-[#1b415c] w-full absolute z-50 shadow-lg'>
          <ul className='flex flex-col list-none text-[#b5dbdf] text-lg py-4'>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>CAMPERS</li>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>FOR SALE</li>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>EXTRAS</li>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>FAQs</li>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>NEWS</li>
            <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer'>GALLERY</li>
            <li className='px-7 py-4'>
              <button className='w-full py-3 rounded-lg bg-[#dcc760] hover:bg-[#93c3c3] text-center transition-colors duration-300'>
                BOOK A CAMPER VAN
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar