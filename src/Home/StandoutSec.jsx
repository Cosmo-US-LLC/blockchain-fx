import React from "react";
import { useTranslation } from "react-i18next";

import coin1 from "../assets/StandoutSec/tblcoins (1).svg";
import coin2 from "../assets/StandoutSec/tblcoins (2).svg";
import coin3 from "../assets/StandoutSec/tblcoins (3).svg";
import coin4 from "../assets/StandoutSec/tblcoins (4).webp";
import check1 from "../assets/StandoutSec/check (2).svg";
import check2 from "../assets/StandoutSec/check (1).svg";

import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

const tableData = [
  {
    col1: "Token Name",
    col2: "$BFX",
    col3: "$BGB",
    col4: "$HYPE",
    col5: "$UNI",
  },
  {
    col1: "Ranked",
    col2: "-",
    col3: "#24",
    col4: "#27",
    col5: "#28",
  },
  {
    col1: "Marketcap",
    col2: "-",
    col3: "$12.26 Billion",
    col4: "$8.77 Billion",
    col5: "$8.08 Billion",
  },
  {
    col1: "Trade Crypto",
    col2: check1,
    col3: check1,
    col4: check1,
    col5: check1,
  },
  {
    col1: "Leverage Trading",
    col2: check1,
    col3: check1,
    col4: check1,
    col5: check2,
  },
  {
    col1: "Risk Management",
    col2: check1,
    col3: check1,
    col4: check2,
    col5: check2,
  },
  {
    col1: "Forex",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
  {
    col1: "Commodities ",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
  {
    col1: "CFDs ",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
  {
    col1: "ETFs",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
  {
    col1: "USDT Rewards",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
];

function StandoutSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] px-[60px] bg-[#000]">
      <div className="max-w-[1200px] py-[50px] relative overflow-hidden bg-[#111] rounded-[16px] space-y-[26px] w-[100%] flex flex-col mx-auto"
       style={{
        border: "1px solid #2B2B2B"
        // box-shadow: 0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30);
      }}
      >
        <div className="space-y-[14px]">
          <h3 className="text-[40px] font-[700] text-center leading-[48px] text-[#ffff] tracking-[-1px]">
          Standout Features
          </h3>
          <p className="text-[18px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#fff] tracking-[-0.32px]">
          Cryptocurrencies from exchanges have historically performed well due to their active user base, platform revenue, and ongoing marketing. BFX, the first token from a multi-asset trading platform, <br /> offers unique features that bring real value to the market.
          </p>
        </div>
        <div className="max-w-[1080px] w-full mx-auto">
          <div className="overflow-x-auto mx-auto">
            <table className="w-full  mx-auto ">
              <thead>
                <tr className="h-[123px]">
                  <th className="border-b border-[#A6A6A6] px-4 py-4"></th>
                  <th className="border-b border-[#A6A6A6] px-4 py-4">
                    <div className="flex  flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img className="w-[58px] h-[58px]" src={coin1} alt="best crypto presales to buy now" />
                      </div>
                      <p className="text-[20.346px] text-[#fff] text-center font-[700] leading-[100%]">
                        BlockchainFX
                      </p>
                    </div>
                  </th>
                  <th className="border-b border-[#A6A6A6] px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img className="w-[58px] h-[58px]" src={coin2} alt="best crypto presales to buy now" />
                      </div>
                      <p className="text-[20.346px] text-[#fff] text-center font-[700] leading-[100%]">
                        Bitget
                      </p>
                    </div>
                  </th>
                  <th className="border-b  border-[#A6A6A6] px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img className="w-[58px] h-[58px]" src={coin3} alt="best crypto presales to buy now" />
                      </div>
                      <p className="text-[20.346px] text-[#fff] text-center font-[700] leading-[100%]">
                        Hyperliquid
                      </p>
                    </div>
                  </th>
                  <th className="border-b  border-[#A6A6A6] px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img className="w-[58px] h-[58px] object-cover" src={coin4} alt="best crypto presales to buy no" />
                      </div>
                      <p className="text-[20.346px] text-[#fff] text-center font-[700] leading-[100%]">
                        Uniswap
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody >
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="!h-[51px]">
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td
                        key={key}
                        className={` px-4 py-[13px] !h-[70px] border-b border-[#a6a6a638] ${
                          colIndex === 1 ? "text-[14.7px] border-b border-[#a6a6a638]" : ""
                        } ${
                          rowIndex <= 2 && colIndex >= 1 && colIndex <= 4
                            ? "text-[16px] text-[#fff] font-[600] text-center !w-[225px]"
                            : "font-[500] text-[#fff] text-[16px] !w-[183px]"
                        } ${colIndex === 0 ? "border-l-5" : ""} ${
                          colIndex === tableData[0].length - 1
                            ? "border-r-0 border-l-0 !text-start "
                            : "border-r-0"
                        } ${
                          rowIndex === tableData.length - 1
                            ? colIndex === 0
                              ? "border-l-0 border-b-0"
                              : colIndex === tableData[0].length - 1
                              ? "!border-r-0 border-b-0 border-l-0"
                              : "border-b-0 border-r-0"
                            : ""
                        }`}
                      >
                        {value.startsWith("/") ? (
                          <img
                            src={value}
                            alt={`Row ${rowIndex + 1} Col ${colIndex + 1}`}
                            className="mx-auto w-[22.6px] h-[22.6px]"
                          />
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute top-[-8%] left-[-5%]">
                            <img src={ernvet2} className=" " alt="" />
                          </div>
                          <div className="absolute bottom-[0%] right-[0%]">
                            <img src={ernvet1} className="" alt="" />
                          </div>
      </div>
    </div>
  );
}

export default StandoutSec;
