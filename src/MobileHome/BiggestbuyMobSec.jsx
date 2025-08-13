import React, {useEffect, useState } from "react";

function BiggestbuyMobSec() {
   const [showMore, setShowMore] = useState(false);
  const [tableData, setTableData] = useState([]);
  

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

    const shortenWallet = (wallet) =>
    wallet ? `${wallet.slice(0, 4)}...${wallet.slice(-4)}` : "-";

  const getOrdinalSuffix = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };


 useEffect(() => {
  async function fetchTopBuyers() {
    try {
      const res = await fetch(
        "https://api.presale.gg/v1/projects/blockchainfx/top-buyers"
      );
      const data = await res.json();

      const prizeList = [
        50000, 20000, 10000, 5000, 3000,
        2500, 2000, 1800, 1500, 1000
      ];

      const formatted = data.map((item, idx) => {
        const totalBuyValue = Number(item.total_usd_spent);

        return {
          rank: `${idx + 1}${getOrdinalSuffix(idx + 1)}`,
          wallet: shortenWallet(item.wallet_address),
          totalBuy: `$${totalBuyValue.toLocaleString()}`,
          prize: prizeList[idx] !== undefined
            ? `$${prizeList[idx].toLocaleString()}`
            : "-"
        };
      });

      setTableData(formatted);
    } catch (error) {
      console.error("Error fetching buyers:", error);
    }
  }

  fetchTopBuyers();
}, []);

  const visibleData = showMore ? tableData : tableData.slice(0, 5);

  return (
    <div className="pt-[10px] pb-[24px] bg-[#020B10] overflow-hidden">
      <div className="relative w-[90%] rounded-[24px] px-[20px] py-[30px] mx-auto bg-[#030F16]">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[600] leading-[120%] tracking-[-1.5px] capitalize text-center text-[#FFF] ">
            Biggest buy-in competition
          </h3>
          <p className=" w-[100%] font-inter text-center text-[16px] text-[#fff] font-medium leading-[25px]">
            The top 10 BFX presale buyers will receive a share of 100,000 USD in $BFX. This exclusive reward is our way of thanking those who contributed the most and played a major role in the growth of the BlockchainFX ecosystem.
          </p>
        </div>
        
        {/* Rankings Table */}
        <div className="bg-[#030F16] w-[96%] mt-[30px] space-y-[15px] mx-auto border-[1px] border-[#fff] px-[10px] py-[20px] rounded-[24px]">
          <div className="flex justify-between items-center px-[15px] pt[15px]">
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[10%]">Rank</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[30%]">Wallet</h3>
            <h3 className="text-[#F9C333] text-[9px] text-center font-[600] w-[30%]">Total Buy</h3>
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
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[10%]">{item.rank}</h3>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[30%]">{item.wallet}</h3>
              <h3 className="text-[#FFF89C] text-[9px] text-center font-[600] w-[30%]">{item.totalBuy}</h3>
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
