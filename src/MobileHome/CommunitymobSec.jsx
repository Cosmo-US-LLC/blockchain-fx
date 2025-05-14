
import React from "react";

import icn1 from "../assets/KYCVerified/kycicn (1).svg";
import coma from "../assets/CommunitySec/coma.svg";
import icn3 from "../assets/KYCVerified/kycicn (2).svg";

function CommunitymobSec() {

  const cardItems = [
    {
      title: "DANI",
      Date:"Verified Purchase on 04/02/25",
      description: "Joined their waitlist and got early beta access to the trading app in December. It felt like Binance on steroids and I just Knew it would blow up, so I bought in 5–6 times over the past weeks. Already made $3,75k USDT from staking, and the coin hasn’t even launched yet. Big up!"
    },
    {
      title: "ERIKS",
      Date:"Verified Purchase on 03/31/25",
      description: "I got in super early when BFX launched their initial staking pool, barely anyone was in, so rewards were split between just a few of us. Made over $8.5k from staking and got $2k USDT airdropped. Left the rest untouched. Tbh I’m Still in shock… this is pure alpha."
    },
    {
      title: "S.Z",
      Date:"Verified Purchase on 04/17/25",
      description: "I’m already earning solid rewards just from staking, but what I’m really betting on is what $BFX can do after the presale. Why pay fees on platforms like Coinbase when you can get paid here, and even trade stocks? Everyone’s going to switch. BFX will be the next big thing. It’s a no-brainer."
    }
  ];

  return (
    <div className="bg-[#020B10]">
      <div className="max-w-[1200px] pt-[30px] w-[90%] mx-auto relative">
        <h3 className="text-[30px] text-[#fff] font-[600] leading-[120%] tracking-[-1.5px] text-center">
        What the $BFX <br/> Community Is Saying
        </h3>
        <div className="pt-[25px] w-[100%] mx-auto">
          <div className="grid grid-cols-1  gap-y-[30px]">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="p-[42px] w-[100%] flex flex-col justify-between max-h-[370px] min-h-[370px] bg-[#111] rounded-[24px]"
                style={{
                  border: "1px solid rgba(230, 175, 3, 0.12)"
                }}
              >
                <div className="flex justify-start pb-[20px] items-center">
                  <img src={coma} className="h-[20px]" alt="Security_Verified" />
                </div>
                <div className="">
                  <h4 className="text-[15px] text-[#fff] font-[400] leading-[135.796%]">
                    {item.description}
                  </h4>
                  <div className="min-h-[30px] flex justify-start pt-[20px] items-center">
                    <h3 className="text-[16px] text-[#E5AE00] font-[900] break-normal leading-[109.316%]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#B6BCCC] text-[16px] font-[300] ">{item.Date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitymobSec;
