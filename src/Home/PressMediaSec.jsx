import React from "react";
import { useTranslation } from "react-i18next";

import media3 from "../assets/Press&Media/media3.svg";
import media2 from "../assets/Press&Media/media2.svg";
import medai1 from "../assets/Press&Media/medicn (3).svg";

function PressMediaSec() {
  const { t } = useTranslation();
  const articles = t("press_media_section.articles", { returnObjects: true });

  return (
    <div className="bg-[#020B10] pt-[50px] pb-[50px] px-[80px] space-y-[35px]">
      <div className="space-y-[25px]">
        <h3 className="text-[48px] font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
          {t("press_media_section.title")}
        </h3>
      </div>
      <div className="max-w-[1200px] relative space-y-[40px] w-[100%] mx-auto">
        <div className="flex gap-x-4 justify-center">
          {articles.map((article, idx) => (
            <div key={idx} className={`bg-[#030F16] max-w-[400px] rounded-[8px] px-[17.6px] py-[37px] w-[100%]`} style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}>
              <div className="space-y-[25px]">
                <div className="flex items-center justify-center h-[30px]">
                  <img src={idx === 0 ? medai1 : idx === 1 ? media2 : media3} className="h-[44px]" 
                  alt="BlockchainFX article" />
                </div>
                <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
                  {article.description}
                </p>
                <a href={article.link} target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">
                  {article.link_text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
