import React, { useState } from "react";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

function MobileGatewaySec() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };


  return (
    <div className="pt-[24px] pb-[37px] bg-[#FFF]">
      <div className=" space-y-[33px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            The Gateway <br /> To Global Markets
          </h3>
          <p className="text-[15px] font-[400] max-w-[881px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          Starting a global multi-asset trading platform takes years and significant capital, but by buying $BFX, you can be a part of the international financial market in just two clicks.
          </p>
        </div>
        <div
          className="p-[20px] space-y-[32px] max-w-[366px] mx-auto rounded-[13px] border border-[#9D9D9D]"
          style={{
            background: "rgba(241, 241, 241, 0.36)",
          }}
        >
          <div className="flex items-start space-x-[3rem] justify-center">
            <div className="flex space-y-[14px] flex-col items-center justify-start">
              <img className="w-[54px] h-[54px]" src={cardicon1} alt="" />
              <h3 className="text-[#181A20] text-center text-[20px] font-[700] leading-[105%] tracking-[-1.219] ">
                New Trading <br /> Platform
              </h3>
            </div>
            <div className="flex space-y-[20px] flex-col items-center justify-start">
              <img className="w-[54px] h-[54px]" src={cardicon2} alt="" />
              <h3 className="text-[#181A20] text-center text-[20px] font-[700] leading-[105%] tracking-[-1.219] ">
                BlockchainFX
              </h3>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div className="rounded-[16px] border border-[#C2C2C2]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon1} alt="" />
                <h4 className="text-[#181A20] font-[700] text-[20px] leading-[105%]">
                  Cost
                </h4>
              </div>
              <div className="flex border-t border-[#C2C2C2]">
                <div className="w-[50%] py-[3px] border-r border-[#C2C2C2]">
                  <div className="flex justify-center space-x-2 items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Up to $5 Million
                    </h4>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <img className="pt-1" src={Iicon} alt="Info Icon" />
                      {showTooltip && (
                        <div className="absolute -left-8 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                          This is the budget needed only to launch the platform
                          in certain jurisdictions, excluding staff and
                          marketing.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-[50%] py-[3px]">
                  <div className="flex justify-center items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Up to you
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#C2C2C2]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon2} alt="" />
                <h4 className="text-[#181A20] font-[700] text-[20px] leading-[105%]">
                  Time{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#C2C2C2]">
                <div className="w-[50%] py-[3px] border-r border-[#C2C2C2]">
                  <div className="flex justify-center space-x-2 items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Up to 3 years
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] py-[3px]">
                  <div className="flex justify-center items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Buy $BFX in 2 clicks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#C2C2C2]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon3} alt="" />
                <h4 className="text-[#181A20] font-[700] text-[20px] leading-[105%]">
                  Team{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#C2C2C2]">
                <div className="w-[50%] py-[3px] border-r border-[#C2C2C2]">
                  <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                    <h4 className="text-[#181A20] font-[500] text-center text-[15px] tracking-[-1px] leading-[120%]">
                      Experienced multilingual team working in shifts, 24/7, 365
                      days a year.
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] flex items-center justify-center py-[3px]">
                  <div className="flex justify-center items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      No Team required
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#C2C2C2]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon4} alt="" />
                <h4 className="text-[#181A20] font-[700] text-[20px] leading-[105%]">
                  Work Scope{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#C2C2C2]">
                <div className="w-[50%] py-[3px] border-r border-[#C2C2C2]">
                  <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                    <h4 className="text-[#181A20] font-[500] text-start text-[15px] tracking-[-1px] leading-[120%]">
                      Capital Requirements, Marketing & Branding, Liquidity
                      Providers, Risk Management Team, Customer Support,
                      Technology Infrastructure, Partnerships, Development,
                      Hiring and Managing Staff, and more.
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] flex items-center justify-center py-[3px]">
                  <div className="flex justify-center items-center">
                    <h4 className="text-[#181A20] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      No Work Required
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileGatewaySec;
