import React from "react";

// import howimg from "../assets/HowDoesItSec/hiwimg.png";
import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn (2).png";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

const cardItems = [
  {
    id: "01",
    img: excixn1,
    title: "Lowest Token Price <br/>Before Launch",
    description:
     "Buying during the pre-sale allows you to secure a significant lower price compared to the BFX launch price.",
  },
  {
    id: "02",
    img: excixn2,
    title: "Limited Edition <br/>BFX Visa Cards",
    description:
    "Get a metal or 18 karat gold BFX Visa credit card with unlimited spending and top-ups, usable worldwide.",
  },
  {
    id: "03",
    img: excixn3,
    title: "Exclusive Bonus <br/>Trading Credits ",
    description:
    "Get up to $25,000 in free trading credits to kickstart trading on BlockchainFX with no conditions attached.",
  },
  {
    id: "04",
    img: excixn4,
    title: " Daily USDT <br/>Staking Rewards",
    description:
      "Start earning USDT and BFX rewards today by joining the BFX presale. The earlier you buy, the more you can earn over time.",
  },
];

function ExclusiveBenefitsSec() {
  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[40px] capitalize leading-[155.556%] text-[#fff] text-center font-[700]">
          Benefits Of Buying BFX During The Presale
          </h3>
        </div>
        <div className="max-w-[1200px] pt-[30px] w-[100%] mx-auto ">
          <div className=" grid grid-cols-4 gap-x-[21px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="mx-auto px-[15px] flex flex-col justify-center pt-[20px] pb-[34px] min-h-[310px] max-h-[330px] bg-[#030F16] rounded-[9px] space-y-[20px] "
                style={{
                  border:"1.139px solid #2F2F2F",
                }}
              >
                <div className="max-h-[116px] h-[100%] flex justify-center items-center">
                  <img src={item.img} className="max-h-[116px] h-[100%]" alt="" />
                </div>
                <h3
                  className="text-[22px] text-center italic text-[#fff] font-[600] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[15px]  text-center italic text-[#fff] font-[400] leading-[111.111%]">
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
