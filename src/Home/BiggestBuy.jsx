import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BiggestBuy() {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
    const [tableData, setTableData] = useState([]);
  const visibleData = showMore ? tableData : tableData.slice(0, 5);


useEffect(() => {
  async function fetchTopBuyers() {
    try {
      const res = await fetch(
        "https://api.presale.gg/v1/projects/blockchainfx/top-buyers"
      );
      const data = await res.json();

      const prizeList = [
        50000,
        20000,
        10000,
        5000,
        3000,
        2500,
        2000,
        1800,
        1500,
        1000
      ];

      const formatted = data
        .slice(0, 10) 
        .map((item, idx) => {
          const totalBuyValue = Number(item.total_usd_spent);

          const getNFTLevel = (value) => {
            if (value >= 100000) return "Legend";
            if (value >= 50000) return "Elite";
            if (value >= 25000) return "Master";
            if (value >= 10000) return "Expert";
            if (value >= 5000) return "Pro";
            if (value >= 2500) return "Advance";
            if (value >= 1000) return "Novice";
            return "-";
          };

          return {
            rank: `${idx + 1}${getOrdinalSuffix(idx + 1)}`,
            wallet: shortenWallet(item.wallet_address),
            date: formatDate(item.date_joined),
            txCount: item.transaction_count,
            totalBuy: `$${totalBuyValue.toLocaleString()}`,
            nft: getNFTLevel(totalBuyValue),
            prize:
              prizeList[idx] !== undefined
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

 
   function shortenWallet(wallet) {
    if (!wallet) return "";
    return `${wallet.slice(0, 4)}...${wallet.slice(-4)}`;
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toISOString().split("T")[0];
  }

  function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  return (
    <div className="flex items-center justify-center bg-[#020B10] pt-[50px] pb-[50px] px-[80px]">
      <div className="px-6 py-[30px] w-full max-w-[1200px] overflow-hidden relative min-h-[550px]  rounded-[16px] bg-[#030F16] border-[1px] border-[#575757]">
        <div className="flex flex-col justify-center items-center relative z-10 space-y-[29px] mb-[25px]">
          <h4 className="text-[40px] font-[800] text-white leading-[120%]">
            {t("biggest_buy.title")}
          </h4>
          <p className="text-[18px] text-white !text-center font-[400] leading-[150%] w-[980px]">
            {t("biggest_buy.description")}
          </p>
        </div>

        {/* Table */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full text-white table-auto">
            <thead>
              <tr className="text-[#E5AE00] font-[700] text-left">
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.rank")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.wallet")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.date")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.tx_count")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.total_buy")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.nft")}</th>
                <th className="px-4 py-2 text-center">{t("biggest_buy.table.prize")}</th>
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
                      <td className="px-4 py-2  text-center">{t(`nft.${item.nft.toLowerCase()}`)}</td>
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
            className="hover:text-white hover:bg-[#E5AE00] px-[15px] text-[#E5AE00] bg-transparent text-[16px] font-[400] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px]  inline-flex items-center h-[38px]"
          >
            {showMore ? t("biggest_buy.view_less") : t("biggest_buy.load_more")}
          </button>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[13px] text-white font-[400] relative z-10 mt-[15px]">
            {t("biggest_buy.note")}
          </p>
        </div>

      </div>
    </div>
  );
}
