import React, { useState } from 'react'
import image1 from '../../assets/Happy-senior-retired-couple-in-retro-vintage-style.webp'
import image2 from '../../assets/67c856443d4c948a26b2728a_dsc01528-67c8563398118-p-500.webp'
import image3 from '../../assets/road-trip-uk-campervan-hire.webp'
import image4 from '../../assets/shortForm.webp'

const Newsletter = () => {
    // You can add more cards to this array as needed
    const allNewsCards = [
        {
            id: 1,
            duration: '5 mins read',
            title: 'what to expect when you take a campervan to glantesbory with big blue campers',
            image: image1,
            description: 'If you\'re looking for a unique, flexible and relaible way to enjoy the holiday with your family and loved ones, opting for van for campervan could be a good option to consider',
            date:'April 8, 2025',
            cta: "arrow_forward"
        },
        {
            id: 2,
            duration: '5 mins read',
            title: 'the benefits of choosing a camper van rental for your next family holiday',
            image: image2,
            description: 'Explore glatensbory festival in comfort by hiring a campervan from Big Blue Campers. Our fully equipped campervans offer a relaxing and convinient way to enjoy the festival. Book early and make the most of your experience with optional campervan accessories added for comfort',
            date:'April 8, 2025',
            cta: "arrow_forward"
        },
        {
            id: 3,
            duration: '5 mins read',
            title: 'camper vans for hire: the best way to explore the uk',
            image: image3,
            description: 'Explore glatensbory festival in comfort by hiring a campervan from Big Blue Campers. Our fully equipped campervans offer a relaxing and convinient way to enjoy the festival. Book early and make the most of your experience with optional campervan accessories added for comfort',
            date:'April 8, 2025',
            cta: "arrow_forward"
        },
        {
            id: 4,
            duration: '5 mins read',
            title: 'get festival ready and elevate your experience with a campervan!',
            image: image4,
            description: 'Explore glatensbory festival in comfort by hiring a campervan from Big Blue Campers. Our fully equipped campervans offer a relaxing and convinient way to enjoy the festival. Book early and make the most of your experience with optional campervan accessories added for comfort',
            date:'April 8, 2025',
            cta: "arrow_forward"
        },
        // You can add more cards here
        {
            id: 5,
            duration: '4 mins read',
            title: 'top 10 camping spots in the uk for your campervan adventure',
            image: image1, // Reusing image1 for example
            description: 'Discover the most scenic and well-equipped camping spots across the UK that are perfect for your next campervan trip. From coastal havens to mountain retreats, we\'ve got you covered.',
            date: 'April 12, 2025',
            cta: "arrow_forward"
        },
        {
            id: 6,
            duration: '6 mins read',
            title: 'essential packing list for your first campervan holiday',
            image: image2, // Reusing image2 for example
            description: 'Make sure your campervan holiday goes smoothly with our comprehensive packing guide. From kitchen essentials to outdoor gear, we list everything you need for a comfortable trip.',
            date: 'April 15, 2025',
            cta: "arrow_forward"
        }
    ];

    // Always show only the first 4 cards
    const displayedCards = allNewsCards.slice(0, 4);

    return (
        <div className='flex flex-col w-full bg-primary overflow-x-hidden min-h-screen'>
            <div className='flex items-center justify-center py-4 md:py-6 px-2'>
                <h2 className='text-white basic-font text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-center break-words'>KEEP UP TO DATE WITH US</h2>
            </div>
            <div className="w-full mx-auto px-2 sm:px-4 md:px-6">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
                    {displayedCards.map((card) => (
                        <div key={card.id} className='bg-white h-auto rounded-lg flex flex-col sm:flex-row overflow-hidden'>
                            {/* Image takes full width on mobile, 2/5 on larger screens */}
                            <div className='w-full sm:w-2/5 h-48 sm:h-64 p-3'>
                                <img src={card.image} 
                                    alt={card.title}
                                    className='object-cover w-full h-full rounded-lg' />
                            </div>
                            {/* Content takes full width on mobile, 3/5 on larger screens */}
                            <div className='w-full sm:w-3/5 flex flex-col justify-between p-4'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-secondary basic-font uppercase text-sm md:text-base'>{card.duration}</p>
                                    <h2 className='uppercase font-bold new-font text-base sm:text-lg md:text-xl text-tertiary leading-tight line-clamp-2'>{card.title}</h2>
                                    <p className='text-paragraph mt-1 md:mt-2 text-sm md:text-base line-clamp-3'>{card.description}</p>
                                </div>
                                <div className='flex justify-between items-center mt-3'>
                                    <span className='text-[#26a9e0] basic-font text-xs sm:text-sm'>{card.date}</span>
                                    <button className='material-symbols text-tertiary py-2 px-3 text-sm hover:text-[#b5dbdf] hover:bg-[#1b415c] font-bold rounded-lg bg-secondary'>
                                        {card.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col p-4 gap-4 mt-4 mb-4'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-white new-font text-sm md:text-base text-center'>There's more where that came from! View all our news below.</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-2 px-4 md:py-3 md:px-6 bg-secondary text-tertiary hover:bg-[#1b415c] hover:text-white transition-colors duration-300 rounded-lg new-font text-sm md:text-base'>VIEW ALL OUR NEWS</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter