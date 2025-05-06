import React, { useState } from 'react'
import image2 from '../../assets/gal1.jpg'
import image1 from '../../assets/gal2.jpg'
import image3 from '../../assets/gal3.jpg'
import image4 from '../../assets/gal4.jpg'
import image5 from '../../assets/gal5.jpg'
import image6 from '../../assets/gal6.jpg'
import image7 from '../../assets/gal7.jpg'
import image8 from '../../assets/gal8.jpg'
import image9 from '../../assets/gal9.jpg'
import image from '../../assets/gal10.jpg'

const Gallery = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [clickedId, setClickedId] = useState(null);

    const galleryDept = [
        {
            id: 1,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image1,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 2,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image2,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 3,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image3,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 4,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image4,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 5,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image5,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 6,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image6,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 7,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image7,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 8,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image8,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 9,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image9,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
        {
            id: 10,
            reading: 'Who says van life can\'t be romantic? 💕✨ Try these campervan date night ideas for your next trip! What\'s your dream date spot?',
            pic: image,
            loveIcon: "favorite",
            loveNumber: '8',
            commentIcon: "quick_phrases",
            commentNumber: '63'
        },
    ]

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    }

    const handleMouseLeave = () => {
        setHoveredId(null);
    }

    const handleClick = (id) => {
        if (clickedId === id) {
            setClickedId(null);
        } else {
            setClickedId(id);
        }
    }

    const isOverlayVisible = (id) => {
        return hoveredId === id || clickedId === id;
    }

    return (
        <div className='min-h-[82vh] w-full relative bg-[#f7fbfc] overflow-x-hidden'>
            <div className='max-w-full mx-auto px-2 sm:px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 p-2 sm:p-4'>
                    {galleryDept.map((dept) => (
                        <div 
                            key={dept.id} 
                            className='h-64 sm:h-80 w-full relative cursor-pointer overflow-hidden rounded-lg shadow-md'
                            onMouseEnter={() => handleMouseEnter(dept.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(dept.id)}
                        >
                            <img 
                                src={dept.pic} 
                                alt="Gallery image" 
                                className='h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105'
                            />
                            
                            {isOverlayVisible(dept.id) && (
                                <>
                                    <div className='absolute inset-0 bg-tertiary opacity-80 z-10'></div>
                                    <div className='absolute inset-0 flex flex-col justify-between p-3 sm:p-4 z-20'>
                                        <div className='flex justify-between items-center mt-1 sm:mt-2'>
                                            <div className='flex items-center space-x-1'>
                                                <span className='material-symbols text-red-400 text-base sm:text-lg'>{dept.loveIcon}</span>
                                                <span className='text-xs sm:text-sm text-white new-font'>{dept.loveNumber}</span>
                                            </div>
                                            
                                            <div className='flex items-center space-x-1'>
                                                <span className='material-symbols text-blue-400 text-base sm:text-lg'>{dept.commentIcon}</span>
                                                <span className='text-xs sm:text-sm new-font text-white'>{dept.commentNumber}</span>
                                            </div>
                                        </div>
                                        <div className='overflow-y-auto max-h-32 sm:max-h-36 flex items-center justify-center'>
                                            <p className='text-xs sm:text-sm mb-2 text-white new-font font-medium break-words'>{dept.reading}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery