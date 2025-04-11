import React, { useEffect, useRef } from "react";

import bottom_mobiles from "../assets/presale-v3/bottom_mobiles.webp";
import daily_stars_bg from "../assets/presale-v3/daily_stars_bg.webp";

function MobileEarnOnSec() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsInline", "");
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
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[24px] pb-[24px] ">
      <div
        style={{
          border: "1px solid",
          // borderRadius: "24px",
          borderImageSource:
            "linear-gradient(95.63deg, rgba(230, 175, 3, 0.3) 1.76%, rgba(29, 111, 66, 0) 99.42%)",
          borderImageSlice: 1,
        }}
        className="relative overflow-hidden pt-[14px] pb-[31px] px-[15px] space-y-[20px] w-[90%] mx-auto bg-[#030F16]"
      >
        <img
          src={daily_stars_bg}
          className="absolute bottom-0"
          alt="daily_stars_bg"
        />
        <div className="w-[100%] max-w-[521px] space-y-[20px]">
          <h3 className="text-[36px] capitalize font-[600] leading-[114%] text-[white] tracking-[-1px] text-center">
            Earn Daily With BFX
          </h3>
          <p className="text-[16px] max-w-[330px] mx-auto text-[#8497A2] font-[400] leading-[153.333%] tracking-[-0.32px] text-center">
            BFX holders earn daily staking rewards in BFX and USDT, powered by
            BlockchainFX trading fees. Every time someone trades on the app,
            holders get rewarded. The more BFX a person holds, the more they
            earn — up to a maximum of 25,000 USDT per day.{" "}
          </p>
        </div>

        <div className="flex w-full items-center justify-center  mb-[30px]">
          <button
            onClick={handleScroll}
            style={{
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className="self-center text-[16px] font-[700] border border-[black] rounded-[10px] h-[50px] w-[168px]"
          >
            Buy BFX
          </button>
        </div>
        <img
          src={bottom_mobiles}
          className="w-[353px] h-[334px]"
          alt="bottom_mobiles"
        />
      </div>
    </div>
  );
}

export default MobileEarnOnSec;
