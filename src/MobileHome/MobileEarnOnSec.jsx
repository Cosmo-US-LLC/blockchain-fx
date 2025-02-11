import React, { useEffect, useRef } from "react";

import eranvideo from "../assets/EarnOnSec/video.webm";

function MobileEarnOnSec() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play().catch((error) => {
        console.log("Autoplay failed. Error:", error);
      });
    }
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };


  return (
    <div className="pt-[24px] pb-[24px] bg-[#FBFBFB]">
      <div className="pt-[14px] pb-[31px] px-[15px] border border-[#B0B0B0] rounded-[13px] space-y-[20px]  w-[90%] mx-auto bg-[#fff]">
        <div className="w-[100%] max-w-[521px] space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[700] leading-[114%] text-[#181A20] tracking-[-1px] text-center">
            Earn Daily With $BFX
          </h3>
          <p className="text-[15px] max-w-[330px] mx-auto text-[#181A20] font-[400] leading-[153.333%] tracking-[-0.32px] text-center">
          $BFX is the first cryptocurrency to offer USDT staking rewards on every transaction made within a global multi-asset trading platform. Whenever someone trades on BlockchainFX, you earn. The more $BFX you hold,  the more USDT you receive.
          </p>
        </div>
        <div className="w-[100%] !mt-[-4px] flex justify-center">
          <video
            width={350}
            height={300}
            className=""
            muted
            autoPlay
            preload="auto"
            playsInline
            loop
          >
            <source src={eranvideo} type="video/webm" />
          </video>
          {/* <iframe
            width="300"
            height="300"
            src={eranvideo}
            title="Embedded Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
            className=""
          ></iframe> */}
        </div>
        <div className="flex justify-center">
          <button
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileEarnOnSec;
