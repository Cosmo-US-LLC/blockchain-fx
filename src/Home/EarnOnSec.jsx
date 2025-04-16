import React from "react";

// import eranimg from "../assets/EarnOnSec/video.webm";
import eranimg from "../assets/EarnOnSec/earn-sec.png";

import ernvet1 from "../assets/EarnOnSec/Group 134.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

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
    <div className="pt-[20px] pb-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] relative overflow-hidden min-h-[454px] px-[46px] border border-[#B0B0B0] rounded-[24px] space-x-[3rem] flex justify-between  items-center w-[100%] mx-auto bg-[#030F16]">
          <div className="w-[50%] h-[410px] relative">
            <img src={eranimg}  loading="lazy" className="absolute top-[0%] z-[99] left-[0%]" alt="" />
            {/* <video
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
            </video> */}
          </div>
          <div className="max-w-[410px] w-[50%] !mr-auto space-y-[20px] relative z-[99]">
            <h3 
            style={{
              background:"linear-gradient(90deg, #FFF 0%, #FACD42 100%)",
              backgroundClip:"text",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent"
            }}
            className="text-[40px] capitalize font-[700] leading-[128%]  tracking-[-1px] text-start">
            Earn Daily With BFX
            </h3>
            <p className="text-[18px] text-[#fff] font-[400] leading-[161.598%] text-start">
            BFX holders earn daily staking rewards in USDT and BFX, powered by BlockchainFX trading fees. Every time someone trades on the app, holders get rewarded. The more BFX a person holds, the more they earn — up to a maximum of 25,000 USDT per day.
            </p>
            <button
             onClick={handleScroll}
             style={{
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
              className="text-[#000] px-[12px] text-[14px] font-[800] hover:opacity-[0.8] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
            >
              Buy $BFX
            </button>
          </div>
          <div className="absolute top-[0%] left-[-10%]">
            <img src={ernvet2} className=" " alt="" />
          </div>
          <div className="absolute bottom-[0%] right-[0%]">
            <img src={ernvet1} className="" alt="" />
          </div>
        </div>
    </div>
  );
}

export default EarnOnSec;
