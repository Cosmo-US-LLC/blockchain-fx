import React from "react";

import howimg from "../assets/HowDoesItSec/hiwimg.png";
import excixn1 from "../assets/ExclusiveSec/excixn (1).svg";
import excixn2 from "../assets/ExclusiveSec/excixn (2).svg";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).svg";

const cardItems = [
  {
    id: "01",
    img: excixn1,
    title: "Lowest Price <br/>Before Launch",
    description:
      "Buying during the pre-sale allows you you to secure a much lower price compared to the $BFX launch price.",
  },
  {
    id: "02",
    img: excixn2,
    title: "Receive Bonus<br/> $BFX Tokens",
    description:
      "Get more $BFX during the pre-sale with bonus levels based on how much you spend.",
  },
  {
    id: "03",
    img: excixn3,
    title: "Exclusive Pre-Sale <br/> Trading Bundles",
    description:
      "Obtain exclusive trading bundles packed with multiple perks during the pre-sale.",
  },
  {
    id: "04",
    img: excixn4,
    title: "Earn Daily <br/> USDT Rewards",
    description:
      "Earn daily USDT and $BFX rewards during the pre-sale. The earlier you buy, the more you get.",
  },
];

function MobExclusiveSec() {
  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="w-[90%] mx-auto relative">
        <div>
          <h3 className="text-[32px] leading-[100%] text-[#181A20] text-center font-[700]">
          Exclusive Benefits During the Pre-Sale
          </h3>
        </div>
        <div className="pt-[22px] w-[90%] mx-auto ">
          <div className="space-y-[16px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="px-[20px] bg-[#F9FAFB]  flex flex-col justify-centetr py-[32px]  bg-[#F9FAFB] rounded-[8px] border space-y-[20px] "
              >
                <div className="max-h-[127px] flex justify-center items-center">
                  <img src={item.img} alt="" />
                </div>
                <h3
                  className="text-[20px] text-center text-[#000] font-[700] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[15px]  text-center text-[#000] font-[400] leading-[153.333%]">
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
