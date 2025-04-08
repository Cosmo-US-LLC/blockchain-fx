import React, { useState } from "react";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import ellipse from "../assets/Gateway/Ellipse 3 (2).png";
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
    <div className="pt-[34px] pb-[37px] bg-[#030B10]">
      <div className="relative space-y-[33px] rounded-[16px] py-[30px] px-[20px] overflow-hidden w-[90%] mx-auto "
      style={{
        border:"0.319px solid var(--stroke, rgba(230, 175, 3, 0.12))",
        background:"#030F16"
      }}
      >
          <img
                  src={ellipse}
                  className="absolute top-[0%] left-[0%]  "
                  alt=""
                />
        <div className="space-y-[20px] relative z-[9]">
          <h3 className="text-[36px] font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
            Earn, Don’t Build
          </h3>
          <p className="text-[15px] font-[400] max-w-[881px] mx-auto w-[100%] text-center leading-[175%] text-[#8497A2] tracking-[-0.32px]">
          Launching a new trading platform takes a lot of time and resources. On the other hand, <br /> buying $BFX takes seconds and lets you earn every time someone trades. </p>
        </div>
        <div
          className="px-[15px] py-[20px] space-y-[32px] max-w-[366px] mx-auto rounded-[13px] bg-[#030F16] border border-[#2B2B2B] relative z-[9]"
           
        >
          <div className="flex items-start space-x-[3rem] justify-center">
            <div className="flex space-y-[14px] flex-col items-center justify-start">
              <img className="w-[54px] h-[54px]" src={cardicon1} alt="" />
              <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219] ">
                 
                New Trading <br/> Platform
              </h3>
            </div>
            <div className="flex space-y-[20px] flex-col items-center justify-start">
              <img className="w-[54px] h-[54px]" src={cardicon2} alt="" />
              <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219] ">
                BlockchainFX
              </h3>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div className="rounded-[16px] border border-[#2B2B2B]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon1} alt="" />
                <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                  Cost
                </h4>
              </div>
              <div className="flex border-t border-[#2B2B2B]">
                <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                  <div className="flex items-center justify-center space-x-2">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                    Up to $2 Million
                    </h4>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <img className="pt-1" src={Iicon} alt="Info Icon" />
                      {showTooltip && (
                        <div className="absolute -left-8 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                          This is the budget needed only to launch the platform in certain jurisdictions, excluding staff and marketing.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-[50%] py-[3px]">
                  <div className="flex items-center justify-center">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Up to you
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#2B2B2B]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon2} alt="" />
                <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                  Time{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#2B2B2B]">
                <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                  <div className="flex items-center justify-center space-x-2">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Up to 3 years
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] py-[3px]">
                  <div className="flex items-center justify-center">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      Buy $BFX in 2 clicks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#2B2B2B]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon3} alt="" />
                <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                  Team{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#2B2B2B]">
                <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                  <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                    <h4 className="text-[#686868] font-[500] text-center text-[15px] tracking-[-1px] leading-[120%]">
                      Experienced multilingual team working in shifts, 24/7, 365
                      days a year.
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] flex items-center justify-center py-[3px]">
                  <div className="flex items-center justify-center">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      No Team required
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] border border-[#2B2B2B]">
              <div className="flex justify-center py-[10px] items-center flex-col">
                <img className="w-[23px] h-[20.815px]" src={icon4} alt="" />
                <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                  Work Scope{" "}
                </h4>
              </div>
              <div className="flex border-t border-[#2B2B2B]">
                <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                  <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                    <h4 className="text-[#686868] font-[500] text-start text-[15px] tracking-[-1px] leading-[120%]">
                      Capital Requirements, Marketing & Branding, Liquidity
                      Providers, Risk Management Team, Customer Support,
                      Technology Infrastructure, Partnerships, Development,
                      Hiring and Managing Staff, and more.
                    </h4>
                  </div>
                </div>
                <div className="w-[50%] flex items-center justify-center py-[3px]">
                  <div className="flex items-center justify-center">
                    <h4 className="text-[#686868] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                      No Work Required
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center ">
          <button
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
            onClick={handleScroll}
          >
            Buy $BFX
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default MobileGatewaySec;
