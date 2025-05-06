import React from 'react'
import FreshImage from '../../assets/landscape-curvy-road-surrounded-by-hills-covered-grass-daytime.jpg'
import MagImage from '../../assets/643d5d1e288c709f798ea7b8_Stamp (White).svg'

const Touch = () => {
  const rightImage = {
    backgroundImage: `url(${FreshImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className='flex flex-col lg:flex-row min-h-[50vh] bg-[#82b8cb]'>
      {/* Left content section */}
      <div className='flex flex-col w-full lg:w-[70%] justify-center items-center gap-4 py-10 px-4'>
        <span className='px-4 sm:px-6 py-3 sm:py-4 new-font bg-primary rounded-lg text-sm sm:text-base'>GET IN TOUCH</span>
        
        <div className='w-full max-w-xl lg:max-w-3xl px-2'>
          <h2 className='basic-font text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] text-white text-center leading-tight font-bold tracking-wide'>
            LET'S START YOUR ADVENTURE <span className="text-[#dcc760]">TODAY.</span>
          </h2>
        </div>
       
        <div className='flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4'>
          <span className='px-4 sm:px-6 py-3 sm:py-4 bg-secondary rounded-lg hover:text-[#ffffff] hover:bg-[#1b415c] new-font text-center'>HIRE A CAMPERVAN</span>
          <span className='px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white border-2 border-amber-50 rounded-lg hover:border-[#1b415c] hover:text-[#1b415c] new-font text-center'>GET IN TOUCH</span>
        </div>
      </div>

      {/* Right image section - hidden on small screens */}
      <div className='hidden sm:flex flex-col w-full sm:w-[50%] lg:w-[38%] h-64 sm:h-auto'>
        <div style={rightImage} className="w-full h-full justify-center items-center flex -opacity-10">
          <img src={MagImage} alt="Stamp" className="h-32 sm:h-40 md:h-48 lg:h-80" />
        </div>
      </div>
    </div>
  )
}

export default Touch