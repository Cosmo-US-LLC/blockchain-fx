import React, { useState } from "react";
// import info from "../assets/wallet/i.svg";
// import bfxicn from "../assets/wallet/bfx.webp";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import swpicon from "../assets/wallet/swp.svg";
// import cer from "../assets/wallet/cer.svg";
import { useApiState } from "../presale-gg/stores/api.store";
import Widget from "../compunents/Widget";
import { useTranslation } from "react-i18next";

/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

const items = [
  {
    icon: oneicon1,
    title: "step_1_title",
    description: "step_1_description",
  },
  {
    icon: oneicon2,
    title: "step_2_title",
    description: "step_2_description",
  },
  {
    icon: oneicon3,
    title: "step_3_title",
    description: "step_3_description",
  },
  {
    icon: oneicon4,
    title: "step_4_title",
    description: "step_4_description",
  },
];

const WalletSec = () => {
  const { t } = useTranslation();
  const apiData = useApiState();
  const [selectedHowToBuyStep, setSelectedHowToBuyStep] = useState(0);

  return (
    <div className="pt-[42px] pb-[25px] bg-[#000] min-h-[700px]" id="how-to-buy">
      <div
        className="space-y-[30px] px-[40px] py-[26px] max-w-[1200px] w-[100%] mx-auto border border-[#575757] rounded-[41px] <md:px-6 <sm:px-4"
        id="Wallet"
      >
        <div className="pb-[20px]">
          <div className="flex justify-center space-x-3 items-center">
            <h3 className="text-[40px] font-[700] text-[#fff] tracking-[-1px]">
            BFX Presale
            </h3>
            {/* {!apiData.presaleEnded && (
            <div className="w-[58px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] h-[22px] flex justify-center items-start">
              <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">
                .
              </span>
              Live
            </div>
          )} */}
            <div
              className="w-[58px] h-[22px] flex justify-center items-start rounded-[7px] text-[14px] font-[600] text-[#fff]"
              style={{
                backgroundColor: !apiData.presaleEnded
                  ? "#E9C03D"
                  : "transparent",
              }}
            >
              {!apiData.presaleEnded ? (
                <>
                  <span className="text-[38px] leading-[9%] !-mt-[1px] pr-[2px] animate-blink">
                    .
                  </span>
                  Live
                </>
              ) : null}
            </div>
          </div>
          <p className="text-[18px] font-[400] max-w-[730px] mx-auto w-[100%] text-center leading-[21px] text-[#fff] tracking-[-0.32px]"  >
          $BFX is the world’s first cryptocurrency backed by a global exchange and trading app, where holders earn USDT rewards every time someone trades, even during the presale.
          </p>
        </div>

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
        <div className="flex justify-center gap-4 <md:flex-col">
          <Widget />
          <div
            style={{
              background:
                "linear-gradient(212deg, rgb(207 207 207 / 25%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 22%) 103.45%)",
              borderRadius: "26.227px",
              border: " 0.663px solid #FFF",
              backdropFilter: "blur(13.031462669372559px)",
            }}
            className="max-w-[450px] space-y-[px] relative rounded-[6.419px] px-[25px] pt-[8px] pb-[11px] border border-[#B0B0B0] w-[100%] mx-auto "
          >
            <div className="w-[100%] absolute top-0 left-0 -translate-y-1/2">
              <div className=" w-[100%] h-[30.612px] flex items-center rounded-[6px] mx-auto w-[102.877px] border border-[#454545] bg-[#000]">
                <h3 className="text-[9.875px] text-[#fff] text-center w-[100px] font-[700]  ">
                  {t("wallet_section.how_to_buy")}
                </h3>
              </div>
            </div>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-[40px] px-1 border-b border-[#545454] last:border-none  transition-all duration-300`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setSelectedHowToBuyStep(
                        selectedHowToBuyStep === index ? null : index
                      )
                    }
                  >
                    <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[40px]">
                      <div className=" w-[100%] flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                          <h3
                            className={`text-[14px] capitalize font-[600] ${
                              index === selectedHowToBuyStep
                                ? ""
                                : "text-[#fff]"
                            }`}
                            style={
                              index === selectedHowToBuyStep
                                ? {
                                    background:
                                      "linear-gradient(92deg, #E5AE01 24.64%, #FFE182 97%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                  }
                                : {}
                            }
                          >
                            {t(`wallet_section.step_${index + 1}_title`)}
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
                              ? "max-h-[200px] opacity-100 mt-[8px]  text-[11.688px] font-[400] text-[#fff] overflow-hidden block"
                              : "max-h-0 hidden opacity-0 text-[11.688px]"
                          }`}
                          style={{
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
                          }}
                          dangerouslySetInnerHTML={{ __html: t(`wallet_section.step_${index + 1}_description`) }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-[50px] border-t border-[#545454] pt-10 !mt-0">
              <h4 className="text-[#fff] text-[14px] font-[600] px-1">
                {t("wallet_section.launch_title")}
              </h4>
              <div className="max-w-[414px] px-[6px] pt-[14px] pb-[16px] border border-[#545454] w-[100%] mx-auto ">
                <div className="flex flex-col gap-[10px]">
                  <h4 className="text-start text-[#808080] text-[9.875px] leading-[75%] font-[600]">
                  {t("wallet_section.exchanges")} 
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
                      <h4 className="text-[6.913px] text-[#fff] font-[700] leading-[120.286%]">
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
                      <h4 className="text-[6.913px] text-[#fff] font-[700] leading-[120.286%]">
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
                      <h4 className="text-[6.913px] text-[#fff] font-[700] leading-[120.286%]">
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
                      <h4 className="text-[6.913px] text-[#fff] font-[700] leading-[120.286%]">
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
                      <h4 className="text-[6.913px] text-[#fff] font-[700] leading-[120.286%]">
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

export default WalletSec;
