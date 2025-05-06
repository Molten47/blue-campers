import React, { useState } from 'react';
import BigImage from '../../assets/ben-grayland-oOc5A5Oa7tw-unsplash.jpg';

const Fqas = () => {
  // State to track which FAQ is currently open (if any)
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: "WHO CAN DRIVE THE CAMPERS?",
      answer: "Anyone aged 25 or above with a valid driving license held for at least 2 years can drive our campers. International licenses are accepted. All drivers must be named on the rental agreement and insurance policy."
    },
    {
      id: 2,
      question: "WHO IS INCLUDED IN THE STANDARD HIRE?",
      answer: "Our standard hire includes insurance for up to 2 drivers, 24/7 roadside assistance, cooking equipment, bedding, and unlimited mileage. Additional drivers can be added for a small fee."
    },
    {
      id: 3,
      question: "HOW MANY PEOPLE DOES A CAMPER SLEEP?",
      answer: "Our standard campers sleep 2-4 people comfortably, with larger models accommodating up to 6 people. Each camper has different sleeping arrangements, which are detailed in the specific camper descriptions."
    },
  ];

  // Toggle function to open/close FAQs
  const toggleFaq = (id) => {
    if (openFaq === id) {
      setOpenFaq(null); // Close if already open
    } else {
      setOpenFaq(id); // Open if closed
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-tertiary w-full overflow-x-hidden'>
      {/* Main content section - responsive layout */}
      <div className='flex flex-col lg:flex-row w-full lg:h-[70vh] px-4 py-8'>
        {/* Image container - full width on mobile, half width on desktop */}
        <div className='flex justify-center items-center w-full lg:w-2/5 p-4 lg:p-8 mb-8 lg:mb-0'>
          <img 
            src={BigImage} 
            alt="Large background image" 
            className='h-full w-full object-cover object-center rounded-lg'
          />
        </div>
        
        {/* FAQ content - full width on mobile */}
        <div className='flex flex-col pt-4 lg:pt-8 lg:pl-4 w-full lg:w-3/5'>
          <div className='max-w-full'>
            <h2 className='uppercase basic-font text-3xl md:text-4xl lg:text-5xl text-white tracking-wider break-words'>
              our frequently asked<span className='ml-1 text-primary'>questions</span>
            </h2>
          </div>

          <div className='flex flex-col gap-4 items-center pt-8 lg:pt-16 w-full'>
            {faqData.map((faq) => (
              <div key={faq.id} className='w-full max-w-3xl overflow-hidden'>
                {/* FAQ header - clickable area */}
                <div 
                  className='flex flex-row py-4 lg:py-6 rounded-lg px-4 lg:px-7 bg-secondary items-center gap-2 hover:bg-[#b5dbdf] cursor-pointer'
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className='material-symbols text-paragraph transition-transform duration-300' style={{ transform: openFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    keyboard_arrow_down
                  </span>
                  <h2 className='new-font font-semibold text-tertiary text-lg md:text-xl lg:text-2xl truncate'>{faq.question}</h2>
                </div>
                
                {/* FAQ content - animated section */}
                <div 
                  className={`bg-primary overflow-hidden transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'max-h-96 py-4 lg:py-6 px-4 lg:px-7 rounded-b-lg' : 'max-h-0 py-0 px-4 lg:px-7'}`}
                >
                  <div className='text-paragraph text-base lg:text-lg'>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className='flex flex-col items-center justify-center gap-6 lg:gap-14 mt-8 lg:mt-0 px-4 pb-8'>
        <div className='max-w-full'>
          <h2 className='text-white new-font text-sm md:text-base lg:text-lg text-center'>There's more where that came from! View all our FAQ's below.</h2>
        </div>
        <div>
          <button className='px-6 lg:px-10 rounded-lg py-3 lg:py-4 bg-secondary text-tertiary new-font text-sm md:text-base lg:text-lg font-medium hover:bg-[#b5dbdf]'>VIEW ALL OUR FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default Fqas;