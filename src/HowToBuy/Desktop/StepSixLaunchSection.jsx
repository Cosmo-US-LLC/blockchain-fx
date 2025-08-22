import React from "react";
import UniswapIcon from "../../assets/hoyToBuy/step6/uniswap.svg";
import goldenShadow from "../../assets/hoyToBuy/step6/goldenShadow.png";
import { useTranslation } from "react-i18next";
function StepSixLaunchSection() {
   const { t } = useTranslation();
  return (
   <div className="py-12 bg-[#000]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="relative overflow-hidden flex items-center justify-center gap-[134px] p-5 border-[2px] border-[#E6AF0320] rounded-[16px] min-h-[482px]">
          <img src={goldenShadow} className="absolute top-0 left-0 z-20 h-auto" />

      
          <div className="w-[460px] backdrop-blur-md border border-[#545454] rounded-[12px] relative z-30 p-5">
            <p className="mb-4 text-[16px] font-medium text-center capitalize text-[#808080]">
              {t("stepSixLaunch.exchangesTitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center max-w-[450px] gap-4">
            
              <div className="flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md">
                <div className="w-[38px] h-[38px] rounded-full bg-[#FF007A] flex items-center justify-center">
                  <img src={UniswapIcon} className="w-7 h-7" />
                </div>
                <span className="text-sm font-semibold text-[#808080]">UNISWAP</span>
              </div>
              {["#F0B90B", "#0052FE", "#00F0FF", "#7635F5"].map((color, i) => (
                <div
                  key={i}
                  className="blur-sm flex items-center justify-center gap-2 w-[152px] h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md"
                >
                  <div
                    className={`w-[38px] h-[38px] rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: color }}
                  >
                    <img src={UniswapIcon} className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-semibold text-[#808080]">UNISWAP</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[330px] text-white">
            <p className="text-[30px] font-[30px] text-[#E5AE00]">{t("stepSixLaunch.step")}</p>
            <h2 className="mb-4 text-[48px] font-[600] leading-[57.6px] tracking-[-3.36px]">
              {t("stepSixLaunch.title")}
            </h2>
            <p className="mb-4 text-[16px] text-[#9F9F9F] font-[400] leading-[28px] tracking-[-0.4px]">
              {t("stepSixLaunch.description1")}
            </p>
            <p className="mb-6 text-[16px] text-[#9F9F9F] font-[400] leading-[28px] tracking-[-0.4px]">
              {t("stepSixLaunch.description2")}
            </p>

            <a href="/" className="w-fit">
              <button className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-md hover:bg-yellow-500">
                {t("stepSixLaunch.button")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepSixLaunchSection;
