import React from 'react'
import FooterImage from '../../assets/white-van-with-table-chairs-it.jpg'
import BrandLogo from '../../assets/Big Campers Logo.png'
import DriveIcon from '../../assets/Campervan (Colour).svg'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { Send, Facebook, Instagram, Twitter, Copyright } from 'lucide-react'

const Footer = () => {
    const { scrollYProgress } = useScroll();
    
    const vanXPosition = useTransform(
        scrollYProgress, 
        [0, 0.5],
        ['5vw', '80vw']
    );
    
    const logoXPosition = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5],
        ['75vw', '75vw', '105vw']
    );

    const backImage = {
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    
    const footerData = [
        {
            id: 1,
            highlight: 'GREAT',
            text: 'CUSTOMER SERVICE',
            color: 'text-blue-300'
        },
        {
            id: 2,
            highlight: 'SAFETY',
            text: 'IS OUR TOP PRIORITY',
            color: 'text-blue-300'
        },
        {
            id: 3,
            highlight: 'HIGH SPEC',
            text: 'CAMPERS',
            color: 'text-blue-300'
        },
    ]
    
    const navSections = [
        {
            title: "EXPLORE",
            links: [
                "CAMPERS", "FOR SALE", "HIRE", "EXTRAS", 
                "FAQ'S", "NEWS", "EVENTS", "AREAS"
            ]
        },
        {
            title: "CAMPERS",
            links: [
                "BEAU", "BLUE", "CASPER", "LANDY", "MONTY", "VIEW ALL"
            ],
            mobileHidden: true
        },
        {
            title: "EXTRAS",
            links: [
                "BIKE RACK", "CAMPING CHAIRS", "DRIVE-AWAY AWNING", 
                "EUROPEAN TRAVEL", "EXTRA DRIVER", "VIEW ALL"
            ],
            mobileHidden: true
        },
        {
            title: "CONTACT",
            links: [
                "CALL US", "E-MAIL US", "VISIT US", "CONTACT FORM"
            ]
        },
        {
            title: "POLICIES",
            links: [
                "PRIVACY POLICY"
            ]
        }
    ]
    
    return (
        <div style={backImage} className="relative flex flex-col min-h-[150vh] sm:h-[110vh] text-white overflow-x-hidden">
         <div className="absolute flex flex-col bg-tertiary h-full w-full opacity-95 text-white overflow-hidden pt-8">
            {/* Top line with animated van and logo */}
            <div className="relative h-24 w-full max-w-[100vw]">
                <motion.div 
                    className="absolute z-20 right-8"
                    style={{ 
                        x: logoXPosition,
                        bottom: '16px'
                    }}
                >
                    <img 
                        src={BrandLogo} 
                        alt="Big Blue Campers Logo" 
                        className="h-16 w-auto"
                    />
                </motion.div>
                
                <motion.div 
                    className="absolute z-30"
                    style={{ 
                        x: vanXPosition,
                        bottom: '0px'
                    }}
                >
                    <img 
                        src={DriveIcon} 
                        alt="Camper Van Icon" 
                        className="w-46 h-28 max-w-[80vw]" 
                    />
                </motion.div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[95%] max-w-[100vw] h-[0.17rem] bg-white'></div>
            </div>
            
            {/* Features section */}
            <div className="w-[97%] max-w-[100vw] mx-auto py-4 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-5 z-30">
                    {footerData.map((feature) => (
                        <div key={feature.id} className="bg-white text-tertiary py-4 sm:py-8 rounded flex items-center justify-center mx-1 sm:mx-0">
                            <div className="flex items-center gap-2 sm:gap-4 px-2">
                                <div className="bg-tertiary p-1 rounded">
                                    <Check className="text-white w-4 h-4" />
                                </div>
                                <div className="text-center text-xl sm:text-[2.5rem] font-medium basic-font whitespace-nowrap">
                                    <span className={feature.color}>{feature.highlight}</span>
                                    <span> {feature.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[95%] max-w-[100vw] h-[0.17rem] bg-white'></div>
            </div>
           
            {/* Navigation section */}
            <div className="w-full max-w-[100vw] mx-auto py-4 sm:py-8 px-4 sm:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 pl-2 sm:pl-6 gap-4 sm:gap-8">
                    {navSections.map((section, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col gap-4 sm:gap-7 ${section.mobileHidden ? 'hidden sm:block' : ''}`}
                        >
                            <h3 className="font-bold text-xl sm:text-[1.5rem] lg:text-[2rem] basic-font mb-1 sm:mb-2 px-2">{section.title}</h3>
                            <ul className="space-y-2 sm:space-y-4 lg:space-y-10">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="px-2">
                                        <a href="#" className="text-primary text-sm sm:text-base new-font hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[95%] max-w-[100vw] h-[0.17rem] bg-white'></div>
            </div>
            
            {/* Newsletter section */}
            <div className='flex flex-col py-4 sm:py-6 px-4 sm:px-10 w-full sm:w-[97%] max-w-[100vw]'>
                <div className='px-3 flex justify-start items-center'>
                    <h2 className='text-white text-lg sm:text-xl font-bold new-font tracking-wide'>NEWSLETTER</h2>
                </div>
                <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center pl-3 gap-3 sm:gap-0'>
                    <div className='relative w-full sm:w-[70%] lg:w-[20%]'>
                        <div className='w-full flex items-center bg-white py-2 sm:py-3 px-3 sm:px-4'>
                            <input 
                                type="text" 
                                placeholder='EMAIL' 
                                className='flex-grow bg-transparent border-none outline-none text-sm sm:text-base text-paragraph new-font' 
                            />
                            <Send size={18} sm:size={20} className='ml-2 text-secondary hover:text-gray-700 cursor-pointer' />
                        </div>
                    </div>
                    
                    <div className='flex space-x-2 sm:space-x-3'>
                        <a href="#" className='text-tertiary bg-secondary p-1 sm:p-2 hover:text-white hover:bg-[#b5dbdf]'>
                            <Facebook size={20} sm:size={24} />
                        </a>
                        <a href="#" className='text-tertiary bg-secondary p-1 sm:p-2 hover:text-white hover:bg-[#b5dbdf]'>
                            <Instagram size={20} sm:size={24} />
                        </a>
                        <a href="#" className='text-tertiary bg-secondary p-1 sm:p-2 hover:text-white hover:bg-[#b5dbdf]'>
                            <Twitter size={20} sm:size={24} />
                        </a>
                    </div>
                </div>

                {/* Additional content for large screens only */}
                <div className='hidden lg:block mt-8'>
                    <div className='grid grid-cols-3 gap-8'>
                        {/* Customer Testimonials */}
                        <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
                            <h3 className='text-secondary basic-font text-[1.5rem] tracking-wide font-bold mb-4'>HAPPY CAMPERS</h3>
                            <p className='text-sm text-tertiary new-font italic mt-3 mb-2'>"Best rental experience ever! The van was pristine and the team was so helpful."</p>
                            <p className='text-[1.2rem] text-tertiary new-font'>- Sarah J.</p>
                        </div>
                        
                        {/* Special Offers */}
                        <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
                            <h3 className='text-secondary text-[1.5rem] tracking-wide font-bold mb-3 basic-font'>SPECIAL OFFERS</h3>
                            <ul className='space-y-2 text-sm text-tertiary new-font'>
                                <li>• 10% off week-long rentals</li>
                                <li>• Free camping gear in September</li>
                                <li>• Referral bonus program</li>
                            </ul>
                        </div>
                        
                        {/* Quick Links */}
                        <div className='bg-white bg-opacity-10 p-6 rounded-lg'>
                            <h3 className='text-secondary basic-font text-[1.5rem] tracking-wide font-bold mb-3'>QUICK LINKS</h3>
                            <div className='flex flex-wrap gap-3'>
                                <a href="#" className='text-xs new-font bg-tertiary px-3 py-3 rounded-lg'>Booking FAQ</a>
                                <a href="#" className='text-xs new-font bg-tertiary px-3 py-3 rounded-lg'>Road Trip Guide</a>
                                <a href="#" className='text-xs new-font bg-tertiary px-3 py-3 rounded-lg'>Packing List</a>
                                <a href="#" className='text-xs new-font bg-tertiary px-3 py-3 rounded-lg'>Campgrounds</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright section */}
            <div className='flex flex-row bg-primary h-[5vh] mt-auto'>
                <div className='flex justify-center items-center px-4 sm:px-6 gap-1 w-full max-w-[100vw]'>
                    <span className='text-tertiary'>
                        <Copyright size={16} sm:size={18}/>
                    </span>
                    <h2 className='text-tertiary text-sm sm:text-base new-font'>BIG BLUE CAMPERS. <span className='ml-1'>ALL RIGHTS RESERVED</span> </h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer