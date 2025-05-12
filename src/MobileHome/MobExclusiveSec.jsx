import React from "react";
import { useTranslation } from "react-i18next";

import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn5.webp";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

function MobExclusiveSec() {
  const { t } = useTranslation();

  const cardItems = [
    {
      title: "Lowest Token Price <br /> Before Launch",
      img: excixn1,
      description:<>Buying during the pre-sale allows you to secure <br/> a significant lower price compared <br/> to the BFX launch price.</>
    },
    {
      img: excixn2,
      title: "Limited Edition <br/> BFX Visa Cards",
      description:<>Get a metal or 18 karat gold BFX Visa credit card with unlimited spending and top-ups, <br/> usable worldwide.</>
    },
    {
      title: "Exclusive Bonus <br/> Trading Credits ",
      img: excixn3,
       description:<>Get up to $25,000 in free trading credits to kickstart your journey on BlockchainFX with <br/> no conditions attached.</>
    },
    {
      title: "Daily USDT <br/> Staking Rewards",
      img: excixn4,
      description:<>Start earning USDT and BFX rewards today by joining the BFX presale. The earlier you buy, <br/> the more you can earn over time.</>
    },
  ];

  return (
    <div className="pt-[34px] pb-[34px] bg-[#000]">
      <div className="w-[100%] mx-auto relative">
        <h3
          className="text-[30px] capitalize leading-[120%] text-[#FFF] text-center tracking-[-1.5px] font-[600]"
          
        >
         Benefits Of Buying BFX <br /> During The Presale
        </h3>

        <div className="pt-[22px] px-6 mx-auto">
          <div className="space-y-[16px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="py-6 px-4 rounded-[16px] bg-[#111] flex flex-col justify-center gap-4 border border-[rgba(230,175,3,0.12)]"
              >
                <div className="max-h-[127px] flex justify-center items-center">
                  <img src={item.img} className="max-h-[90px]" alt="" />
                </div>
                <h3
                  className="text-[20px] text-center text-[#FFF] font-[600] tracking-[-1.672px] leading-[120%]"
                  dangerouslySetInnerHTML={{
                    __html: item.title
                  }}
                />
                <h4 className="text-[15px] mx-auto text-center text-[#fff] font-[400] leading-[160%] tracking-[-0.3182px]">
                  {item.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobExclusiveSec;
