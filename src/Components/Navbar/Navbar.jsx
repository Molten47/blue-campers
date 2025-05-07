import React, { useState } from 'react'
import BrandLogo from '../../assets/Big Campers Logo.png'
import { X } from 'lucide-react' // Make sure to install lucide-react if not already installed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
              <li className='hover:text-white cursor-pointer' onClick={openModal}>CAMPERS</li>
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
              <li className='px-7 py-3 hover:bg-[#2c5372] cursor-pointer' onClick={openModal}>CAMPERS</li>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-4/5 h-1/2 p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="h-full overflow-auto">
              <h2 className="text-2xl font-bold mb-4 text-[#1b415c]">Our Campers</h2>
              <p className="mb-4">Explore our range of premium camper vans for your next adventure.</p>
              
              {/* Add your campers content here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Example camper cards - replace with your actual content */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Model A</h3>
                  <p>Perfect for couples seeking adventure with comfort.</p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Model B</h3>
                  <p>Spacious family camper with all modern amenities.</p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Model C</h3>
                  <p>Off-road capable with solar power and extended range.</p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Model D</h3>
                  <p>Luxury camper with premium interior finishes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar