import React from "react";

import rwdimg1 from "../assets/OurAwardSec/rwdimg (1).png";
import rwdimg2 from "../assets/OurAwardSec/rwdimg (2).png";
import rwdimg3 from "../assets/OurAwardSec/rwdimg (3).png";


const cardData = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    }
]

function ExpertsworkingSec() {
  return (
    <div className="py-[50px] space-y-[35px] bg-[#FAFAFA] px-[244px] "
    style={{
        background:"rgba(250, 250, 250, 0.98)"
    }}
    >
      <div className="max-w-[1030px] relative space-y-[40px] w-[100%] mx-auto ">
        
        <div className="space-y-[30px]">
          <h4 className="text-[30px] font-[400] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          25 Years of Experience
          </h4>
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Experts working on BlockchainFX
          </h3>
        </div>
        <div className="flex justify-between">
       {
        cardData.map(()=>(
            <div className="max-w-[246px] rounded-[8px] min-h-[342px] p-[15px] w-[100%] border border-[#9D9D9D]"
            style={{
               background:"rgba(241, 241, 241, 0.36)",
               backdropFilter:"blur(31.5px)"
            }}
            >
               <div className="cardimg flex justify-end flex-col min-h-[311px]">
                   <div className="p-[20px]">
                       <h4 className="text-[21px] text-[#FFF] font-[600]">Name Goes Here</h4>
                       <p className="text-[14px] text-[#FFF] font-[400] tracking-[-0.32px]">Lorem Ipsum</p>
                   </div>
               </div>
               
            </div>
        ))
       }
        </div>
      </div>
    </div>
  );
}

export default ExpertsworkingSec;