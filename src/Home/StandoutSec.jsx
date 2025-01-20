import React from "react";

import coin1 from "../assets/StandoutSec/tblcoins (1).svg";
import coin2 from "../assets/StandoutSec/tblcoins (2).svg";
import coin3 from "../assets/StandoutSec/tblcoins (3).svg";
import coin4 from "../assets/StandoutSec/tblcoins (4).svg";
import check1 from "../assets/StandoutSec/check (2).svg";
import check2 from "../assets/StandoutSec/check (1).svg";

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
    col1: "Indices ",
    col2: check1,
    col3: check2,
    col4: check2,
    col5: check2,
  },
  {
    col1: "CFDs",
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
];

function StandoutSec() {
  return (
    <div className="pt-[72px] space-y-[35px] pb-[71px]">
      <div className="max-w-[1220px] space-y-[60px] w-[100%] mx-auto ">
        <div className="space-y-[40px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Standout Features
          </h3>
          <p className="text-[20px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Cryptocurrencies from exchanges and trading platforms have
            historically performed well, fueled by a growing user base, an
            active trading community driving organic trading volume, and
            platform revenue reinvested into new features, continuous updates,
            and consistent marketing. $BFX, the latest cryptocurrency in this
            segment, stands out as the first token from a multi-asset trading
            platform, offering innovative features that deliver significant
            value to the market.
          </p>
        </div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="w-full  ">
              <thead>
                <tr>
                  <th className="border-b  border-r border-b border-black px-4 py-4"></th>
                  <th className="border-b bg-[#FFF8DC] border-l border-r border-b border-black px-4 py-4">
                    <div className="flex  flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img
                          className="w-[64.431px] h-[64.431px]"
                          src={coin1}
                          alt=""
                        />
                      </div>
                      <p className="text-[13.946px] text-[#545454] text-center font-[700] leading-[100%]">
                        BlockchainFX
                      </p>
                    </div>
                  </th>
                  <th className="border-b border-l border-r border-b border-black px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img
                          className="w-[64.431px] h-[64.431px]"
                          src={coin2}
                          alt=""
                        />
                      </div>
                      <p className="text-[13.946px] text-[#545454] text-center font-[700] leading-[100%]">
                        BlockchainFX
                      </p>
                    </div>
                  </th>
                  <th className="border-b border-l border-r border-b border-black px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img
                          className="w-[64.431px] h-[64.431px]"
                          src={coin3}
                          alt=""
                        />
                      </div>
                      <p className="text-[13.946px] text-[#545454] text-center font-[700] leading-[100%]">
                        BlockchainFX
                      </p>
                    </div>
                  </th>
                  <th className="border-b border-l border-b border-black px-4 py-4">
                    <div className="flex flex-col itens-center justify-center space-y-2">
                      <div className="flex justify-center items-center">
                        <img
                          className="w-[64.431px] h-[64.431px]"
                          src={coin4}
                          alt=""
                        />
                      </div>
                      <p className="text-[13.946px] text-[#545454] text-center font-[700] leading-[100%]">
                        BlockchainFX
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td
                        key={key}
                        className={`border border-[#A6A6A6] px-4 py-4 text-center ${
                          colIndex === 1 ? "bg-[#FFF8DC]" : ""
                        } ${
                          rowIndex <= 2 && colIndex >= 1 && colIndex <= 4
                            ? "text-[20px] font-[600]"
                            : "text-[15.988px] font-[500]"
                        } ${
                          rowIndex === tableData.length - 1
                            ? colIndex === 0
                              ? "border-l-0 border-b-0"
                              : colIndex === tableData[0].length - 1
                              ? "!border-r-0 border-b-0"
                              : "border-b-0 border-r-0"
                            : ""
                        }`}
                      >
                        {value.startsWith("/") ? (
                          <img
                            src={value}
                            alt={`Row ${rowIndex + 1} Col ${colIndex + 1}`}
                            className="mx-auto"
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
      </div>
    </div>
  );
}

export default StandoutSec;
