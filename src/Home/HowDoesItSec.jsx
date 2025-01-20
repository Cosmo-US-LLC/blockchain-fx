import React from "react";

import howimg from "../assets/HowDoesItSec/hiwimg.png";


const cardItems = [
    {
      id: "01",
      title: "Trading Platform",
      description: "BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.",
    },
    {
      id: "02",
      title: "Fee Distribution",
      description: "Our wallet ensures your assets are stored securely with state-of-the-art encryption.",
    },
    {
      id: "03",
      title: " Daily Revenue (50%)",
      description: "50% of all fees collected will be shared with BFX holders and automatically airdropped every 24 hours.",
    },
    {
      id: "04",
      title: "Buybacks (20%)",
      description: "Our team is available around the clock to assist with any issues or questions.",
    },
    {
      id: "05",
      title: "Burn",
      description: "50% of buybacks will be automatically burned, continuously reducing the supply of $BFX..",
    },
    {
      id: "06",
      title: "Hyper Growth",
      description: "Enjoy competitive fees that help you maximize your returns.",
    },
  ];

function HowDoesItSec() {
  
  return (
    <div className="pt-[84px] pb-[51px]">
     <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
            <h3 className="text-[50px] leading-[100%] text-[#181A20] text-center font-[700]">How does it work?</h3>
        </div>
     <div className="max-w-[1220px] py-[90px] px-[46px]  space-x-[3rem] flex justify-between w-[100%] mx-auto ">
        <div className="w-[50%] grid grid-cols-2 gap-x-[21px] gap-y-[18px]">
            {/* <div className="max-w-[289px] px-[24px] pt-[24px] pb-[34px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB]">
                <p className="text-[20px] text-[#000] font-[700]">01.</p>
                <h3 className="text-[20px] text-[#000] font-[700] leading-[115%]">Trading Platform</h3>
                <h4 className="text-[18px] text-[#000] font-[400] leading-[111.111%]">BlockchainFX is a multi-asset trading platform that offers a wide range of trading options.</h4>
            </div> */}
              {cardItems.map((item) => (
        <div
          key={item.id}
          className="max-w-[289px] px-[24px] flex flex-col justify-centetr pt-[24px] pb-[34px] min-h-[284px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB] "
        >
          <p className="text-[20px]  text-[#000] font-[700]">{item.id}.</p>
         <div className="min-h-[100px] flex justify-center items-center">
         <h3 className="text-[20px] text-center text-[#000] font-[700] leading-[115%]">{item.title}</h3>
         </div>
          <h4 className="text-[18px]  text-center text-[#000] font-[400] leading-[111.111%]">{item.description}</h4>
        </div>
      ))}
        </div>
        <div className="w-[50%] flex justify-end max-w-[521px]">
        <img src={howimg} alt="" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default HowDoesItSec;
