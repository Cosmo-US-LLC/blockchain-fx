import React from "react";
import { useTranslation } from "react-i18next";
import ellipse2 from "../assets/BlockchainFXDemo/Ellipse 3 (3).png";
import liveVideo from "../assets/BlockchainFXDemo/Demo.mp4";

function DemoSec() {
  const { t } = useTranslation();

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
  const handleScrollreview = () => {
    setTimeout(() => {
      const element = document.getElementById("reviews");
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
   <div className="bg-[#000] py-[30px]">
    <div className="mx-auto w-[90%] overflow-hidden bg-[#131312e8] rounded-[24px]"
    style={{
      border: "1.5px solid rgb(58, 49, 18)",
     
    }}>
    <div
      id="MobileDemo"
      className=" relative mx-auto "
    >
      <img src={ellipse2} className="absolute w-[100%] top-[-7%]" alt="ellipse2" />
      <div className="w-[100%] mx-auto space-y-[24px] px-3">
        <h3 className="mt-8 text-[36px] font-[600] leading-[114%] leading-[-1px] text-center text-[white]">
        BlockchainFX Demo
        </h3>
        <p className="text-[16px] text-center font-[400] text-[#fff]">
        In just a few seconds, users can trade BTC, Tesla, Gold, Pepe, ETFs, CFDs, and more — all seamlessly on one platform without switching brokers.
        </p>
        <video
          width="640"
          height="660"
          playsInline
          muted
          loop
          autoPlay
          controls
        >
          <source src={liveVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex w-full items-center justify-center space-x-2 mt-8 mb-[30px]">
        <button
          onClick={handleScroll}
          style={{
            background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
          }}
          className="self-center text-[13px] font-[700] border border-[black] rounded-[10px] h-[50px] w-[110px]"
        >
        Buy BFX
        </button>
        <button
          onClick={handleScrollreview}
          className="self-center text-[13px] border border-[#E6B005] text-[#E6B005] font-[700] rounded-[10px] h-[50px] w-[180px]"
        >
        Watch Live Trading Here
        </button>
      </div>
    </div>
    </div>
   </div>
  );
}

export default DemoSec;
