import React, { useState } from "react";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

function GatewaySec() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="pt-[76px] space-y-[35px] pb-[86px]">
      <div className="max-w-[1230px] space-y-[45px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            The Gateway to Global Markets
          </h3>
          <p className="text-[20px] font-[400] max-w-[881px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Launching a new international multi-asset trading platform can take
            up to three years and cost as much as $5 million, depending on the
            jurisdiction. With BFX, however, accessing the world’s largest
            markets has never been easier. In just 2 clicks, you can acquire
            BFX, the native token of BlockchainFX, and participate in the
            international financial market.
          </p>
        </div>
        <div className="flex justify-between itees-center ">
          <div className="max-w-[310px] w-[100%]">
            <ul className="max-w-[310px] w-[100%]">
              <li className="h-[100px]"></li>
              <li className="flex space-x-3 px-[18px] py-[20px]">
                <div className="w-[65px]">
                  <img src={icon1} alt="" />
                </div>
                <span className="text-[#181A20] text-[25px] font-[700] tracking-[-1px]">
                  Costs
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] py-[20px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon2} alt="" />
                </div>
                <span className="text-[#181A20] text-[25px] font-[700] tracking-[-1px]">
                  time{" "}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] py-[20px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon3} alt="" />
                </div>
                <span className="text-[#181A20] text-[25px] font-[700] tracking-[-1px]">
                  Team
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] py-[20px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon4} alt="" />
                </div>
                <span className="text-[#181A20] text-[25px] font-[700] tracking-[-1px]">
                  Work Scope
                </span>
              </li>
            </ul>
          </div>
          <div
            className="max-w-[426px] rounded-[13px] py-[27px] px-[20px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241, 0.36)",
            }}
          >
            <div className="flex justify-start pl-[19px] space-x-4 items-center">
              <img src={cardicon1} alt="" />
              <h4 className="text-[25px] text-[#181A20] font-[700] tacking-[-1px] leading-[100%]">
                New Trading Platform
              </h4>
            </div>
            <ul>
              <li className="py-[27px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                <span className="text-[#181A20] text-[20px] font-[500] ">
                  Up to $5 Million
                </span>
                <div
                  className="relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img className="pt-1" src={Iicon} alt="Info Icon" />
                  {showTooltip && (
                    <div className="absolute left-0 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                      This is the budget needed only to launch the platform in certain jurisdictions, excluding staff and marketing.
                    </div>
                  )}
                </div>
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[27px] border-b border-[#C2C2C2]">
                Up to 3 years
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[8px] border-b border-[#C2C2C2]">
                Experienced multilingual team working in shifts, 24/7, 365 days
                a year.
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[18px]">
                Capital Requirements, Marketing & Branding, Liquidity Providers,
                Risk Management Team, Customer Support, Technology
                Infrastructure, Partnerships, Development, Hiring and Managing
                Staff, and more.
              </li>
            </ul>
          </div>
          <div
            className="max-w-[426px] rounded-[13px] py-[27px] px-[33px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241, 0.36)",
            }}
          >
            <div className="flex justify-start space-x-4 items-center">
              <img src={cardicon2} alt="" />
              <h4 className="text-[25px] text-[#181A20] font-[700] tacking-[-1px] leading-[100%]">
                BlockchainFX
              </h4>
            </div>
            <ul>
              <li className="text-[#181A20] text-[20px] font-[500] py-[27px] border-b border-[#C2C2C2]">
                Up to you
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[27px] border-b border-[#C2C2C2]">
                Buy $BFX in 2 clicks
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[23px] border-b border-[#C2C2C2]">
                No Team required
              </li>
              <li className="text-[#181A20] text-[20px] font-[500] py-[27px]">
                No Work Required
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GatewaySec;
