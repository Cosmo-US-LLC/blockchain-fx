import React from "react";
import { useTranslation } from "react-i18next";

import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn5.webp";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import ellipse2 from "../assets/EarnOnSec/Ellipse 4.png";

import graphyp from "../assets/HyperGrowth/Graph.png";
import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import arw from "../assets/PremiumSec/preawr (1).svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

function MobExclusiveSec() {
  const { t } = useTranslation();

  const cardItems = [
    {
      title: "Lowest Token Price <br /> Before Launch",
      img: excixn1,
      description:<>Buying during the pre-sale allows you to secure <br/> a significant lower price compared <br/> to the BFX launch price.</>
    },
    {
      img: excixn2,
      title: "Limited Edition <br/> BFX Visa Cards",
      description:<>Get a metal or 18 karat gold BFX Visa credit card with unlimited spending and top-ups, <br/> usable worldwide.</>
    },
    {
      title: "Exclusive Bonus <br/> Trading Credits ",
      img: excixn3,
       description:<>Get up to $25,000 in free trading credits to kickstart your journey on BlockchainFX with <br/> no conditions attached.</>
    },
    {
      title: "Daily USDT <br/> Staking Rewards",
      img: excixn4,
      description:<>Start earning USDT and BFX rewards today by joining the BFX presale. The earlier you buy, <br/> the more you can earn over time.</>
    },
  ];

  return (
     <div 
            className="relative space-y-[33px]  rounded-[16px] py-[30px] px-[20px] overflow-hidden w-[90%] mx-auto"
            style={{
              border:"0.319px solid var(--stroke, rgba(230, 175, 3, 0.12))",
              background:"#020B10"
            }}
          >
            <img
              src={ellipse || "/placeholder.svg"}
              className="absolute top-[0%] left-[0%]"
              alt=""
            />
            <img
              src={ellipse2 || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute bottom-[0%] right-[0%]"
              alt=""
            />
            <div className="space-y-[20px] relative z-[9]">
              <h3 className="text-[30px] font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
               The First Crypto Exchange <br /> That Pays Its Holders
              </h3>
              <p className="text-[15px] font-[400] max-w-[881px] mx-auto w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
               Instead of draining users with high trading fees, BlockchainFX cuts them by up to 70%. Half of all fees are shared with $BFX holders as daily staking rewards. We’re building a next-generation trading platform that grows with its community, where users benefit from every step of our success.
              </p>
            </div>
            <div
              className="px-[15px] py-[20px] space-y-[32px] max-w-[366px] mx-auto rounded-[13px] bg-[#030F16] border border-[#2B2B2B] relative z-[9]"
            >
              <div className="flex items-start space-x-[3rem] justify-center">
                <div className="flex space-y-[14px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon1 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                   Other Crypto Exchanges
                  </h3>
                </div>
                <div className="flex space-y-[20px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon2 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                    BlockchainFX
                  </h3>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon1 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      Fees
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          High fees with no rewards for users 
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          Shares profits with the community 
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon2 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      Variety Asset 
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          Only crypto-to-crypto trading
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          Swap instantly between crypto, stocks, forex, commodities, ETFs & more
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon3 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                     User Experience
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                        <h4 className="text-[#fff] font-[500] text-center text-[13px] tracking-[-1px] leading-[120%]">
                         Random account restrictions and freezes
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                         Withdraw your crypto anytime, no lock-ins
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon4 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[14px] leading-[105%]">
                      Community
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                         Users are seen purely as profit generators for the exchange and are completely excluded from its growth and success.
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[13px] text-center tracking-[-1px] leading-[120%]">
                          The community earns, grows, and builds the platform alongside BlockchainFX.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default MobExclusiveSec;
