import React, { useState } from "react";
import ernvet1 from "../assets/BiggestBuy/biggest_bg.png";

export default function BiggestBuy() {
  const [showMore, setShowMore] = useState(false);

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
      totalBuy: "$24,710.55",
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
  const visibleData = showMore ? tableData : tableData.slice(0, 5);

  return (
    <div className="flex items-center justify-center bg-[#020B10] pt-[50px] pb-[50px] px-[80px]">
      <div className="p-6 w-full max-w-[1200px] overflow-hidden relative min-h-[550px] bg-no-repeat bg-cover bg-center rounded-[16px] bg-[#111]">
        <div className="flex flex-col justify-center items-center relative z-10 space-y-[29px] mb-[25px]">
          <h4 className="text-[40px] font-[800] text-white leading-[120%]">
            Biggest Buy-In Competition
          </h4>
          <p className="text-[18px] text-white font-[400] leading-[150%] w-[990px]">
            The top 10 BFX presale buyers will receive a share of a 100,000 USD
            prize pool in $BFX. This competition is our way of thanking those
            who contributed the most and played a major role in the growth of
            the BlockchainFX ecosystem.
          </p>
        </div>

        {/* Table */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full text-white table-auto">
            <thead>
              <tr className="text-[#E5AE00] font-[700] text-left">
                <th className="px-4 py-2 text-center">Rank</th>
                <th className="px-4 py-2 text-center">Wallet</th>
                <th className="px-4 py-2 text-center">Date</th>
                <th className="px-4 py-2 text-center">No. of TX</th>
                <th className="px-4 py-2 text-center">Total Buy</th>
                <th className="px-4 py-2 text-center">NFT</th>
                <th className="px-4 py-2 text-center">Prize</th>
              </tr>
            </thead>
            <tbody className="">
              {visibleData.map((item, index) => {
                const bgColor =
                  index === 0
                    ? "bg-[#BB9E08]"
                    : index === 1
                    ? "bg-[#99958C]"
                    : index === 2
                    ? "bg-[#A46A2A]"
                    : "";

                const textColor = index < 3 ? "text-[#FFF9AD] " : "";

                return (
                  <>
                    <tr
                      key={index}
                      className={`!rounded-[30px]  ${bgColor} ${textColor}`}
                    >
                      <td className="px-4 py-2 text-center  rounded-l-[30px]">
                        {item.rank}
                      </td>
                      <td className="px-4 py-2  text-center">{item.wallet}</td>
                      <td className="px-4 py-2  text-center">{item.date}</td>
                      <td className="px-4 py-2  text-center">{item.txCount}</td>
                      <td className="px-4 py-2  text-center">{item.totalBuy}</td>
                      <td className="px-4 py-2  text-center">{item.nft}</td>
                      <td className="px-4 py-2  text-center  rounded-r-[30px]">
                        {item.prize}
                      </td>
                    </tr>
                    <tr className="h-[8px]"></tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center items-center mt-[20px] relative z-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-[#E5AE00] bg-transparent text-[16px] font-[400] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] max-w-[126px] w-[100%] h-[38px]"
          >
            {showMore ? "View Less" : "Load More"}
          </button>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[13px] text-white font-[400] relative z-10 mt-[15px]">
            The list is updated weekly and is based on transactions made during
            the BFX presale.
          </p>
        </div>

        {/* buybfx Button */}
        <div className="flex justify-center items-center mt-[20px] relative z-10">
          <button
            onClick={handleScroll}
            style={{
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className="text-{#000} px-[12px]  text-[14px] font-[600] border border-[#E5AE00] hover:border-[#E5AE00] rounded-[8px] w-[140px] h-[40px]"
          >
            Buy BFX
          </button>
        </div>

        <div className="absolute top-[0%] left-[0%]">
          <img src={ernvet1} className="" alt="BlockchainFX" />
        </div>
      </div>
    </div>
  );
}
