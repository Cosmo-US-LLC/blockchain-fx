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

function ExclusiveBenefitsSec() {
  return (
    <div className="pt-[53px] pb-[51px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[50px] leading-[100%] text-[#181A20] text-center font-[700]">
          Exclusive Benefits During the Pre-Sale
          </h3>
        </div>
        <div className="max-w-[1220px] pt-[60px] w-[100%] mx-auto ">
          <div className=" grid grid-cols-4 gap-x-[21px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="max-w-[289px] px-[24px] flex flex-col justify-centetr pt-[37px] pb-[34px] min-h-[372px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB] space-y-[20px] "
              >
                <div className="max-h-[116px] flex justify-center items-center">
                  <img src={item.img} alt="" />
                </div>
                <h3
                  className="text-[20px] text-center text-[#000] font-[700] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[18px]  text-center text-[#000] font-[400] leading-[111.111%]">
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
