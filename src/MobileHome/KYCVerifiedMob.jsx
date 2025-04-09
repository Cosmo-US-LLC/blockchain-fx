import React from "react";

import icn1 from "../assets/KYCVerified/fycicn (2).webp";
import icn2 from "../assets/KYCVerified/fycicn (3).webp";
import icn3 from "../assets/KYCVerified/fycicn (1).webp";


const cardItems = [
    {
      img:icn1,
      title: "External Audit Completed by Coinsult",
      description: "Our in-house team conducted an exhaustive review using advanced code analysis tools, extensive unit tests, and integration tests to identify and address potential vulnerabilities. ",
    },
    {
      img:icn2,
      title: "Team KYC Verified by Solidproof",
      description: "We partnered with lialborn, a renowned security firm, to provide an independent assssment. Their review validated our internal findings and helped fortify our security measures. ",
    },
    {
      img:icn3,
      title: " External Audit On-Going by CertiK",
      description: "We are currently collaborating with Certik for an additional layer of scrutiny to further enhance our smart contract security. ",
    },
   
  ];

function KYCVerifiedMob() {
  
  return (
    <div className="py-[50px] bg-[#020B10]">
     <div className="max-w-[1200px] w-[90%] mx-auto relative">
     <div className=" w-[100%] mx-auto ">
        <div className="grid grid-cols-1 gap-x-[12px] gap-y-[19px]">
              {cardItems.map((item) => (
        <div
          key={item.id}
          className=" pl-[16px] pr-[12px] w-[100%] flex flex-col justify-between pt-[20px] pb-[24px]  min-h-[220.384px] bg-[#030F16] rounded-[16px]"
          style={{
            border:"1px solid rgba(5, 5, 3, 0.12)",
          }}
        >
          <div className="flex justify-between pb-[23px] items-center">
            <img src={item.img} className="h-[40px]" alt="" />
          </div>
        <div>
        <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
         <h3 className="text-[20px] text-[#fff] font-[600] break-normal leading-[109.316%]">{item.title}</h3>
         </div>
          <h4 className="text-[15px] text-[#ACC4D1] font-[400] leading-[135.796%]">{item.description}</h4>
        </div>
        </div>
      ))}
        </div>
      </div>
     </div>
    </div>
  );
}

export default KYCVerifiedMob;
