import React, { useRef } from 'react'
import image1 from '../../assets/aerial-shot-car-passing-through-spiral-road-surrounded-by-trees-countryside.jpg'
import firstIcon from '../../assets/Manual (Navy).svg'
import secondIcon from '../../assets/Bluetooth (Navy).svg'
import thirdIcon from '../../assets/Passengers (Navy).svg'
import fourthIcon from '../../assets/Sleeps (Navy).svg'
import fifthIcon from '../../assets/Pets (Navy).svg'
import { motion } from 'framer-motion'

const Campers = () => {
    const scrollContainerRef = useRef(null);
    
    const camperData = [
        {
            id: 1,
            banner: 'RED',
            productImage: image1,
            cta: 'START YOUR ADVENTURE',
            manual: firstIcon,
            passenger: secondIcon,
            bluetooth: fourthIcon,
            pet: fifthIcon,
            sleep: thirdIcon,
        },
        {
            id: 2,
            banner: 'RED',
            productImage: image1,
            cta: 'START YOUR ADVENTURE',
            manual: firstIcon,
            passenger: secondIcon,
            bluetooth: fourthIcon,
            pet: fifthIcon,
            sleep: thirdIcon,
        },
        {
            id: 3,
            banner: 'RED',
            productImage: image1,
            cta: 'START YOUR ADVENTURE',
            manual: firstIcon,
            passenger: secondIcon,
            bluetooth: fourthIcon,
            pet: fifthIcon,
            sleep: thirdIcon,
        },
        {
            id: 4,
            banner: 'RED',
            productImage: image1,
            cta: 'START YOUR ADVENTURE',
            manual: firstIcon,
            passenger: secondIcon,
            bluetooth: fourthIcon,
            pet: fifthIcon,
            sleep: thirdIcon,
        },
        {
            id: 5,
            banner: 'RED',
            productImage: image1,
            cta: 'START YOUR ADVENTURE',
            manual: firstIcon,
            passenger: secondIcon,
            bluetooth: fourthIcon,
            pet: fifthIcon,
            sleep: thirdIcon,
        },
    ]
    
    const scrollToPrevious = () => {
        if (scrollContainerRef.current) {
            const cardWidth = window.innerWidth * 0.8; // Scroll 80% of viewport width
            scrollContainerRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    };
    
    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const cardWidth = window.innerWidth * 0.8; // Scroll 80% of viewport width
            scrollContainerRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='flex flex-col min-h-screen basic-font w-full overflow-x-hidden'>
            {/* Navigation header with functional arrows */}
            <div className='flex flex-row justify-between items-center text-[#1b415c] h-16 sm:h-20 md:h-24 lg:h-32 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8'>
                <button 
                    onClick={scrollToPrevious}
                    className='text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:text-[#dcc760] transition-colors focus:outline-none'
                    aria-label="Previous camper"
                >
                    ←
                </button>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-center px-2'>MEET OUR CAMPERS</h2>
                <button 
                    onClick={scrollToNext}
                    className='text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:text-[#dcc760] transition-colors focus:outline-none'
                    aria-label="Next camper"
                >
                    →
                </button>
            </div>
            
            {/* Horizontal scrollable container */}
            <div className='relative w-full px-2 sm:px-4 py-4 sm:py-6'>
                <div 
                    ref={scrollContainerRef}
                    className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full gap-4 sm:gap-6 pb-6'
                >
                    {camperData.map((camperDatum, index) => (
                        <motion.div 
                            key={camperDatum.id} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            className="flex-shrink-0 snap-center w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] xl:w-[35vw] max-w-md mx-1 sm:mx-2"
                        >
                            <div className="flex flex-col relative rounded-lg h-full overflow-hidden shadow-lg bg-white">
                                {/* Image with banner overlay */}
                                <div className='relative aspect-[4/3]'>
                                    <img 
                                        src={camperDatum.productImage} 
                                        alt="Camper" 
                                        className='w-full h-full object-cover'
                                    />
                                    
                                    {/* Banner */}
                                    <div className='absolute top-3 left-3 bg-[#dcc760] text-[#1b415c] font-bold py-1 px-4 text-sm sm:text-base rounded-lg'>
                                        {camperDatum.banner}
                                    </div>
                                </div>
                                
                                <div className='flex flex-col justify-center items-center p-4'>
                                    <h2 className='text-[#1b415c] font-bold text-lg sm:text-xl md:text-2xl my-2'>CAMPER {camperDatum.id}</h2>
                                </div>
                                
                                <div className='grid grid-cols-2 gap-3 sm:gap-4 p-4 bg-gray-50'>
                                    {[
                                        { icon: camperDatum.manual, text: 'MANUAL' },
                                        { icon: camperDatum.passenger, text: 'PASSENGERS' },
                                        { icon: camperDatum.bluetooth, text: 'BLUETOOTH' },
                                        { icon: camperDatum.sleep, text: '4+ SLEEPS' },
                                        { icon: camperDatum.pet, text: 'PETS' }
                                    ].map((item, i) => (
                                        <div key={i} className='flex items-center gap-2'>
                                            <img 
                                                src={item.icon} 
                                                alt="" 
                                                className='w-6 h-6 sm:w-8 sm:h-8'
                                            />
                                            <span className='text-xs sm:text-sm'>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className='p-4 mt-auto'>
                                    <button className='w-full bg-[#dcc760] hover:bg-[#93c3c3] text-sm sm:text-base py-3 px-4 rounded-lg transition-colors duration-300 font-medium'>
                                        {camperDatum.cta}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Navigation dots */}
                <div className="flex justify-center mt-4 gap-2">
                    {camperData.map((_, index) => (
                        <button 
                            key={index}
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-[#1b415c] focus:outline-none"
                            aria-label={`Go to camper ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Hide scrollbar styles */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

export default Campers