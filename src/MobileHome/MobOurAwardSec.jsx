import React from "react";
import { useTranslation } from "react-i18next";
import card_1 from "../assets/Multi/mob_multi (1).png";
import card_2 from "../assets/Multi/mob_multi (2).png";

function MobOurAwardSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[24px] bg-[#020B10] pb-[24px]" id="win">
      <div className="relative space-y-[20px] w-[90%] mx-auto">
        <div className="space-y-[10px]">
          <h4 className="text-[20px] font-[400] text-center capitalize leading-[114%] text-[#FFF] tracking-[-1px]">
            {t("multiAward.heading")} 
          </h4>
          <h3 className="text-[30px] font-[600] leading-[120%] multiAwardbr tracking-[-1.5px] text-center text-[#FFF]"
          dangerouslySetInnerHTML={{ __html: t(`multiAward.subheading`) }}
          >
          </h3>
        </div>
        <div className="space-y-[40px]">
          <div
            className=" w-[100%] flex justify-center items-center"
          >
           <img src={card_1} className="object-cover" alt="Blockchain FX awarded ‘Best New Trading Platform 2025’ by TheCoinRise, shown with a crystal trophy and gold laurels." />
          </div>
          <div
            className=" w-[100%] flex justify-center items-center"
          >
           <img src={card_2} className="object-cover" alt="Blockchain FX receives ‘Fastest Growing Trading Broker 2025’ award from AltcoinDaily, with a diamond-shaped glass trophy." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobOurAwardSec;
