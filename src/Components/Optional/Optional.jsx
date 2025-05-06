import React from 'react';
import IconImage1 from '../../assets/643e9bee7bb567471e0f3430_Chair (Navy).svg';
import IconImage2 from '../../assets/643e9be0061b44832f7a690c_Bike (Navy).svg';
import IconImage3 from '../../assets/643e9bc5e622e9323403f124_Awning (Navy).svg';
import BackImage from '../../assets/landscape-curvy-road-surrounded-by-hills-covered-grass-daytime.jpg';

const Optional = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const baseInfo = [
    {
      id: 1,
      title: 'BIKE RACK',
      description: 'Our towbar mounted bike racks carry up to 4 adult bikes, securely and safely.',
      icon: IconImage2,
      pay: "£5/NIGHT",
      cta: "arrow_forward"
    },
    {
      id: 2,
      title: 'CAMPING CHAIRS',
      description: 'A pair of comfortable folding camping chairs is a must for any adventure.',
      icon: IconImage1,
      pay: "£3/NIGHT",
      cta: "arrow_forward"
    },
    {
      id: 3,
      title: 'DRIVE-AWAY AWNING',
      description: 'There\'s more where that came from! Add extra covered space to your setup.',
      icon: IconImage3,
      pay: "£10/NIGHT",
      cta: "arrow_forward"
    }
  ];

  return (
    <div 
      style={backgroundStyle} 
      className="relative flex flex-col items-center justify-center min-h-[80vh] py-8 w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      {/* Main Heading */}
      <div className="flex items-center justify-center uppercase mb-4 z-10 basic-font">
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1b415c] font-medium tracking-wide basic-font text-center">
          OPTIONAL<span className="text-amber-500 ml-2">EXTRAS</span>
        </h2>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-screen-xl z-10 mx-auto w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {baseInfo.map((item) => (
            <div 
              key={item.id} 
              className="bg-transparent pt-4 border-2 border-[#e5e7eb] hover:bg-[#b5dbdf] hover:opacity-90 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-auto min-h-[18rem] sm:min-h-[24rem]"
            >
              <div className="p-3 sm:p-6 flex flex-col h-full items-center text-center justify-center">
                {/* Icon and Title */}
                <div className="mb-2 sm:mb-4">
                  <img src={item.icon} alt={item.title} className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 mx-auto" />
                </div>
                <h3 className="text-base sm:text-xl font-semibold new-font text-[#1b415c] text-tertiary mb-2 sm:mb-4 uppercase tracking-wide">{item.title}</h3>
                
                {/* Description */}
                <p className="text-[#b9a5a0] new-font mb-4 sm:mb-8 text-sm sm:text-lg flex-grow">{item.description}</p>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between w-full mt-auto">
                  <div className="font-normal basic-font text-base sm:text-xl text-[#1b415c]">{item.pay}</div>
                  <button className="bg-[#e5e7eb] text-tertiary p-2 flex items-center justify-center rounded-lg hover:bg-[#dcc760] transition-colors duration-300">
                    <span className="material-symbols text-base sm:text-xl">{item.cta}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center mt-6 sm:mt-10 z-10 px-2 sm:px-4">
        <p className="text-[#1b415c] transition-colors duration-300 text-sm sm:text-lg">
          There's more where that came from! View all our optional extras below.
        </p>
      </div>
      <div className="text-center mt-6 sm:mt-14 z-10">
        <a 
          href="#" 
          className="text-tertiary py-2 px-4 sm:py-4 sm:px-6 bg-secondary rounded-lg transition-colors duration-300 text-sm sm:text-lg new-font font-bold hover:bg-[#b5dbdf] inline-block"
        >
          VIEW ALL OUR OPTIONAL EXTRAS
        </a>
      </div>
    </div>
  );
};

export default Optional;