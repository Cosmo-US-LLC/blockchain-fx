import React from "react";

import media3 from "../assets/Press&Media/media3.svg";
import media2 from "../assets/Press&Media/media2.svg";
import medai1 from "../assets/Press&Media/medicn (3).svg";

function PressMediaSec() {
  return (
    <div className="bg-[#020B10] pt-[50px] pb-[50px] px-[80px] space-y-[35px]">
      <div className="space-y-[25px]">
          <h3 className="text-[48px] font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
            Press & Media
          </h3>
        </div>
      <div className="max-w-[1280px] relative space-y-[40px] w-[100%] mx-auto ">
        
        <div className="flex gap-x-4 justify-center">
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px]  px-[17.6px] py-[37px] w-[100%] "
          style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}
          >
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={medai1} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
              BlockchainFX is quickly becoming the go-to trading platform in 2025, offering access to 500+ assets and rewarding benefits for users
              </p>
              <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">Read Article</a>
            </div>
          </div>
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px]  px-[17px] py-[37px] w-[100%] "
                    style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}

          >
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={media2} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
              BlockchainFX is set to revolutionise the trading landscape as the first all-in-one crypto trading platform.              </p>
              <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">Read Article</a>
            </div>
          </div>
          <div className="bg-[#030F16] max-w-[400px] rounded-[8px]  px-[17.6px] pt-[37px] pb-[29px] w-[100%] "
                    style={{ border: "1px solid rgba(230, 175, 3, 0.12)" }}

          >
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img src={media3} className="h-[44px]" alt="" />
              </div>
              <p className="text-[15px] text-[#fff] text-center leading-[187.5%] font-[400]">
              BlockchainFX is the first trading app that lets users earn daily USDT passive income directly from trading fees.              </p>
              <a href="https://techbullion.com/blockchainfx-the-first-ever-platform-where-you-can-trade-bitcoin-btc-apple-aapl-instantly/" target="_blank" className="text-[15px] flex justify-center underline text-[#E5AE00]" rel="noopener noreferrer">Read Article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
