import React, { useState } from "react";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import iconapon from "../assets/presale-v3/ei_arrow-up.svg";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import cer from "../assets/wallet/cer.svg";
import swpicon from "../assets/wallet/swp.svg";
import Widget from "../compunents/Widget";
import { useApiState } from "../presale-gg/stores/api.store";

/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

const items = [
  {
    icon: oneicon1,
    title: "1. Choose a Payment Method",
    description:
      "<li>Connect your crypto wallet </li><li>Choose between card and 10+ cryptocurrencies</li><li>Enter the amount of BFX you want to buy</li>",
  },
  {
    icon: oneicon2,
    title: "2. Confirm Transaction",
    description:
      "<li>Click “Buy Now” and send the funds to the wallet listed</li><li>Important: Make sure to use a decentralised wallet like Metamask, Phantom, Coinbase or Trust Wallet </li><li>Your BFX will be linked to the same wallet address you used for payment and will show up on your dashboard instantly. </li><li>Connect your wallet using the “Connect Wallet” button in the top right corner to access the dashboard and check your BFX balance.</li>",
  },
  {
    icon: oneicon3,
    title: "3. Start Earning Today",
    description:
      "<p>Earn BFX and USDT rewards from day one! </p><li>Staking rewards are added to your dashboard daily</li><li>USDT (ERC-20) payouts are sent to your wallet every Monday </li>",
  },
  {
    icon: oneicon4,
    title: "4. Claim",
    description:
      "<p>Congratulations! Your tokens will be transferred to your wallet automatically after the presale ends. You don’t need to do anything. <br/><br/> Thank you for being part of the BFX journey!</p>",
  },
];

const MobileWalletSec = () => {
  const apiData = useApiState();
  const [selectedHowToBuyStep, setSelectedHowToBuyStep] = useState(null);

  return (
    <div className="pt-[42px] pb-[35px] bg-[#020B10]" id="how-to-buy">
      <div
        className="space-y-[20px] px-[67px] py-[20px] bg-[#020B10] max-w-[955px] w-[100%] mx-auto border border-[#262626] rounded-[8px] <md:px-6 <sm:px-4"
        id="Wallet"
      >
        <div className="flex justify-center space-x-3 items-center">
          <h3 className="text-[30px] font-[700] tracking-[-1px] text-[white]">
            BFX Presale
          </h3>
          {!apiData.presaleEnded && (
            <div className="w-[58px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
              <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">
                .
              </span>
              Live
            </div>
          )}
        </div>
        <p
          className="text-[#8497A2] font-[400] text-[16px] text-center font-inter"
          style={{
            lineHeight: "160%",
            letterSpacing: "-2%",
          }}
        >
          BFX is the world’s first cryptocurrency backed by a global multi-asset
          trading platform, where holders earn real USDT rewards anytime someone
          trades — even during the presale.
        </p>
        {apiData.presaleEnded && (
          <div
            className="px-[24px] py-[8px] space-y-[5px] border border-[#D3D3D3] <md:max-w-[413.763px] <md:mx-auto"
            style={{
              background: "rgba(237, 237, 237, 0.40)",
            }}
          >
            <h4 className="text-center text-[#444] text-[24px] font-[700]">
              Presale Ended
            </h4>
          </div>
        )}
        <div className="flex justify-between gap-8 <md:flex-col">
          <Widget />
          <div
            style={{
              background: "linear-gradient(211.91deg, rgba(100, 100, 100, 0.5) 0.66%, rgba(20, 20, 20, 0.75) 49.48%, rgba(40, 40, 40, 0.5) 103.45%)",
              backdropFilter: "blur(19.129072189331055px)",
              WebkitBackdropFilter: "blur(19.129072189331055px)", // Cross-browser support
            }}
            className="max-w-[413.763px] space-y-[10px] relative rounded-[20px] px-[10px] pt-[22px] pb-[11px] border border-[#FFFFFF] w-[100%] mx-auto"
          >
            <div className="w-[100%] absolute top-0 left-0 -translate-y-1/2">
              <div className="bg-[#020B10] w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#FFFFFF]">
                <h3 className=" text-[9.875px] text-[white] text-center w-[100px] font-[700]  ">
                  How To Buy
                </h3>
              </div>
            </div>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[15px] px-1 border-b last:border-none  transition-all duration-300`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setSelectedHowToBuyStep(index)}
                  >
                    <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[15px]">
                      <div className=" w-[100%] flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                          <h3
                            className={`text-[14px] capitalize font-[600] ${
                              index === selectedHowToBuyStep
                                ? "text-[#E5AE00]"
                                : "text-[white] "
                            }`}
                          >
                            {item.title}
                          </h3>
                          <div>
                            <img
                              src={
                                index === selectedHowToBuyStep
                                  ? iconcls
                                  : iconapon
                              }
                              alt={
                                index === selectedHowToBuyStep
                                  ? "Collapse"
                                  : "Expand"
                              }
                              className="w-[24px] h-[24px]"
                            />
                          </div>
                        </div>
                        <div
                          className={` transition-all duration-300 desc  ${
                            index === selectedHowToBuyStep
                              ? "max-h-[200px] opacity-100 mt-[8px]  text-[11.688px] font-[400] text-[#D0D0D0] overflow-hidden block"
                              : "max-h-0 hidden opacity-0 text-[11.688px]"
                          }`}
                          style={{
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-[14px]">
              <h4 className="text-[white] text-[14px] font-[600] px-1">
                5. Launch
              </h4>
              <div
                className="max-w-[414px] px-[10px] pt-[14px] pb-[16px] border border-[#3B3B3B] w-[100%] mx-auto "
                // style={{
                //   background: "rgba(237, 237, 237, 0.40)",
                // }}
              >
                <div className="flex flex-col gap-[12px]">
                  <h4 className="text-start text-[#808080] text-[9.875px] leading-[75%] font-[600]">
                    $BFX Launches On Multiple Top-Tier Exchanges
                  </h4>
                  <div className="flex justify-center gap-[8px] flex-wrap">
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                      }}
                    >
                      <img
                        src={swpicon}
                        className="w-[14.813px] h-[14.813px]"
                        alt=""
                      />
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
                      <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="px-[28px] pt-[10px] pb-[10px] border border-[#B0B0B0] w-[100%] mx-auto "
          style={{
            background: "rgba(237, 237, 237, 0.40)",
          }}
        >
          <div className="flex justify-center items-center gap-[10px] flex-wrap">
            <h4 className="text-center text-[#808080] text-[13.1px] leading-[1.2] font-[600]">
              Audited by the Leading Blockchain Security Company
            </h4>
            <div className="w-[113.97px]">
              <img src={cer} className="" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileWalletSec;
