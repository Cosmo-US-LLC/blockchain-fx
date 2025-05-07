import React from "react";
import { useTranslation } from "react-i18next";
import multi1 from "../assets/Multi/multi1.png";
import multi2 from "../assets/Multi/multi2.png";

export default function MultiAward() {
  const { t } = useTranslation();

  return (
    <div className="pt-[30px] px-[80px] pb-[60px] bg-[#000]">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="space-y-2 mx-auto text-center pb-[60px]">
          <h3 className="text-[30px] text-white font-[600] leading-[120%] tracking-[-2.1px]">
          Multi-Awarded Trading Platform
          </h3>
          <p className="text-[48px] text-white font-[600] leading-[120%] tracking-[-3.36px]">
          Our Awards Speak For Themselves
          </p>
        </div>
        <div className="px-[240px] space-x-[18px] flex items-center justify-center">
          <img className="object-cover" src={multi1} alt="Award 1" />
          <img className="object-cover" src={multi2} alt="Award 2" />
        </div>
      </div>
    </div>
  );
}
