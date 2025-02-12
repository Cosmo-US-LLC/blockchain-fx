import React from "react";

import eranimg from "../assets/EarnOnSec/video.webm";

function EarnOnSec() {
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
    <div className="pt-[20px] pb-[50px] bg-[#FBFBFB]">
      <div className="max-w-[1200px]  min-h-[454px] px-[46px] border border-[#B0B0B0] rounded-[13px] space-x-[3rem] flex justify-between  items-center w-[100%] mx-auto bg-[#fff]">
          <div className="w-[50%] h-[410px] relative">
            {/* <img src={eranimg} className="absolute top-[-30%] left-[0%]" alt="" /> */}
            <video
              width={500}
              height={410}
              className="absolute top-[-5%] h-[410px]"
              muted 
              autoPlay={"autoplay"}
              preload="auto"
              playsInline
              loop
            >
              <source src={eranimg} type="video/webm" />
            </video>
          </div>
          <div className="max-w-[410px] w-[50%] !mr-auto space-y-[20px]">
            <h3 className="text-[30px] capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px] text-start">
            Earn Daily With $BFX
            </h3>
            <p className="text-[14px] text-[#181A20] font-[400] leading-[161.598%] text-start">
            $BFX is the first cryptocurrency to offer USDT staking rewards on every transaction made within a global multi-asset trading platform. Whenever someone trades on BlockchainFX, you earn. The more $BFX you hold, <br /> the more USDT you receive.
            </p>
            <button 
            onClick={handleScroll}
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black !mt-[39px] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Buy $BFX
            </button>
          </div>
        </div>
    </div>
  );
}

export default EarnOnSec;
