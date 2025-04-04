import React from "react";
import takeimg1 from "../assets/TradeOver/trdimg (5).webp";
import takeimg2 from "../assets/TradeOver/trdimg (4).webp";
import takeimg3 from "../assets/TradeOver/trdimg (3).webp";
import takeimg4 from "../assets/TradeOver/trdimg (2).webp";
import takeimg5 from "../assets/TradeOver/trdimg (1).webp";

function TradeOverSec() {
  return (
    <div className="py-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] w-[100%] mx-auto space-y-[30px]">
        <h3 className="text-[40px] text-[#fff] font-[700] capitalize leading-[155%] text-center">
          More Than 500 Different Assets
        </h3>

        {/* First Row (2 Cards) */}
        <div className="flex justify-center gap-4">
          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[310px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img src={takeimg1} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                Crypto
              </h3>
              <p className="text-[16px] font-[400] italic text-[#8497A2] leading-[157.143%] tracking-[-0.32px]">
                Trade BTC, ETH, SOL, PEPE, DOGE, TRUMP, and more with leverage and advanced trading tools.
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[310px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img src={takeimg2} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                Stocks
              </h3>
              <p className="text-[16px] italic font-[400] text-[#8497A2] leading-[157.143%] tracking-[-0.32px]">
                Apple, Tesla, Nvidia, Netflix, Coca Cola and more. Buy your favorite stock in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row (3 Cards) */}
        <div className="flex justify-center gap-4">
          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[310px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img src={takeimg3} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                Forex
              </h3>
              <p className="text-[16px] italic font-[400] text-[#8497A2] leading-[157.143%] tracking-[-0.32px]">
                USD, EUR, JPY, GBP, AUD, and more. Trade over 60 currency pairs in the dynamic forex market.
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[310px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img src={takeimg4} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                Commodities
              </h3>
              <p className="text-[16px] italic font-[400] text-[#8497A2] leading-[157.143%] tracking-[-0.32px]">
                Gold, Silver, Oil, Sugar, and many more. Diversify your portfolio with valuable raw materials.
              </p>
            </div>
          </div>

          <div
          style={{
            border:"1px solid rgba(230, 175, 3, 0.12)"
          }}
          className="rounded-[16px] min-h-[310px] overflow-hidden pb-[14px]  w-[100%] space-y-[13px] bg-[#030F16]">
            <img src={takeimg5} className="min-h-[167px] w-[100%] object-cover" alt="" />
            <div className="space-y-[4px] px-[14px]">
              <h3 className="text-[24px] text-[#fff] font-[600] leading-[140%] tracking-[-0.32px]">
                Indices
              </h3>
              <p className="text-[16px] italic font-[400] text-[#8497A2] leading-[157.143%] tracking-[-0.32px]">
                Dow Jones, S&P 500, Nasdaq, DAX, CAC, and many more. Trade the most popular indices.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TradeOverSec;
