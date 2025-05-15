import React from "react";

import howimg from "../assets/HowDoesItSec/hiwimg.png";
import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn5.webp";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

const cardItems = [
  {
    id: "01",
    img: excixn1,
    title: "Lowest Price Before Launch",
    description:
      "Buying during the pre-sale allows you to secure a significant lower price compared to the BFX launch price.",
  },
  {
    id: "02",
    img: excixn2,
    title: "Receive Limited BFX Visa Card",
    description:
      "Get a metal or gold BFX Visa credit card with unlimited spending and top-ups, usable worldwide.",
  },
  {
    id: "03",
    img: excixn3,
    title: "Exclusive Bonus Trading Credits",
    description:
      "Get up to $25,000 in free trading credits to kickstart trading on BlockchainFX with no conditions attached.",
  },
  {
    id: "04",
    img: excixn4,
    title: "Daily USDT Staking Rewards",
    description:
      " Start earning daily passive USDT and $BFX rewards automatically from today. The earlier you buy, the more you earn.",
  },
];

function MobExclusiveSec() {
  return (
    <div className="pt-[34px] pb-[34px] bg-[#020B10]">
      <div className="w-[100%] mx-auto relative">
        <h3 className="text-[30px] capitalize leading-[120%] text-[#FFF] text-center tracking-[-2.548px] font-[600]">
          Benefits of Buying BFX
          <br /> During the Presale
        </h3>

        <div className="pt-[22px] px-6 mx-auto ">
          <div className="space-y-[16px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="py-6 px-4 rounded-[16px] bg-[#111] flex flex-col justify-center gap-4  border-[rgba(230,175,3,0.12)]   border"
              >
                <div className="max-h-[127px] flex justify-center items-center">
                  <img src={item.img} className="max-h-[90px]" alt="" />
                </div>
                <h3
                  className="text-[20px] text-center text-[#FFF] font-[600] tracking-[-1.672px] leading-[120%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
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
