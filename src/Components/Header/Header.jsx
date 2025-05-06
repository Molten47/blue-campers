import React, { useState } from 'react'
import BrandLogo from '../../assets/Big Campers Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [campersDropdownOpen, setCampersDropdownOpen] = useState(false);

  const toggleCampersDropdown = () => {
    setCampersDropdownOpen(!campersDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-40 flex flex-col">
      {/* Announcement Bar */}
      <div className='bg-[#b5dbdf] uppercase text-center w-full'>
        {/* Desktop & Tablet version */}
        <div className='hidden sm:flex flex-row justify-between items-center w-full p-2 md:p-3'>
          <h2 className='text-xs sm:text-sm md:text-base lg:text-base'>Call us on 0800 772 3423 to hire a vw campervan for your next adventure</h2>
          <h2 className='text-xs sm:text-sm md:text-base lg:text-base'>We offer 5% discount to nhs & also returning customers, get in touch for discount code</h2>
        </div>
        
        {/* Mobile version */}
        <div className='flex flex-col sm:hidden w-full p-2 space-y-1'>
          <h2 className='text-xs'>Call us on 0800 772 3423 to hire a vw campervan for your next adventure</h2>
          <h2 className='text-xs'>We offer 5% discount to nhs & also returning customers, get in touch for discount code</h2>
        </div>
      </div>

      {/* Navbar */}
      <nav className='bg-[#1b415c] basic-font w-full'>
        {/* Navbar Container */}
        <div className='flex flex-row justify-between items-center px-4 md:px-7'>
          <div className='brand-logo py-2'>
            <img src={BrandLogo} alt="Big Campers Logo" className='h-14 sm:h-16 md:h-18 lg:h-20' />
          </div>

          {/* Hamburger menu for mobile and small tablets */}
          <button 
            className='lg:hidden text-tetiary rounded-lg ml-3.5 bg-[#b5dbdf] focus:outline-none p-2'
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop & Large Tablet menu items */}
          <div className='hidden lg:block'>
            <ul className='flex flex-row list-none text-[#b5dbdf] text-xl xl:text-3xl gap-4 xl:gap-5'>
              <li 
                className='hover:text-[#dcc760] cursor-pointer flex items-center'
                onClick={toggleCampersDropdown}
              >
                <span>CAMPERS</span>
                <span className='material-symbols ml-1'>
                  {campersDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </li>
              <li className='hover:text-[#dcc760] cursor-pointer'>FOR SALE</li>
              <li className='hover:text-[#dcc760] cursor-pointer'>EXTRAS</li>
              <li className='hover:text-[#dcc760] cursor-pointer'>FAQs</li>
              <li className='hover:text-[#dcc760] cursor-pointer'>NEWS</li>
              <li className='hover:text-[#dcc760] cursor-pointer'>GALLERY</li>
            </ul>
            
            {/* Dropdown content */}
            {campersDropdownOpen && (
              <div className="absolute bg-white shadow-md p-4 rounded-md mt-2">
                <ul>
                  <li className="hover:text-[#dcc760] cursor-pointer py-2">Camper 1</li>
                  <li className="hover:text-[#dcc760] cursor-pointer py-2">Camper 2</li>
                  <li className="hover:text-[#dcc760] cursor-pointer py-2">Camper 3</li>
                </ul>
              </div>
            )}
          </div>

          {/* Desktop & Large Tablet CTA Button */}
          <div className='hidden lg:block'>
            <button className='py-2 md:py-3 rounded-lg bg-[#dcc760] px-3 md:px-4 lg:px-6 hover:bg-[#93c3c3] text-base md:text-lg lg:text-xl transition-colors duration-300'>
              BOOK A CAMPER VAN
            </button>
          </div>
        </div>

        {/* Mobile & Tablet menu dropdown */}
        {isMenuOpen && (
          <div className='lg:hidden bg-[#1b415c] w-full shadow-lg'>
            <ul className='flex flex-col list-none text-[#b5dbdf] text-base sm:text-lg py-3 sm:py-4'>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>CAMPERS</li>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>FOR SALE</li>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>EXTRAS</li>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>FAQs</li>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>NEWS</li>
              <li className='px-5 sm:px-7 py-2 sm:py-3 hover:bg-[#2c5372] cursor-pointer'>GALLERY</li>
              <li className='px-5 sm:px-7 py-3 sm:py-4'>
                <button className='w-full py-2 sm:py-3 rounded-lg bg-[#dcc760] hover:bg-[#93c3c3] text-center transition-colors duration-300 text-base sm:text-lg'>
                  BOOK A CAMPER VAN
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header