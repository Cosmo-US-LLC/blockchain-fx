import React, { useState } from "react";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
function GatewaySec() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] rounded-[16px] py-[80px] relative overflow-hidden space-y-[40px] w-[100%] mx-auto "
       style={{
            background: "#030F16",
            borderColor: "rgba(230, 175, 3, 0.12)",
          }}
      >
        <div className="space-y-[14px]">
          <h3 className="text-[40px] capitalize font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
            The Gateway to Global Markets
          </h3>
          <p className="text-[18] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[130%] text-[#ACC4D1] tracking-[-0.32px] italic">
          Launching a new trading platform takes a lot of time and resources. On the other hand, <br /> buying $BFX takes seconds and lets you earn every time someone trades.
          </p>
        </div>
        <div className="max-w-[1025px] relative z-[99] mx-auto flex justify-between itees-center ">
          <div className="max-w-[267px] w-[100%]">
            <ul className="max-w-[267px] w-[100%]">
              <li className="h-[83px]"></li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px]">
                <div className="w-[65px]">
                  <img src={icon1} alt="" className="w-[37px]" />
                </div>
                <span className="text-[#B5B5B5] italic text-[20px] font-[700] tracking-[-1px]">
                  Costs
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon2} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] italic text-[20px] font-[700] tracking-[-1px]">
                  Time{" "}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon3} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] italic text-[20px] font-[700] tracking-[-1px]">
                  Team
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon4} alt="" className="w-[39px]" />
                </div>
                <span className="text-[#B5B5B5] italic text-[20px] font-[700] tracking-[-1px]">
                  Work Scope
                </span>
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#030F16",
              border: "1px solid #2B2B2B"
            }}
          >
            <div className="flex justify-start pl-[19px] space-x-4 items-center">
              <img src={cardicon1} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[#CBCBCB] italic text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                New Trading Platform
              </h4>
            </div>
            <ul>
              <li className="py-[20px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                <span className="text-[#939393] italic text-[16px] font-[500] ">
                  Up to $2 Million
                </span>
                <div
                  className="relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img className="w-[11.7px]" src={Iicon} alt="Info Icon" />
                  {showTooltip && (
                    <div className="absolute italic left-0 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#ffff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                      This is thxe budget needed only to launch the platform in
                      certain jurisdictions, excluding staff and marketing.
                    </div>
                  )}
                </div>
              </li>
              <li className="text-[#939393] italic text-[16px] font-[500] flex items-center  h-[65px] border-b border-[#C2C2C2]">
                Up to 3 years
              </li>
              <li className="text-[#939393] italic text-[16px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
                Experienced multilingual team working in shifts, 24/7, 365 days
                a year.
              </li>
              <li className="text-[#939393] italic text-[16px] font-[500] py-[18px] tracking-[-0.8px]">
                Capital Requirements, Marketing & Branding, Liquidity Providers,
                Risk Management Team, Customer Support, Technology
                Infrastructure, Partnerships, Development, Hiring and Managing
                Staff, and more.
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#030F16",
              border: "1px solid #2B2B2B"
            }}
          >
            <div className="flex justify-start space-x-4 items-center">
              <img src={cardicon2} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[#CBCBCB] italic text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                BlockchainFX
              </h4>
            </div>
            <ul>
              <li className="text-[#939393] italic text-[16px]  h-[61.5px] font-[500] py-[27px] h-[66px] border-b border-[#C2C2C2]">
                Up to you
              </li>
              <li className="text-[#939393] italic text-[16px] h-[65.5px] font-[500] py-[27px] h-[65px] border-b border-[#C2C2C2]">
                Buy $BFX in 2 clicks
              </li>
              <li className="text-[#939393] italic text-[16px]  font-[500] py-[23px] h-[65px] border-b border-[#C2C2C2]">
                No Team required
              </li>
              <li className="text-[#939393] italic text-[16px]  font-[500] py-[27px]">
                No Work Required
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[-8%] left-[-5%]">
                            <img src={ernvet2} className=" " alt="" />
                          </div>
                          <div className="absolute bottom-[0%] right-[0%]">
                            <img src={ernvet1} className="" alt="" />
                          </div>
      </div>
    </div>
  );
}

export default GatewaySec;
