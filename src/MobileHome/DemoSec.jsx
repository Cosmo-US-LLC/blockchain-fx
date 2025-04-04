import React from "react";
import ellipse2 from "../assets/presale-v3/ellipse2.svg";
import demo from "../assets/presale-v3/demo.webp";
import liveVideo from "../assets/BlockchainFXDemo/live.mp4";

function DemoSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  return (
    <div
      id="MobileDemo"
      style={{
        border: "1.5px solid",
        borderRadius: "24px",
        borderImageSource:
          "linear-gradient(95.63deg, rgba(230, 175, 3, 0.3) 1.76%, rgba(29, 111, 66, 0) 99.42%)",
        borderImageSlice: 1,
      }}
      className="mt-[24px] relative mx-auto max-w-[404px]"
    >
      <img src={ellipse2} className="absolute" alt="ellipse2" />
      <div className="w-[90%] mx-auto space-y-[24px]">
        <h3 className="mt-8 text-[36px] font-[600] leading-[114%] leading-[-1px] text-center text-[white]">
          BlockchainFX Demo
        </h3>
        <p className="text-[16px] text-center font-[400] text-[#8497A2]">
          Within less than 2 minutes, we’re trading BTC, Tesla, Gold, Pepe,
          ETFs, CFDs, and more — all streamlined on one platform with no need to
          switch brokers.
        </p>
        {/* <img src={demo} className="w-[404px] h-auto" alt="demo" /> */}
        <video width="640" height="660" playsInline muted loop controls>
          <source src={liveVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex w-full items-center justify-center mt-8  mb-[30px]">
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
    </div>
  );
}

export default DemoSec;
