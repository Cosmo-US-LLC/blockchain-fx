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
            <img src={eranimg} className="absolute top-[0%] z-[99] left-[0%]" alt="" />
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
            className="text-[30px] capitalize font-[700] leading-[128%]  tracking-[-1px] text-start">
            Earn Daily With $BFX
            </h3>
            <p className="text-[14px] text-[#ACC4D1] font-[400] leading-[161.598%] text-start">
            $BFX is the first cryptocurrency to offer USDT staking rewards on every transaction made within a global multi-asset trading platform. Whenever someone trades on BlockchainFX, you earn. The more $BFX you hold, <br /> the more USDT you receive.
            </p>
            <button
             onClick={handleScroll}
              className="text-[#000] bg-[#E5AE00] px-[12px] hover:text-[#E5AE00] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
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
