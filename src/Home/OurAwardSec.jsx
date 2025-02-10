import React from "react";

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).png";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).png";

function OurAwardSec() {
  return (
    <div
      className="pt-[77px] space-y-[35px] bg-[#FAFAFA] pb-[80px] h-[690px]"
      id="win"
    >
      <div className="max-w-[1032.65px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[10px]">
          <h4 className="text-[20px] capitalize font-[400] text-center leading-[30px] text-[#181A20] tracking-[-1px]">
            Multi-Awarded Trading Platform
          </h4>
          <h3 className="text-[30px] font-[700] capitalize text-center leading-[128.889%] text-[#181A20] tracking-[-1px]">
            Our Awards speak for themselves
          </h3>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <div
            className="max-w-[318px] space-y-[10px] px-[50px] max-h-[443px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51113510131836px)",
            }}
          >
            <div className="space-y-[10px] flex items-center justify-center flex-col relative mx-auto">
              <h3 className="text-[10px] text-center text-[#181A20] uppercase font-[700]">
                TheCoinRisE
              </h3>
              <p className="text-[13px] text-center leading-[15px] uppercase text-[#181A20] font-[500]">
                Best Trading <br /> Platform <br /> 2025{" "}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-25px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center pt-12">
              <img className="h-[263px]" src={rwdimg2} alt="" />
            </div>
          </div>
          <div
            className="max-w-[318px] space-y-[10px] px-[50px] max-h-[443px] pt-[35px] rounded-[20px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241)",
              backdropFilter: "blur(49.51113510131836px)",
            }}
          >
            <div className="space-y-[10px] flex items-center justify-center flex-col relative">
              <h3 className="text-[10px] text-center text-[#181A20] uppercase font-[700]">
                AltcoinDaily
              </h3>
              <p className="text-[13px] text-center leading-[15px] uppercase text-[#181A20] font-[500]">
                Fastest Growing <br /> Trading Broker <br /> 2025{" "}
              </p>
              <img
                src={rwdimg1}
                className="absolute top-[-25px] h-auto w-full"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img src={rwdimg3} className="w-full h-[266px] mt-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAwardSec;
