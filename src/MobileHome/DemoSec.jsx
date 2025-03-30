import React from "react";
import ellipse2 from "../assets/presale-v3/ellipse2.svg";
import demo from "../assets/presale-v3/demo.webp";

function DemoSec() {
  return (
    <div
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
        <img src={demo} className="w-[404px] h-auto" alt="demo" />
      </div>
      <div className="flex w-full items-center justify-center  mb-[30px]">
        <button
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
