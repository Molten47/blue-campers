import React from 'react'
import HeroVideo from '../../assets/Big Campers Video.mp4'
import DriveIcon from '../../assets/Campervan (Colour).svg'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
    const media = {
        backgroundVideo: `${HeroVideo}`,
    }
    
    // Use the scroll position to drive the animation
    const { scrollYProgress } = useScroll();
    
    // Transform scrollYProgress (0-1) to x position (5vw to 105vw)
    const xPosition = useTransform(
        scrollYProgress, 
        [0, 1], // Input range: start to end of page scroll
        ['5vw', '105vw'] // Output range: starting on-screen to off-screen right
    );
    
    return (
        <div className='relative flex flex-col h-[100vh] w-full overflow-hidden basic-font'>
            {/* Video background */}
            <video 
                className='absolute top-0 left-0 w-full h-full object-cover z-1'
                src={media.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            
            
            <div className='block-10 min-h-screen w-full md:w-[50%] lg:w-[32%] bg-[#1b415c] z-10 opacity-90 flex flex-col justify-center items-start p-5 sm:p-8 lg:p-8'>
                <div className='flex flex-col gap-8 w-full'>
                    {/* Increased text size on small screens for better visibility */}
                    <h2 className='basic-font text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white leading-tight font-bold w-full tracking-wide'>
                        LET'S START YOUR ADVENTURE, <span className="text-[#dcc760]">TODAY.</span>
                    </h2>
                    {/* Made button more prominent on small screens */}
                    <div className="flex">
                        <button className='px-6 py-4 rounded-lg bg-[#dcc760] hover:bg-[#93c3c3] text-center font-bold transition-colors duration-300 text-lg sm:text-xl lg:text-2xl tracking-wide'>
                            BOOK YOUR CAMPER
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal line positioned at the bottom */}
            <div className='absolute bottom-12 left-0 w-full h-[3px] bg-amber-50 z-20'></div>
            
            {/* Camper van that moves with scroll - responsive size */}
            <motion.div 
                className='absolute z-30'
                style={{ 
                    x: xPosition,
                    bottom: '18px' // Position the van on the line
                }}
            >
                <img 
                    src={DriveIcon} 
                    alt="Camper Van Icon" 
                    className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52' 
                />
            </motion.div>
        </div>
    )
}

export default Hero