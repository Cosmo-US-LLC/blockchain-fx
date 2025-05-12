import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import iconapon from "../assets/presale-v3/ei_arrow-up.svg";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import swpicon from "../assets/wallet/swp.svg";
import Widget from "../compunents/Widget";
import { useApiState } from "../presale-gg/stores/api.store"; // Adjust if path differs
const MobileWalletSec = () => {
  const { t } = useTranslation();
  const apiData = useApiState();
  const [selectedHowToBuyStep, setSelectedHowToBuyStep] = useState(0);
  const items = [
    {
      title: "1. Choose A Payment Method",
      description:"<li>Connect your crypto wallet</li><li>Choose your preferred payment method</li><li>Enter the amount of $BFX you want to buy </li>",
      icon: oneicon1,
    },
    {
      title: "2. Confirm The Transaction",
      description: "Click on ‘Buy Now’ and confirm the transaction",
      icon: oneicon2,
    },
    {
      title: "3. Start Earning Today",
      description: "<p>Earn BFX and USDT from day one:</p><li>Staking Rewards are added to your dashboard daily</li><li>USDT (ERC-20) payouts are sent to your wallet every Monday</li>",
      icon: oneicon3,
    },
    {
      title: "Claim",
      description: "<p>Congratulations! You can claim your BFX after the presale ends. <br/><br/> Thanks for being part of the BFX journey!</p>",
      icon: oneicon4,
    },
  ];
  return (
    <div className="pt-[42px] pb-[35px] bg-[#000]" id="Wallet">
      <div className="space-y-[20px] px-[24px] py-[20px] bg-[#000] max-w-[955px] w-[90%] mx-auto border border-[#262626] rounded-[8px]">
        <div className="flex items-center justify-center space-x-3">
          <h3 className="text-[30px] font-[700] tracking-[-1px] text-white">
          BFX Presale
          </h3>
          {!apiData.presaleEnded && (
            <div className="w-[58px] text-[14px] font-[600] text-white rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
              <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">
                .
              </span>
              Live
            </div>
          )}
        </div>
        <p
          className="text-white font-[400] text-[16px] text-center font-inter pb-8"
          style={{ lineHeight: "160%", letterSpacing: "-2%" }}
         >
       $BFX is the world’s first cryptocurrency backed by 
       a global exchange and trading app, where holders earn USDT rewards every time someone trades, even during the presale.</p>
        {apiData.presaleEnded && (
          <div
            className="px-[24px] py-[8px] space-y-[5px] border border-[#D3D3D3]"
            style={{ background: "rgba(237, 237, 237, 0.40)" }}
          >
            <h4 className="text-center text-[#444] text-[24px] font-[700]">
              {t("wallet_section.presale_ended")}
            </h4>
          </div>
        )}
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <Widget />
          <div
            className="max-w-[413.763px] space-y-[10px] relative rounded-[20px] px-[10px] pt-[22px] pb-[11px] border border-white w-full mx-auto"
            style={{
              background:
                "linear-gradient(211.91deg, rgba(100, 100, 100, 0.5) 0.66%, rgba(20, 20, 20, 0.75) 49.48%, rgba(40, 40, 40, 0.5) 103.45%)",
              backdropFilter: "blur(19px)",
              WebkitBackdropFilter: "blur(19px)",
            }}
          >
            <div className="absolute top-0 left-0 w-full -translate-y-1/2">
              <div className="bg-[#020B10] h-[30px] flex items-center rounded-[6px] mx-auto w-[102px] border border-white">
                <h3 className="text-[10px] text-white text-center w-full font-[700]">
                  {t("wallet_section.how_to_buy")}
                </h3>
              </div>
            </div>
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="py-[15px] px-1 border-b transition-all duration-300"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setSelectedHowToBuyStep(
                        selectedHowToBuyStep === index ? null : index
                      )
                    }
                  >
                    <div className="flex items-center justify-between w-full space-x-4">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-[14px] capitalize font-[600] ${
                              index === selectedHowToBuyStep ? "" : "text-white"
                            }`}
                            style={
                              index === selectedHowToBuyStep
                                ? {
                                    color:"#E5AE00",
                                  }
                                : {}
                            }
                          >
                            {item.title}
                          </h3>
                          <img
                            src={
                              index === selectedHowToBuyStep
                                ? iconcls
                                : iconapon
                            }
                            alt={
                              index === selectedHowToBuyStep
                                ? "collapse"
                                : "expand"
                            }
                            width={24}
                            height={24}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 ${
                            index === selectedHowToBuyStep
                              ? "max-h-[200px] opacity-100 mt-[8px] text-[12px] font-[400] text-white overflow-hidden block"
                              : "max-h-0 hidden opacity-0"
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
              <h4 className="text-white text-[14px] py-[5px] font-[600] px-1">
              5. Launch
              </h4>
              <div className="max-w-[414px] px-[10px] pt-[14px] pb-[16px] border border-[#3B3B3B] w-full mx-auto">
                <div className="flex flex-col gap-[12px]">
                  <h4 className="text-start text-[#808080] text-[10px] font-[600]">
                  $BFX launches on Multiple Top-Tier Exchanges
                  </h4>
                  <div className="flex justify-center gap-[8px]">
                    <div
                      className="px-[4px] flex max-w-[120px] h-[20px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
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
                      className="px-[4px] flex max-w-[50px] h-[20px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
                      <h4 className="text-[3.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[50px] h-[20px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
                      <h4 className="text-[3.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[50px] h-[20px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
                      <h4 className="text-[3.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                    <div
                      className="px-[4px] flex max-w-[50px] h-[20px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                      style={{
                        background: "rgba(176, 176, 176, 0.17)",
                        filter: "blur(6.5px",
                        opacity: "0.73",
                      }}
                    >
                      <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
                      <h4 className="text-[3.913px] text-[#545454] font-[700] leading-[120.286%]">
                        UNISWAP
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileWalletSec;