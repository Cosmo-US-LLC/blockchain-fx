import React, { useState, useEffect } from 'react';


const LaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  setIsOpen(true);
}, []);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative overflow-hidden 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-6 pb-5 w-full max-w-[880px] 2xl:min-h-[auto] xl:min-h-[auto] lg:min-h-[auto] md:min-h-[auto] sm:min-h-[650px] border-2  border-[#E5AE00] min-h-[650px]  rounded-2xl overflow-hidden ">
        <img src={"assets/blockchainfx/Popup/bg-image.webp"} className='absolute object-cover w-full h-full 2xl:block xl:block lg:block md:block sm:hidden hidden' alt="" />
         <img src={"assets/blockchainfx/Popup/Pop-up-Design.webp"} className='absolute object-cover w-full h-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block' alt="" />
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M12.75 0.75L0.75 12.75M12.75 12.75L0.75 0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>

        <div className="p-8 relative z-[9] md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 ]">
            <h2 className="text-white font-[Onest] 2xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] text-[24px] font-[900] leading-[105%] mb-2 uppercase uppercase">
              Get Ready For <br />
              <span className="text-[#E5AE00]">The BFX Launch!</span>
            </h2>
            <p className="text-[#fff] font-[Onest] 2xl:font-[700] xl:font-[700] lg:font-[700] md:font-[700] sm:font-[700] font-[600] 2xl:text-[16px] xl:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] 2xl:mb-6 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-4 mb-4">Trading App goes Live on January 31st.</p>
            
            <div className="space-y-3 font-[400] text-[#fff] 2xl:text-[16px] xl:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] leading-relaxed font-[Inter] max-w-[360px]">
              <p>After months of preparation, BFX opens its trading super app to the public.</p>
              <p>Users will be able to trade live, deposit and withdraw using all major cryptocurrencies.</p>
              <p>With access to more than 500 tradable assets, this marks the beginning of something big.</p>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default LaunchPopup;