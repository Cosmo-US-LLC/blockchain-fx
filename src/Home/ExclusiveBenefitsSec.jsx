import React from "react";

import howimg from "../assets/HowDoesItSec/hiwimg.png";
import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn (2).svg";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

const cardItems = [
  {
    id: "01",
    img: excixn1,
    title: "Lowest Price <br/>Before Launch",
    description:
     "Buying during the pre-sale allows you to secure a significant lower price compared to the $BFX launch price.",
  },
  {
    id: "02",
    img: excixn2,
    title: "Receive Bonus<br/> $BFX Tokens",
    description:
    "Get more $BFX during the pre-sale with bonus levels based on your spend. This gives you an even better deal.",
  },
  {
    id: "03",
    img: excixn3,
    title: "Unlock Bonus <br/> Trading Credits",
    description:
    "Get an exclusive membership packed with multiple perks and up to $25,000 to start trading with no conditions attached.",
  },
  {
    id: "04",
    img: excixn4,
    title: " Daily USDT <br/> Staking Income",
    description:
      "Earn daily passive USDT and $BFX rewards—even during the pre-sale. The earlier you buy, the more you earn.",
  },
];

function ExclusiveBenefitsSec() {
  return (
    <div className="py-[50px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[30px] capitalize leading-[155.556%] text-[#181A20] text-center font-[700]">
          Exclusive Benefits During the Pre-Sale
          </h3>
        </div>
        <div className="max-w-[1100px] pt-[30px] w-[100%] mx-auto ">
          <div className=" grid grid-cols-4 gap-x-[21px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="max-w-[255px] mx-auto px-[15px] flex flex-col justify-centetr pt-[10px] pb-[34px] min-h-[310px] max-h-[310px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB] space-y-[20px] "
              >
                <div className="max-h-[116px] h-[100%] flex justify-center items-center">
                  <img src={item.img} className="max-h-[116px] h-[100%]" alt="" />
                </div>
                <h3
                  className="text-[16px] text-center text-[#000] font-[700] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[14px]  text-center text-[#000] font-[400] leading-[111.111%]">
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

export default ExclusiveBenefitsSec;
