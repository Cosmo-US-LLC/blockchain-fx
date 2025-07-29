import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function BiggestbuyMobSec() {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  

   const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  
   const tableData = [
    {
      rank: "1st",
      wallet: "0x589...18e1",
      date: "2025-05-02",
      txCount: 3,
      totalBuy: "$124,590.58",
      nft: "Legend",
      prize: "$50,000",
    },
    {
      rank: "2nd",
      wallet: "0xa28...b37d",
      date: "2025-04-11",
      txCount: 2,
      totalBuy: "$79,810.35",
      nft: "Elite",
      prize: "$20,000",
    },
    {
      rank: "3rd",
      wallet: "0xc6e...6f8e",
      date: "2025-04-07",
      txCount: 5,
      totalBuy: "$52,192.16",
      nft: "Elite",
      prize: "$10,000",
    },
    {
      rank: "4th",
      wallet: "0x71C...9c9B",
      date: "2023-04-14",
      txCount: 13,
      totalBuy: "$35,143.44",
      nft: "Master",
      prize: "$5,000",
    },
    {
      rank: "5th",
      wallet: "0x5ae...76de",
      date: "2023-04-19",
      txCount: 4,
      totalBuy: "$27,440.38",
      nft: "Expert",
      prize: "$3,000",
    },
    {
      rank: "6th",
      wallet: "0xa3f...1b9c",
      date: "2025-05-06",
      txCount: 9,
      totalBuy: "$24,710.55",
      nft: "Expert",
      prize: "$2,500",
    },
    {
      rank: "7th",
      wallet: "0x9be...3c1a",
      date: "2025-04-23",
      txCount: 3,
      totalBuy: "$21,845.72",
      nft: "Expert",
      prize: "$2,000",
    },
    {
      rank: "8th",
      wallet: "0x7cd...5aa3",
      date: "2025-04-22",
      txCount: 11,
      totalBuy: "$19,302.48",
      nft: "Expert",
      prize: "$1,800",
    },
    {
      rank: "9th",
      wallet: "0xd14...8f6",
      date: "2025-04-11",
      txCount: 2,
      totalBuy: "$17,894.11",
      nft: "Expert",
      prize: "$1,500",
    },
    {
      rank: "10th",
      wallet: "0xb89...c24e",
      date: "2025-03-30",
      txCount: 6,
      totalBuy: "$15,732.00",
      nft: "Expert",
      prize: "$1,000",
    },
  ];
  const visibleData = showMore ? tableData : tableData.slice(0, 5);  // Show first 5 items or more based on state

  return (
    <div className="pt-[10px] pb-[24px] bg-[#020B10] overflow-hidden">
      <div className="relative w-[90%] rounded-[24px] px-[20px] py-[30px] mx-auto bg-[#030F16]">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] capitalize text-center text-[#FFF] ">
            {t("biggest_buy.title")}
          </h3>
          <p className=" w-[100%] font-inter text-center text-[16px] text-[#fff] font-medium leading-[25px]">
            {t("biggest_buy.description")}
          </p>
        </div>
         {/* Rankings Table */}
        <div className="bg-[#030F16] w-[90%] mt-[30px] space-y-[15px] mx-auto border-[1px] border-[#fff] px-[10px] py-[20px] rounded-[24px]">
          <div className="flex justify-between items-center px-[15px] pt[15px]">
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[16%]">{t("biggest_buy.table.rank")}</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[30%]">{t("biggest_buy.table.wallet")}</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[25%]">{t("biggest_buy.table.total_buy")}</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[20%]">{t("biggest_buy.table.prize")}</h3>
          </div>

          {/* Table Rows */}
          {visibleData.map((item, index) => (
            <div key={index}  className={`flex justify-between items-center px-[15px] py-[15px] 
              ${index === 0 ? 'bg-[#BB9E08]' : ''}
                ${index === 1 ? 'bg-[#99958C]' : ''} 
                ${index === 2 ? 'bg-[#A46A2A]' : ''} {/* Grey background for second row only */}
                ${index >= 3 ? '' : ''}  {/* No background for rows starting from 4th onward */}
                rounded-[24px]`}>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[16%]">{item.rank}</h3>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[30%]">{item.wallet}</h3>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[25%]">{item.totalBuy}</h3>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[20%]">{item.prize}</h3>
            </div>
          ))}
            <div className="flex justify-center mt-[30px]">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:text-white hover:bg-[#E5AE00] px-[15px] text-[#E5AE00] bg-transparent text-[14px] font-[400] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] items-cneter inline-flex h-[38px]"
          >
            {showMore ? t("biggest_buy.view_less") : t("biggest_buy.load_more")}
          </button>
        </div>
        </div>
         {/* <div className="flex justify-center items-center mt-[20px] relative z-10">
          <button
            onClick={handleScroll}
            style={{
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className="text-{#000} px-[12px]  text-[14px] font-[600] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[140px] h-[39px]"
          >
            Buy BFX
          </button>
        </div> */}

        {/* Toggle Button */}
      
      </div>
    </div>
  );
}

export default BiggestbuyMobSec;
