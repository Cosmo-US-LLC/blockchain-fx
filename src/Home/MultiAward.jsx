import React from "react";
import { useTranslation } from "react-i18next";
import multi1 from "../assets/Multi/multi_1.svg";
import multi2 from "../assets/Multi/multi_2.svg";

export default function MultiAward() {
  const { t } = useTranslation();

  return (
    <div className="pt-[30px] px-[80px] pb-[60px] bg-[#020B10]">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="space-y-2 mx-auto text-center pb-[60px]">
          <h3 className="text-[30px] text-white font-[600] leading-[120%] tracking-[-2.1px]">
            {t("multiAward.heading")}
          </h3>
          <p className="text-[48px] text-white font-[600] leading-[120%] multiAwardbr tracking-[-3.36px]"
             dangerouslySetInnerHTML={{ __html: t("multiAward.subheading") }} />
        </div>
        <div className="px-[240px] space-x-[18px] flex items-center justify-center">
          <img className="object-cover" src={multi1} alt="Blockchain FX awarded ‘Best New Trading Platform 2025’ by TheCoinRise, shown with a crystal trophy and gold laurels." />
          <img className="object-cover" src={multi2} alt="Blockchain FX receives ‘Fastest Growing Trading Broker 2025’ award from AltcoinDaily, with a diamond-shaped glass trophy." />
        </div>
      </div>
    </div>
  );
}
