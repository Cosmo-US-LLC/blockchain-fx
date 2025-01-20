import React from "react";

import cardicon1 from "../assets/WallStreet/wallicn (1).svg";
import cardicon2 from "../assets/WallStreet/wallicn (2).svg";
import cardicon3 from "../assets/WallStreet/wallicn (3).svg";
import cardicon4 from "../assets/WallStreet/wallicn (4).svg";
import cardicon5 from "../assets/WallStreet/wallicn (5).svg";
import cardicon6 from "../assets/WallStreet/wallicn (6).svg";

function WallStreetSec() {
 
  return (
    <div className="pt-[77px] space-y-[35px] pb-[85px] bg-[#FAFAFA]">
      <div className="max-w-[866px] space-y-[60px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Wall Street at your finger tips
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          Elevate your trading experience with a cutting-edge platform <br /> that lets you access global markets in seconds.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-y-[4rem]  " 
        >
          <div className="w-[228px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon1} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">6 <br />Markets</h4>
          </div>
          <div className="w-[185px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">800 <br />Instruments</h4>
          </div>
          <div className="w-[265px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">All global  <br />markets in one place</h4>
          </div>
          <div className="w-[228px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Ultra-Fast <br />Trading Execution</h4>
          </div>
          <div className="w-[185px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Deep <br />Liquidity</h4>
          </div>
          <div className="w-[265px] flex flex-col space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Fast <br /> Withdrawals</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WallStreetSec;
