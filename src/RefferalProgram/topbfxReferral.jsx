import React from "react";
import ProgramReferral from "../assets/ReferralProgram/ProgramReferral.jpg";

const tableData = [
  {
    col1: "1",
    col2: "0x408a8...1e26e2a5",
    col3: "$1.09K",
    col4: "1",
  },
  {
    col1: "2",
    col2: "0x52cab...a89580af",
    col3: "$114.00",
    col4: "1",
  },
  {
    col1: "3",
    col2: "0x39217...fa9f3f60",
    col3: "$98",
    col4: "1",
  },
  {
    col1: "4",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "5",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "6",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "7",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "8",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "9",
    col2: "-",
    col3: "-",
    col4: "-",
  },
  {
    col1: "10",
    col2: "-",
    col3: "-",
    col4: "-",
  },
];

function TopBFXReferral() {
  return (
    <div className="pt-[55px] pb-[20px] bg-[#020B10]">
      <div className="max-w-[1300px] w-[100%] mx-auto ">
        <div className="flex justify-center items-center space-x-[90px]">
          <div>
            <img src={ProgramReferral} alt="Referral Image" />
          </div>
          <div>
            <div className="pt-[25px] pb-[20px] bg-[#020B10]">
              <div className="space-y-[10px]">
                <h1 className=" text-[40px] pt-[15px] font-[600] leading-[120%] tracking-[-1px] text-[#fff] text-center">
                  TOP BFX REFERRERS
                </h1>
              </div>
            </div>
            <div>
              <div className="max-w-[540px] mx-auto">
                <div className="overflow-x-auto mx-auto">
                  <table className="w-full mx-auto ">
                    <thead>
                      <tr className="">
                        <th className="py-4">
                          <div className="flex  flex-col itens-center justify-center space-y-2">
                            <p className="text-[16px] text-[#fff] text-center font-[700] leading-[100%]">
                              Rank
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col itens-center justify-center space-y-2">
                            <p className="text-[16px] text-[#fff] text-center font-[700] leading-[100%]">
                              Wallet
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col itens-center justify-center space-y-2">
                            <p className="text-[16px] text-[#fff] text-center font-[700] leading-[100%]">
                              Referred Total
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col itens-center justify-center space-y-2">
                            <p className="text-[16px] text-[#fff] text-center font-[700] leading-[100%]">
                              Referrals
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody
                      className="overflow-hidden bg-[#030F16] rounded-[16px] space-y-[26px] w-[100%] mx-auto"
                      style={{
                        border: "1px solid #2B2B2B",
                        // box-shadow: 0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30);
                      }}
                    >
                      {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="!h-[51px]">
                          {Object.entries(row).map(([key, value], colIndex) => (
                            <td
                              key={key}
                              className={` px-4 py-[13px] !h-[57px] border-b border-[#a6a6a638] ${
                                colIndex === 1
                                  ? "text-[14.7px] border-b border-[#a6a6a638]"
                                  : ""
                              } ${
                                rowIndex <= 2 && colIndex >= 1 && colIndex <= 4
                                  ? "text-[16px] text-[#ACC4D1] font-[600] text-center !w-[225px]"
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
                                  alt={`Row ${rowIndex + 1} Col ${
                                    colIndex + 1
                                  }`}
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
                <div className="max-w-[500px] mx-auto bg-[#020B10]">
                  <p className=" text-[16px] pt-[15px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] text-center">
                    Got a strong crypto community? Let’s build something big
                    together. Earn cashback on every purchase your members make.
                    If your group has 1,000+ members, contact @BFXMAX on
                    Telegram and let’s connect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBFXReferral;
