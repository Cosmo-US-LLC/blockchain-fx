import React from "react";
import { useTranslation } from "react-i18next";

import icn1 from "../assets/HowDoesItSec/icns (6).svg";
import icn2 from "../assets/HowDoesItSec/icns (5).svg";
import icn3 from "../assets/HowDoesItSec/icns (4).svg";
import icn4 from "../assets/HowDoesItSec/icns (3).svg";
import icn5 from "../assets/HowDoesItSec/icns (2).svg";
import icn6 from "../assets/HowDoesItSec/icns (1).svg";


const cardItems = [
    {
      id: "01.",
      img:icn1,
      title: "how_does_it_section.trading_platform.title",
      description: "how_does_it_section.trading_platform.description",
    },
    {
      id: "02.",
      img:icn2,
      title: "how_does_it_section.fee_distribution.title",
      description: "how_does_it_section.fee_distribution.description",
    },
    {
      id: "03.",
      img:icn3,
      title: "how_does_it_section.daily_revenue.title",
      description: "how_does_it_section.daily_revenue.description",
    },
    {
      id: "04.",
      img:icn4,
      title: "how_does_it_section.buybacks.title",
      description: "how_does_it_section.buybacks.description",
    },
    {
      id: "05.",
      img:icn5,
      title: "how_does_it_section.burn.title",
      description: "how_does_it_section.burn.description",
    },
    {
      id: "06.",
      img:icn6,
      title: "how_does_it_section.fueling_growth.title",
      description: "how_does_it_section.fueling_growth.description",
    },
  ];

function HowDoesItSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#020B10]">
     <div className="max-w-[1200px] w-[100%] mx-auto relative">
        <div className="space-y-[0px]">
            <h3 className="text-[40px] capitalize leading-normal tracking-[-1px] text-[#fff] text-center font-[700]">
              {t("how_does_it_section.title")}
            </h3>
          <p className="text-[20px] text-[#fff] text-center font-[400]">
            {t("how_does_it_section.description")}
          </p>
        </div>
     <div className=" pt-[34px] w-[100%] mx-auto ">
        <div className="grid grid-cols-3 gap-x-[19px] gap-y-[19px]">
            {/* <div className="max-w-[289px] px-[24px] pt-[24px] pb-[34px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB]">
                <p className="text-[20px] text-[#000] font-[700]">01.</p>
                <h3 className="text-[20px] text-[#000] font-[700] leading-[115%]">Trading Platform</h3>
                <h4 className="text-[18px] text-[#000] font-[400] leading-[111.111%]">BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.</h4>
            </div> */}
              {cardItems.map((item) => (
        <div
          key={item.id}
          className=" px-[19px] w-[100%] flex flex-col justify-centetr pt-[20px] pb-[24px] max-h-[223.384px] min-h-[220.384px] bg-[#030F16] rounded-[16px]"
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)",
          }}
        >
          <div className="flex justify-between pb-[23px] items-center">
            <img src={item.img} className="object-cover" alt="" />
            <p className="text-[56.8px]  leading-[130%] font-[600]"
            style={{
              color:"rgba(255, 255, 255, 0.20)",
            }}
            >{item.id}</p>
          </div>
         <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
         <h3 className="text-[24px] text-[#fff] font-[600] leading-[109.316%]">{t(item.title)}</h3>
         </div>
          <h4 className="text-[14px]  text-[#fff] font-[400] leading-[135.796%]">{t(item.description)}</h4>
        </div>
      ))}
        </div>
        {/* <div className="w-[50%] flex justify-end max-w-[310px]">
        <img src={howimg} className="object-cover" alt="" />
        </div> */}
      </div>
     </div>
    </div>
  );
}

export default HowDoesItSec;
