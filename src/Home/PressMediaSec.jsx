import React from "react";
import { useTranslation } from "react-i18next";

import media3 from "../assets/Press&Media/media3.svg";
import media2 from "../assets/Press&Media/media2.svg";
import medai1 from "../assets/Press&Media/medicn (3).svg";

function PressMediaSec() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#020B10] pt-[50px] pb-[50px] px-[80px] space-y-[35px]">
      <div className="space-y-[25px]">
        <h3 className="text-[48px] font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
          {t("press_media_section.title")}
        </h3>
      </div>
      <div className="max-w-[1280px] relative space-y-[40px] w-[100%] mx-auto">
        <div className="flex gap-x-4 justify-center">
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px] px-[17.6px] py-[37px] w-[100%]" style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}>
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
                {t("press_media_section.articles.0.description")}
              </p>
              <a href={t("press_media_section.articles.0.link")} target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">
                {t("press_media_section.articles.0.link_text")}
              </a>
            </div>
          </div>
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px] px-[17px] py-[37px] w-[100%]" style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}>
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={media2} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
                {t("press_media_section.articles.1.description")}
              </p>
              <a href={t("press_media_section.articles.1.link")} target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">
                {t("press_media_section.articles.1.link_text")}
              </a>
            </div>
          </div>
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px] px-[17.6px] pt-[37px] pb-[29px] w-[100%]" style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}>
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={media3} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
                {t("press_media_section.articles.2.description")}
              </p>
              <a href={t("press_media_section.articles.2.link")} target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">
                {t("press_media_section.articles.2.link_text")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
