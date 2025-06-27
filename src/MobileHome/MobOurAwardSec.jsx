import React from "react";
import { useTranslation } from "react-i18next";
import card_1 from "../assets/Multi/mob-multi (2).png";
import card_2 from "../assets/Multi/mob-multi (1).png";

function MobOurAwardSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] bg-[#020B10] pb-[24px]" id="win">
      <div className="relative space-y-[20px] w-[90%] mx-auto">
        <div className="space-y-[10px]">
          <h4 className="text-[20px] font-[400] text-center capitalize leading-[114%] text-[#FFF] tracking-[-1px]">
            {t("multiAward.heading")} 
          </h4>
          <h3 className="text-[30px] font-[700] text-center leading-[120%] text-[#FFF] tracking-[-1.5px]"
          dangerouslySetInnerHTML={{ __html: t(`multiAward.subheading`) }}
          >
          </h3>
        </div>
        <div className="space-y-[40px]">
          <div
            className=" w-[100%] flex justify-center items-center"
          >
           <img src={card_1} className="object-cover" alt="" />
          </div>
          <div
            className=" w-[100%] flex justify-center items-center"
          >
           <img src={card_2} className="object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobOurAwardSec;
