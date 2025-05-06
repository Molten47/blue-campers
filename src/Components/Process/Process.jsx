import React from 'react'
import ProcessImage from '../../assets/landscape-curvy-road-surrounded-by-hills-covered-grass-daytime.jpg'
import keyImage from '../../assets/644126b319ec773e70ce5129_Asset 78.svg'
import PhoneImage from '../../assets/644126b3eff8351d8448f515_Asset 74.svg'
import AndroidImage from '../../assets/644126b3f2e547e722efec71_Asset 75.svg'
import IphoneImage from '../../assets/644126b3f7c8a9d0def2c44a_Asset 76.svg'
import SmartImage from '../../assets/644126b4d52cf81e0cc67915_Asset 79.svg'
import { motion } from 'framer-motion'

const Process = () => {
    return (
        <div className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden'>
            {/* Background Image with full coverage */}
            <div 
                className='absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0'
                style={{ backgroundImage: `url(${ProcessImage})` }}
            />
            
            {/* Blue Overlay */}
            <div className='absolute inset-0 w-full h-full bg-[#1b415c] opacity-90 z-10'></div>
            
            {/* Content Container */}
            <div className='relative z-20 w-full max-w-[100vw] flex flex-col items-center py-8 md:py-12 lg:py-16 px-4 sm:px-6'>
                <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl basic-font text-white pb-6 md:pb-8 lg:pb-12'>
                    OUR <span className='text-primary'>PROCESS</span>
                </h2>
                
                {/* Mobile and Tablet View - Vertical Timeline */}
                <div className='flex flex-col w-full md:w-[90%] lg:hidden'>
                    {[
                        {
                            step: 1,
                            title: "SeLEct Your VehiclE tyPE",
                            description: "Whether you're traveling solo, with a partner, or with a large group, we have a range of vehicles available to ensure everyone is comfortable. Explore our range of campers for hire!",
                            button: "VIEW OUR CAMPERS",
                            icon: AndroidImage
                        },
                        {
                            step: 2,
                            title: "CHEcK Our AvaiLAbiLIty",
                            description: "Found something that you like? Our online booking system allows you to input your desired dates and it will display the availability. We recommend checking availability in advance.",
                            button: "CHECK AVALABILITY",
                            icon: SmartImage
                        },
                        {
                            step: 3,
                            title: "CoLLect Your Keys",
                            description: "When it comes to collecting the keys for your camper hire from us, we ensure a smooth and hassle-free process. During the key collection, we will also provide you with essential information.",
                            button: "VISIT US",
                            icon: PhoneImage
                        },
                        {
                            step: 4,
                            title: "Enjoy Your AdventuRE",
                            description: "Now that's all from us, it's time to embark on your exciting road trip and travel in style, of course! From scenic drives along coastal roads to camping in picturesque landscapes.",
                            button: "TAG US ON INSTAGRAM!",
                            icon: keyImage
                        },
                        {
                            step: 5,
                            title: "Leave us a GREat Review!",
                            description: "Leaving us a review about your camper hire experience with Big Blue Campers is greatly appreciated. We value your feedback as it helps us improve our services.",
                            buttons: [
                                { text: "GOOGLE REVIEW" },
                                { text: "FACEBOOK REVIEW" }
                            ],
                            icon: IphoneImage
                        }
                    ].map((step, index) => (
                        <div key={index} className='relative pl-12 sm:pl-16 md:pl-20 pb-12 md:pb-16 border-l-4 border-primary ml-6 sm:ml-10 md:ml-16'>
                            <div className='absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-[#1b415c] font-bold text-lg'>
                                {step.step}
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.2, stiffness: 100, damping: 10 }}
                                className='flex flex-col bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 w-full gap-3 sm:gap-4 md:gap-5 rounded-lg'
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-lg sm:text-xl md:text-2xl'>Step {step.step}</h2>
                                <h1 className='text-tetiary font-extrabold text-xl sm:text-2xl md:text-3xl basic-font'>{step.title}</h1>
                                <p className='text-justify text-[#bba6a1] text-sm sm:text-base'>{step.description}</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className={`flex ${step.buttons ? 'flex-col sm:flex-row gap-3 sm:gap-4' : 'justify-left'}`}>
                                    {step.buttons ? (
                                        step.buttons.map((btn, btnIndex) => (
                                            <button key={btnIndex} className='w-full sm:w-auto px-4 sm:px-6 md:px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 rounded-lg transition-colors duration-300'>
                                                {btn.text}
                                            </button>
                                        ))
                                    ) : (
                                        <button className='w-auto px-4 sm:px-6 md:px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 rounded-lg transition-colors duration-300'>
                                            {step.button}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                            <div className='flex justify-center py-4'>
                                <motion.img 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                    src={step.icon} 
                                    alt={`Step ${step.step} Icon`} 
                                    className='h-24 sm:h-32 md:h-40' 
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Desktop View - Original Layout */}
                <div className='hidden lg:flex flex-row justify-center pt-2 w-full max-w-[1800px] mt-8 mx-auto'>
                    {/* Left Column */}
                    <div className='w-[40%] h-auto p-4'>
                        <div className='flex flex-col justify-center items-center gap-14 pt-8'>
                            <motion.img 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                src={SmartImage} 
                                alt="Smart Icon" 
                                className='h-96' 
                            />
                            
                            {/* Step 2 */}
                            <motion.div 
                                className='flex flex-col bg-white py-14 px-8 w-[80%] gap-6 rounded-lg'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-2xl'>Step 2</h2>
                                <h1 className='text-tertiary font-extrabold text-4xl basic-font'>CHEcK Our AvaiLAbiLIty</h1>
                                <p className='text-justify text-[#bba6a1]'>Found something that you like? Our online booking system allows you to input your desired dates and it will display the availability. We recommend checking availability in advance, especially during peak travel seasons, to secure your dates.</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className='flex justify-left'>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        CHECK AVALABILITY
                                    </button>
                                </div>
                            </motion.div>
                            
                            <motion.img 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                src={keyImage} 
                                alt="Key Icon" 
                                className='h-96' 
                            />
                            
                            {/* Step 4 */}
                            <motion.div 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                className='flex flex-col bg-white py-14 px-8 w-[80%] gap-6 rounded-lg'
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-2xl'>Step 4</h2>
                                <h1 className='text-tertiary font-extrabold text-4xl basic-font'>Enjoy Your AdventuRE</h1>
                                <p className='text-justify text-[#bba6a1]'>Now that's all from us, it's time to embark on your exciting road trip and travel in style, of course! From scenic drives along coastal roads to camping in picturesque landscapes, the freedom and flexibility of traveling with a camper is unparalleled.</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className='flex justify-left'>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        TAG US ON INSTAGRAM!
                                    </button>
                                </div>
                            </motion.div>
                            
                            <motion.img 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                src={IphoneImage} 
                                alt="iPhone Icon" 
                                className='h-96' 
                            />
                        </div>
                    </div>
                    
                    {/* Center Timeline */}
                    <div className='w-[4%] h-auto flex justify-center relative'>
                        <div className='min-h-[270vh] w-[0.2rem] bg-primary'></div>
                        
                        {/* Numbered Circles */}
                        <div className='absolute flex flex-col items-center justify-between h-[270vh]'>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div 
                                    key={num}
                                    className={`absolute h-3 w-3 p-8 text-[2rem] rounded-full bg-primary flex items-center justify-center text-[#1b415c] font-bold text-lg border-none top-[${(num-1)*20 + 10}%]`}
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className='w-[40%] h-auto p-4'>
                        <div className='flex flex-col gap-14 pt-8 justify-center items-center'>
                            {/* Step 1 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                className='flex flex-col bg-white py-14 px-8 w-[80%] gap-6 rounded-lg'
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-2xl'>Step 1</h2>
                                <h1 className='text-tertiary font-extrabold text-4xl basic-font'>SeLEct Your VehiclE tyPE</h1>
                                <p className='text-justify text-[#bba6a1]'>Whether you're traveling solo, with a partner, or with a large group, we have a range of vehicles available to ensure everyone is comfortable. Explore our range of campers for hire to determine which one takes your fancy and can accommodate your road trip adventure!</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className='flex justify-left'>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        VIEW OUR CAMPERS
                                    </button>
                                </div>
                            </motion.div>
                            
                            <motion.img 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                src={AndroidImage} 
                                alt="Android Icon" 
                                className='h-96' 
                            />
                            
                            {/* Step 3 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                className='flex flex-col bg-white py-14 px-8 w-[80%] gap-6 rounded-lg'
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-2xl'>Step 3</h2>
                                <h1 className='text-tertiary font-extrabold text-4xl basic-font'>CoLLect Your Keys</h1>
                                <p className='text-justify text-[#bba6a1]'>When it comes to collecting the keys for your camper hire from us, we ensure a smooth and hassle-free process. During the key collection, we will also provide you with essential information about the camper, including its features, operating instructions, and safety guidelines. After this, it's time to start the engine and head off!</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className='flex justify-left'>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        VISIT US
                                    </button>
                                </div>
                            </motion.div>
                            
                            <motion.img 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                src={PhoneImage} 
                                alt="Phone Icon" 
                                className='h-96' 
                            />
                            
                            {/* Step 5 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type:'spring', delay: 0.3, stiffness: 100, damping: 10 }}
                                className='flex flex-col bg-white py-14 px-8 w-[80%] gap-6 rounded-lg'
                            >
                                <h2 className='text-[#7cb4c9] basic-font text-2xl'>Step 5</h2>
                                <h1 className='text-tertiary font-extrabold text-4xl basic-font'>Leave us a GREat Review!</h1>
                                <p className='text-justify text-[#bba6a1]'>Leaving us a review about your camper hire experience with Big Blue Campers is greatly appreciated. We value your feedback as it helps us understand how we can improve our services and continue providing exceptional experiences to our customers.
                                <br /> <br />
                                Thank you for taking the time to provide your feedback, and we look forward to hearing about your adventures and how our luxury campers enhanced your journey!</p>
                                <div className='w-full h-[0.2rem] bg-primary'></div>
                                <div className='flex flex-col gap-4'>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        LEAVE US A GOOGLE REVIEW
                                    </button>
                                    <button className='w-auto px-8 bg-[#dcc760] hover:bg-[#93c3c3] text-lg lg:text-xl py-4 rounded-lg transition-colors duration-300'>
                                        LEAVE US A FACEBOOK REVIEW
                                    </button> 
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process