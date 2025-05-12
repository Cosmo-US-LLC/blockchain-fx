import React from "react";
import { useTranslation } from "react-i18next";

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

const mediaIcons = [medai1, medai2, medai3];

function MobPressMediaSec() {
  const { t } = useTranslation();
  const articles = t("press_media_section.articles", { returnObjects: true });

  return (
    <div className="pt-[30px] bg-[#000] pb-[30px]">
      <div className="relative space-y-[20px] w-[90%] mx-auto">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[120%] text-[#fff] tracking-[-1.5px]">
            {t("press_media_section.title")}
          </h3>
        </div>
        <div className="relative space-y-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#030F16] border border-white border-opacity-10  max-w-[284px] mx-auto rounded-[8px] px-[20px] py-[37px] w-[100%]"
            >
              <div className="space-y-[32px]">
                <div className="flex items-center justify-center h-[30px]">
                  <img src={mediaIcons[index]} className="h-[30px]" alt="" />
                </div>
                <p className="text-[#fff] text-[15px] italic text-center leading-[144.529%] font-[400]">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  className="text-[15px] flex justify-center underline text-[#E5AE00]"
                  rel="noopener noreferrer"
                >
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

export default MobPressMediaSec;
