import React, { useState } from "react";

function BiggestbuyMobSec() {
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
      wallet: "0x589...18e01",
      date: "2025-05-02",
      txCount: 3,
      totalBuy: "$124,590.58",
      nft: "Legend",
      prize: "$50,000",
    },
    {
      rank: "2nd",
      wallet: "0x2b...b37d",
      date: "2025-11-04",
      txCount: 2,
      totalBuy: "$79,810.35",
      nft: "Elite",
      prize: "$20,000",
    },
    {
      rank: "3rd",
      wallet: "0x6ce...62f8",
      date: "2025-05-03",
      txCount: 15,
      totalBuy: "$52,192.16",
      nft: "Elite",
      prize: "$10,000",
    },
    {
      rank: "4th",
      wallet: "0x71c...9ec98",
      date: "2023-10-06",
      txCount: 13,
      totalBuy: "$35,143.44",
      nft: "Master",
      prize: "$5,000",
    },
    {
      rank: "5th",
      wallet: "0x5e...7676",
      date: "2023-09-04",
      txCount: 4,
      totalBuy: "$24,710.55",
      nft: "Expert",
      prize: "$3,000",
    },
    {
      rank: "6th",
      wallet: "0x03...109c",
      date: "2025-05-06",
      txCount: 5,
      totalBuy: "$24,710.55",
      nft: "Master",
      prize: "$2,500",
    },
    {
      rank: "7th",
      wallet: "0x3b...92f7",
      date: "2025-07-07",
      txCount: 2,
      totalBuy: "$21,845.72",
      nft: "Expert",
      prize: "$2,000",
    },
    {
      rank: "8th",
      wallet: "0x72...91b0",
      date: "2025-06-10",
      txCount: 3,
      totalBuy: "$19,302.48",
      nft: "Elite",
      prize: "$1,800",
    },
    {
      rank: "9th",
      wallet: "0xa9...24b5",
      date: "2025-03-15",
      txCount: 4,
      totalBuy: "$17,894.11",
      nft: "Legend",
      prize: "$1,500",
    },
    {
      rank: "10th",
      wallet: "0x89...c74e",
      date: "2025-02-20",
      txCount: 1,
      totalBuy: "$15,732.00",
      nft: "NFT",
      prize: "$1,000",
    },
  ];

  const visibleData = showMore ? tableData : tableData.slice(0, 5);  // Show first 5 items or more based on state

  return (
    <div className="pt-[24px] pb-[24px] bg-[#020B10] overflow-hidden">
      <div className="relative w-[90%] rounded-[24px] px-[20px] py-[30px] mx-auto bg-[#111]">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[600] text-center leading-[120%] text-[#FFF] tracking-[-1.548px]">
            Biggest buy-in competition
          </h3>
          <p className="text-[15px] font-[400] w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
            The top 10 BFX presale buyers will receive a share of 100,000 USD in $BFX. This exclusive reward is our way of thanking those who contributed the most and played a major role in the growth of the BlockchainFX ecosystem.
          </p>
        </div>
        
        {/* Rankings Table */}
        <div className="bg-[#312911] w-[90%] mt-[30px] space-y-[15px] mx-auto border border-[#fff] px-[10px] py-[20px] rounded-[24px]">
          <div className="flex justify-between items-center px-[15px] pt[15px]">
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[16%]">Rank</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[30%]">Wallet</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[25%]">Total Buy</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[20%]">Prize</h3>
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
            className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-[#E5AE00] bg-transparent text-[16px] font-[400] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] max-w-[126px] w-[100%] h-[38px]"
          >
            {showMore ? "View Less" : "Load More"}
          </button>
        </div>
        </div>
         <div className="flex justify-center items-center mt-[20px] relative z-10">
          <button
            onClick={handleScroll}
            style={{
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className="text-{#000} px-[12px]  text-[14px] font-[600] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[140px] h-[39px]"
          >
            Buy BFX
          </button>
        </div>

        {/* Toggle Button */}
      
      </div>
    </div>
  );
}

export default BiggestbuyMobSec;
