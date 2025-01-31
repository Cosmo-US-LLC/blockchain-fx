import React from "react";

import eranimg from "../assets/EarnOnSec/video.mp4";

function EarnOnSec() {
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
              preLoad="auto"
              loop
            >
              <source src={eranimg} type="video/mp4" />
            </video>
          </div>
          <div className="w-[50%] max-w-[521px] space-y-[20px]">
            <h3 className="text-[45px] capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px] text-start">
              Earn on every <br /> trade with $BFX
            </h3>
            <p className="text-[14px] text-[#181A20] font-[400] leading-[161.598%] text-start">
            $BFX is the first cryptocurrency with a daily staking revenue-sharing model, giving you BFX and USDT from every trade made on a global multi-asset trading platform. The more $BFX you hold, the more USDT you earn.
            </p>
            <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black !mt-[39px] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Buy $BFX
            </button>
          </div>
        </div>
    </div>
  );
}

export default EarnOnSec;
