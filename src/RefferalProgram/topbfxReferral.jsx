import React from "react";
import ProgramReferral from "../assets/ReferralProgram/ProgramReferral.jpg";
import ReferralMobileImage from "../assets/ReferralProgram/ReferralMobileImage.jpg"

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
    <div className=" pt-[0px] sm:pt-[55px] pb-[20px] bg-[#020B10] h-full">
      <div className="max-w-[1200px] relative w-[100%] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-stretch space-x-[0%] sm:space-x-[4%]">
          <div className="w-[100%] px-[4%] sm:px-[0%] sm:w-[50%] grow">
            <img
              src={ProgramReferral}
              alt="Referral Image"
              className="h-full object-cover hidden sm:block"
            />
            <img
              src={ReferralMobileImage}
              alt="Referral Mobile"
              className="h-full object-cover block sm:hidden"
            />
          </div>
          <div className="w-[100%] sm:w-[50%] px-[4%] 2xl:px-[4%] lg:px-[3%] md:px-[0%] h-full min-h-full">
            <div className="pt-[25px] pb-[10px] sm:pb-[20px] bg-[#020B10]">
              <div className="space-y-[10px]">
                <h1 className=" text-[28px] sm:text-[40px] pt-[15px] font-[600] leading-[120%] tracking-[-1px] text-[#fff] text-center font-inter">
                  TOP BFX REFERRERS
                </h1>
              </div>
            </div>
            <div>
              <div className="mx-auto">
                <div className="overflow-x-auto mx-auto">
                  <table className="w-full mx-auto ">
                    <thead>
                      <tr className="">
                        <th className="py-4">
                          <div className="flex flex-col justify-center space-y-2">
                            <p className="text-[12px] sm:text-[16px] text-[#fff] text-start font-[500] sm:font-[500] leading-[100%] font-inter">
                              Rank
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col justify-center space-y-2">
                            <p className="text-[12px] sm:text-[16px] text-[#fff] text-start font-[500] sm:font-[500] leading-[100%] font-inter">
                              Wallet
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col justify-center space-y-2">
                            <p className="text-[12px] sm:text-[16px] text-[#fff] text-end font-[500] sm:font-[500] leading-[100%]font-inter">
                              Referred Total
                            </p>
                          </div>
                        </th>
                        <th className="py-4">
                          <div className="flex flex-col justify-center space-y-2">
                            <p className="text-[12px] sm:text-[16px] text-[#fff] text-end font-[500] sm:font-[500] leading-[100%]font-inter">
                              Referrals
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody
                      className="overflow-hidden bg-[#030F16] rounded-[16px] space-y-[26px] w-[100%] mx-auto"
                      style={{
                        border: "1px solid #ffffff",
                      }}
                    >
                      {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="!h-[51px]" >
                          {Object.entries(row).map(([key, value], colIndex) => (
                            <td
                              key={key}
                              className={`px-2 sm:px-4 py-[13px] !h-[57px] border-b border-[#CCD2DD] ${
                                colIndex === 1
                                  ? " text-[12px] sm:text-[14.7px] border-b border-[#CCD2DD] font-inter"
                                  : ""
                              } ${
                                colIndex === 1
                                  ? rowIndex <= 2
                                    ? "text-[12px] sm:text-[16px] text-[#fff] font-[400] sm:font-[600] !text-start !w-[20%] !px-0 bg-[#242424] font-inter"
                                    : "font-[400] sm:font-[500] text-[#fff] text-[12px] sm:text-[16px] !w-[20%] !text-start !px-0 !bg-transparent font-inter"
                                  : ""
                              } ${
                                colIndex === 2
                                  ? rowIndex <= 2
                                    ? "text-[12px] sm:text-[16px] text-[#fff] font-[400] sm:font-[600] !text-end !w-[30%] !px-0 bg-[#242424] font-inter"
                                    : "font-[400] sm:font-[500] text-[#fff] text-[12px] sm:text-[16px] !w-[30%] !text-end !px-0 font-inter"
                                  : ""
                              } ${
                                colIndex >= 3
                                  ? rowIndex <= 2
                                    ? "text-[12px] sm:text-[16px] text-[#FED34D] font-[400] sm:font-[600] !text-end bg-[#242424] !w-[20%] font-inter"
                                    : "font-[400] sm:font-[500] text-[#fff] text-[12px] sm:text-[16px] !text-end bg-transparent !w-[20%] font-inter"
                                  : ""
                              }} 
                              ${
                                colIndex === 0
                                  ? rowIndex <= 2
                                    ? "border-l-5 bg-[#242424] text-[12px] sm:text-[16px] text-[#fff] font-[400] sm:font-[600] font-inter"
                                    : "text-[12px] sm:text-[16px] text-[#fff] font-[400] sm:font-[500] font-inter"
                                  : ""
                              } ${
                                colIndex === tableData[0].length - 1
                                  ? "border-r-0 border-l-0 !text-start "
                                  : "border-r-0"
                              }
                               ${
                                 rowIndex === tableData.length - 1
                                   ? colIndex === 0
                                     ? "border-l-0 border-b-0"
                                     : colIndex === tableData[0].length - 1
                                     ? "!border-r-0 border-b-0 border-l-0"
                                     : "border-b-0 border-r-0"
                                   : ""
                               }
                              `}
                            >
                              {value.startsWith("/") ? (
                                <img
                                  src={value}
                                  alt={`Row ${rowIndex + 1} Col ${
                                    colIndex + 1
                                  }`}
                                  className="mx-auto w-[6%] h-[22.6px]"
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
                <div className="max-w-[95%] mx-auto bg-[#020B10]">
                  <p className=" text-[15px] sm:text-[16px] pt-[15px] font-[400] leading-[130%] tracking-[-1px] text-[#fff] text-center font-inter">
                    Got a strong crypto community? Let’s build something big
                    together. Earn cashback on every purchase your members make.
                    If your group has 1,000+ members, contact{" "}
                    <a
                      href="https://t.me/BFXMAX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[1px] underline-offset-[4px] font-inter"
                    >
                      @BFXMAX
                    </a>{" "}
                    on Telegram and let’s connect!
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
