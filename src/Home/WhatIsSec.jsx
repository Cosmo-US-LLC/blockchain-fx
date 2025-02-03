import React from "react";

import whatisimg from "../assets/WhatIsSec/whatisimg.gif";

function WhatIsSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };
  return (
    <div className="pt-[50px] pb-[50px] bgwhat" id="what-is-bfx-coin" style={{ height: '750px' }}>
      <div className="max-w-[866px] relative -space-y-[30px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          What is $BFX?
          </h3>
          <p className="text-[14px] font-[400] max-w-[540px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          $BFX is BlockchainFX's native coin, offering exclusive early access and the chance to be part of the platform’s journey from the ground up as it grows in popularity.
          </p>
        </div>
       <div className="max-w-[664px] w-[100%] mx-auto pt-[0rem] pb-[7rem]">
        <img src={whatisimg} className="!ml-[110px] max-w-[519px] h-[454px] pt-[-15px]" alt="" />
       </div>
          <div className="flex justify-center">
          <button 
          onClick={handleScroll}
          className="text-white bg-[#E5AE00]  px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
          Buy $BFX
            </button>
          </div>
      </div>
    </div>
  );
}

export default WhatIsSec;
