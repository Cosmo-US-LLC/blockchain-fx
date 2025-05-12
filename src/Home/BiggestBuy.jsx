import React, { useState } from "react";
import ernvet1 from "../assets/BiggestBuy/biggest_bg.png";

export default function BiggestBuy() {
  const [showMore, setShowMore] = useState(false);

  const tableData = [
    {
      rank: 1,
      wallet: "0x589...18e01",
      date: "2025-05-02",
      txCount: 3,
      totalBuy: "$124,590.58",
      nft: "Legend",
      prize: "$50,000",
    },
    {
      rank: 2,
      wallet: "0x2b...b37d",
      date: "2025-11-04",
      txCount: 2,
      totalBuy: "$63,560.79",
      nft: "Elite",
      prize: "$20,000",
    },
    {
      rank: 3,
      wallet: "0x6ce...62f8",
      date: "2025-05-03",
      txCount: 15,
      totalBuy: "$92,169.19",
      nft: "Elite",
      prize: "$10,000",
    },
    {
      rank: 4,
      wallet: "0x71c...9ec98",
      date: "2023-10-06",
      txCount: 13,
      totalBuy: "$35,143.44",
      nft: "Master",
      prize: "$5,000",
    },
    {
      rank: 5,
      wallet: "0x5e...7676",
      date: "2023-09-04",
      txCount: 4,
      totalBuy: "$24,710.55",
      nft: "Expert",
      prize: "$3,000",
    },
    {
      rank: 6,
      wallet: "0x03...109c",
      date: "2025-05-06",
      txCount: 5,
      totalBuy: "$62,845.92",
      nft: "Master",
      prize: "$2,500",
    },
    {
      rank: 7,
      wallet: "0x3b...92f7",
      date: "2025-07-07",
      txCount: 2,
      totalBuy: "$45,000.00",
      nft: "Expert",
      prize: "$2,000",
    },
    {
      rank: 8,
      wallet: "0x72...91b0",
      date: "2025-06-10",
      txCount: 3,
      totalBuy: "$37,400.00",
      nft: "Elite",
      prize: "$1,800",
    },
    {
      rank: 9,
      wallet: "0xa9...24b5",
      date: "2025-03-15",
      txCount: 4,
      totalBuy: "$40,210.00",
      nft: "Legend",
      prize: "$1,500",
    },
    {
      rank: 10,
      wallet: "0x89...c74e",
      date: "2025-02-20",
      txCount: 1,
      totalBuy: "$15,729.20",
      nft: "NFT",
      prize: "$1,000",
    },
  ];

  const visibleData = showMore ? tableData : tableData.slice(0, 5);

  return (
    <div className="flex items-center justify-center bg-[#000] pt-[50px] pb-[50px] px-[80px]">
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
        <div className="overflow-x-auto relative z-10">
          <table className="table-auto w-full text-white">
            <thead>
              <tr className="text-[#E5AE00] font-[700] text-left">
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Wallet</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Transactions</th>
                <th className="px-4 py-2">Total Buy</th>
                <th className="px-4 py-2">NFT</th>
                <th className="px-4 py-2">Prize</th>
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
                  <tr key={index} className={`!rounded-[30px]  ${bgColor} ${textColor}`}>
                    <td className="px-4 py-2   rounded-l-[30px]">{item.rank}</td>
                    <td className="px-4 py-2  ">{item.wallet}</td>
                    <td className="px-4 py-2  ">{item.date}</td>
                    <td className="px-4 py-2  ">{item.txCount}</td>
                    <td className="px-4 py-2  ">{item.totalBuy}</td>
                    <td className="px-4 py-2  ">{item.nft}</td>
                    <td className="px-4 py-2   rounded-r-[30px]">{item.prize}</td>
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

        <div className="flex justify-center items-center">
          <p className="text-[13px] text-white font-[400] relative z-10 mt-[15px]">
            The list is updated weekly and is based on transactions made during
            the BFX presale.
          </p>
        </div>

        <div className="absolute top-[0%] left-[0%]">
          <img src={ernvet1} className="" alt="BlockchainFX" />
        </div>
      </div>
    </div>
  );
}
