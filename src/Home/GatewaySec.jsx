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
    <div className="py-[50px] bg-[#000]">
      <div className="max-w-[1200px] rounded-[16px] py-[80px] relative overflow-hidden space-y-[40px] w-[100%] mx-auto "
       style={{
            // background: "#030F16",
            background:"#111",
            borderColor: "rgba(230, 175, 3, 0.12)",
          }}
      >
        <div className="space-y-[14px]">
          <h3 className="text-[40px] capitalize font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
          The First Crypto Exchange That Pays Its Holders          </h3>
          <p className="text-[18px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
          Instead of draining users with high trading fees, BlockchainFX cuts them by up to 70%. Half of all fees are shared with $BFX holders as daily staking rewards. We’re building a next-generation trading platform that grows with its community, where users benefit from every step of our success.
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
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                Fees
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon2} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                Asset Variety
                                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon3} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                User Experience
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img src={icon4} alt="" className="w-[39px]" />
                </div>
                <span className="text-[#B5B5B5] text-[20px] font-[700] tracking-[-1px]">
                Community
                </span>
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#0C0C0C",
              border: "1px solid #2B2B2B"
            }}
          >
            <div className="flex justify-start pl-[19px] space-x-4 items-center">
              <img src={cardicon1} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[#CBCBCB] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
              Other Crypto Exchanges
              </h4>
            </div>
            <ul>
              <li className="py-[20px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                <span className="text-[white] text-[16px] font-[500] ">
                High fees with no rewards for users
                </span>
                {/* <div
                  className="relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img className="w-[11.7px]" src={Iicon} alt="Info Icon" />
                  {showTooltip && (
                    <div className="absolute left-0 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#ffff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                      This is the budget needed only to launch the platform in certain jurisdictions, excluding staff and marketing.
                    </div>
                  )}
                </div> */}
              </li>
              <li className="text-[white] text-[16px] font-[500] flex items-center  h-[65px] border-b border-[#C2C2C2]">
              Only crypto-to-crypto trading
              </li>
              <li className="text-white text-[16px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
              Random account restrictions and freezes
              </li>
              <li className="text-[white] text-[16px] font-[500] py-[18px] tracking-[-0.8px]">
              Users are seen purely as profit generators for the exchange and are completely excluded from its growth and success.
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] "
            style={{
              background: "#0C0C0C",
              border: "1px solid #D99A26"
            }}
          >
            <div className="flex justify-start space-x-4 items-center ">
              <img src={cardicon2} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[white] text-[20.862px] font-[700] tacking-[-1px] leading-[100%]">
                BlockchainFX
              </h4>
            </div>
            <ul>
              <li className="text-[white] text-[16px]  h-[61.5px] font-[500] py-[27px] h-[66px] border-b border-[#C2C2C2]">
              Shares profits with the community
              </li>
              <li className="text-[white] text-[16px] h-[65.5px] font-[500] py-[12px] h-[65px] border-b border-[#C2C2C2]">
              Swap instantly between crypto, stocks, forex, commodities, ETFs & more
              </li>
              <li className="text-[white] text-[16px]  font-[500] py-[12px] h-[65px] border-b border-[#C2C2C2]">
              Withdraw your crypto anytime, no lock-ins
              </li>
              <li className="text-[white] text-[16px]  font-[500] py-[27px]">
              The community earns, grows, and builds the platform alongside BlockchainFX.
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
