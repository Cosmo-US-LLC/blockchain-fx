import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/OneAppSec/iconopen (1).svg";
import iconcls from "../assets/OneAppSec/iconopen (2) copy.svg";
import oneimg from "../assets/OneAppSec/dailyimgmob.png";
import { useTranslation } from "react-i18next";
import { useApiState } from "../presale-gg/stores/api.store";

function MobileOneAppSec() {
  const { t } = useTranslation();
  const apiData = useApiState();
  const [activeIndex, setActiveIndex] = useState(0); 

  const items = [
    {
      icon: oneicon1,
      title: t("one_app_sec.items.own_bfx.title"),
      description: t("one_app_sec.items.own_bfx.description"),
    },
    {
      icon: oneicon2,
      title: t("one_app_sec.items.stake_bfx.title"),
      description: t("one_app_sec.items.stake_bfx.description"),
    },
    {
      icon: oneicon3,
      title: t("one_app_sec.items.dashboard.title"),
      description: t("one_app_sec.items.dashboard.description"),
    },
    {
      icon: oneicon4,
      title: t("one_app_sec.items.staking_rewards.title"),
      description: t("one_app_sec.items.staking_rewards.description"),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="py-5 px-5 bg-[#020B10]" id="what-is-bfx-coin">
      <div className="flex flex-col relative border-[1px] border-[#343434] rounded-[24px] px-2 py-[30px]">
        <div className="space-y-[20px]">
          <div className="w-[100%] flex gap-2 px-2 flex-col text-left">
            {!apiData.presaleEnded && (
              <div className="w-fit h-[32px] text-[14px] font-[600] text-[#fff] rounded-[7px] bg-[#E9C03D] inline-flex items-center px-[15px]">
                <span className="text-[38px] leading-[9%] -mt-[23px] pr-[6px] animate-blink">
                  .
                </span>
                {t("one_app_sec.badge")}
              </div>
            )}
            <h3 className="pt-[15px] text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-left  text-[white] ">
              {t("one_app_sec.title")}
            </h3>
            <p className="text-[15px] text-[#fff] text-left font-[400] leading-[127.778%] tracking-[-0.32px]">
              {t("one_app_sec.subtitle")}
            </p>
          </div>

          <div className="w-[100%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="py-[25px] px-2 border-b border-[#343434] last:border-none"
              >
                <div
                  className="flex justify-between"
                  onClick={() => handleToggle(index)}
                >
                  <div className="w-[100%] space-y-[15px]">
                    <div className="flex items-center justify-start space-x-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[35] h-[35px]"
                      />
                      <h3 className="text-[20px] font-[600] text-[white]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="">
                    <img
                      src={activeIndex === index ? iconcls : iconapon}
                      alt={activeIndex === index ? "Collapse" : "Expand"}
                      className="w-[37] h-[37px]"
                    />
                  </div>
                </div>

                {activeIndex === index && (
                  <div
                    className="mt-4 text-[15px] text-[#fff] overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: activeIndex === index ? "200px" : "0",
                      opacity: activeIndex === index ? "1" : "0",
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-[100%] flex justify-center !mt-10">
            <img src={oneimg} className="object-cover" alt="Blockchainfx one app" />
          </div>
          <div className="max-w-[320px] w-[100%] mx-auto">
            <p className="text-[12px] px-2 leading-[130%] text-[#fff] text-center font-[400]">
              {t("one_app_sec.note")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOneAppSec;
