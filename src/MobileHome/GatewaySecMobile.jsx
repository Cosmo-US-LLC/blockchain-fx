import React from "react";
import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";
import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function GatewaySecMobile() {
  return (
    <div className="py-[30px] bg-[#000]">
      <div
        className="max-w-[100%] rounded-[16px] py-[40px] relative overflow-hidden space-y-[30px] w-[100%] mx-auto"
        style={{
          background: "#111",
          borderColor: "rgba(230, 175, 3, 0.12)",
        }}
      >
        <div className="space-y-[10px]">
          <h3 className="text-[28px] capitalize font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
            The First Crypto Exchange That Pays Its Holders
          </h3>
          <p className="text-[16px] font-[400] max-w-[300px] mx-auto w-[100%] text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
            Instead of draining users with high trading fees, BlockchainFX cuts them by up to 70%. Half of all fees are shared with $BFX holders as daily staking rewards. We’re building a next-generation trading platform that grows with its community, where users benefit from every step of our success.
          </p>
        </div>

        <div className="space-y-[20px] flex gap-2 justify-center items-center">
          <div className="flex space-y-6 w-[120px] ">
            <ul className="space-y-4">
              <li className="flex items-center gap-1 px-2">
                <div className="w-[40px]">
                  <img src={icon1} alt="" className="w-[30px]" />
                </div>
                <span className="text-[#B5B5B5] text-[12px] font-[700] capitalize tracking-[-0.668px]">
                  Fees
                </span>
              </li>
              <li className="flex items-center px-2 gap-1 border-t border-[#C2C2C2]">
                <div className="w-[40px]">
                  <img src={icon2} alt="" className="w-[30px]" />
                </div>
                <span className="text-[#B5B5B5] text-[12px] font-[700] capitalize tracking-[-0.668px]">
                  Asset Variety
                </span>
              </li>
              <li className="flex items-center px-2 gap-1 border-t border-[#C2C2C2]">
                <div className="w-[40px]">
                  <img src={icon3} alt="" className="w-[30px]" />
                </div>
                <span className="text-[#B5B5B5] text-[12px] font-[700] capitalize tracking-[-0.668px]">
                  User Experience
                </span>
              </li>
              <li className="flex items-center px-2 gap-1 border-t border-[#C2C2C2]">
                <div className="w-[40px]">
                  <img src={icon4} alt="" className="w-[30px]" />
                </div>
                <span className="text-[#B5B5B5] text-[12px] font-[700] capitalize tracking-[-0.668px]">
                  Community
                </span>
              </li>
            </ul>
          </div>

          {/* <div className="flex space-y-6"> */}
            <div
              className="rounded-[4px] py-2 px-2 w-[100px] h-[380px]"
              style={{
                background: "#0C0C0C",
                border: "1px solid #2B2B2B",
              }}
            >
              <div className="flex flex-col gap-2">
                <img src={cardicon1} alt="" className="w-[32px] h-[32px]" />
                <h4 className="text-[#CBCBCB] text-[14px] font-[700] capitalize tracking-[-0.523px] leading-[100%]">
                  Other Crypto Exchanges
                </h4>
              </div>
              <ul className="space-y-2">
                <li className="py-[15px] flex items-center space-x-2  ">
                  <span className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px]">
                    High fees with no rewards for users
                  </span>
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px] flex  ">
                  Only crypto-to-crypto trading
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px] flex  ">
                  Random account restrictions and freezes
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px] py-[12px]">
                  Users are seen purely as profit generators for the exchange and are completely excluded from its growth and success.
                </li>
              </ul>
            </div>

            <div
              className="rounded-[4px] py-2 px-2  w-[100px]  h-[380px]"
              style={{
                background: "#0C0C0C",
                border: "1px solid #2B2B2B",
              }}
            >
              <div className="flex flex-col gap-4 mb-4">
                <img src={cardicon2} alt="" className="w-[32px] h-[32px]" />
                <h4 className="text-[#CBCBCB] text-[14px] font-[700] capitalize tracking-[-0.523px] leading-[100%]">
                  BlockchainFX
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px]">
                  Shares profits with the community
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px]">
                  Swap instantly between crypto, stocks, forex, commodities, ETFs & more
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px]">
                  Withdraw your crypto anytime, no lock-ins
                </li>
                <li className="text-[#939393] text-[10px] font-[500] leading-[12px] tracking-[-0.523px]">
                  The community earns, grows, and builds the platform alongside BlockchainFX.
                </li>
              </ul>
            </div>
          {/* </div> */}
        </div>

        <div className="absolute top-[-5%] left-[-5%]">
          <img src={ernvet2} alt="" />
        </div>
        <div className="absolute bottom-[0%] right-[0%]">
          <img src={ernvet1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GatewaySecMobile;
