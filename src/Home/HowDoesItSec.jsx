import React from "react";

import howimg from "../assets/HowDoesItSec/hiwimg.webp";


const cardItems = [
    {
      id: "01",
      title: "Trading Platform",
      description: "BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.",
    },
    {
      id: "02",
      title: "Fee Distribution",
      description: "70% of trading fees are used to incentivize the BFX community and drive the ecosystem’s growth.",
    },
    {
      id: "03",
      title: " Daily Revenue (50%)",
      description: "50% of all fees collected will be shared with BFX holders and automatically airdropped every 24 hours.",
    },
    {
      id: "04",
      title: "Buybacks (20%)",
      description: "20% of fees will be used for daily BFX buybacks, increasing demand and boosting the $BFX price.",
    },
    {
      id: "05",
      title: "Burn",
      description: "Half of all buybacks will be automatically burned, gradually reducing the supply of $BFX.",
    },
    {
      id: "06",
      title: "Hyper Growth",
      description: "The deflationary model and automatic buyback system fuel the potential for exponential growth of $BFX.",
    },
  ];

function HowDoesItSec() {
  
  return (
    <div className="py-[50px]">
     <div className="max-w-[1200px] w-[100%] mx-auto relative">
        <div>
            <h3 className="text-[30px] capitalize leading-normal tracking-[-1px] text-[#181A20] text-center font-[700]">How does it work?</h3>
        </div>
     <div className="max-w-[900px] pt-[34px]  space-x-[3rem] flex justify-between w-[100%] mx-auto ">
        <div className="w-[54%] grid grid-cols-2 gap-x-[19px] gap-y-[19px]">
            {/* <div className="max-w-[289px] px-[24px] pt-[24px] pb-[34px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB]">
                <p className="text-[20px] text-[#000] font-[700]">01.</p>
                <h3 className="text-[20px] text-[#000] font-[700] leading-[115%]">Trading Platform</h3>
                <h4 className="text-[18px] text-[#000] font-[400] leading-[111.111%]">BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.</h4>
            </div> */}
              {cardItems.map((item) => (
        <div
          key={item.id}
          className="max-w-[243px] px-[19px] flex flex-col justify-centetr pt-[20px] pb-[24px] max-h-[223.384px] min-h-[210.384px] bg-[#F2F2F2] rounded-[8px] border border-[#F9FAFB] "
        >
          <p className="text-[19.011px] pb-[23px] text-[#000] font-[700]">{item.id}.</p>
         <div className="min-h-[30px] flex justify-center items-center">
         <h3 className="text-[16px] text-center text-[#000] font-[700] leading-[109.316%]">{item.title}</h3>
         </div>
          <h4 className="text-[14px]  text-center text-[#000] font-[400] leading-[135.796%]">{item.description}</h4>
        </div>
      ))}
        </div>
        <div className="w-[50%] flex justify-end max-w-[310px]">
        <img src={howimg} className="object-cover" alt="" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default HowDoesItSec;
