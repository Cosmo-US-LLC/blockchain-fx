import React from "react";
import { useTranslation } from "react-i18next";
import heroimg from "../assets/herosection/herof.webp";
import uersrev from "../assets/herosection/Avatars.png";
import stars from "../assets/herosection/stars.png";
import arwgrn from "../assets/herosection/arwgrn.svg";
import heroicns1 from "../assets/herosection/herosvg (1).svg";
import heroicns2 from "../assets/herosection/herosvg (3).svg";
import heroicns3 from "../assets/herosection/herosvg (2).svg";
import check from "../assets/herosection/check.svg";

import herobnr1 from "../assets/herosection/bnrhero (4).svg";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";

function MobileHero() {
  const { t } = useTranslation(); // Hook for translations

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  const handleScrollToDemo = () => {
    setTimeout(() => {
      const element = document.getElementById("MobileDemo");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[22px] pb-[15px] bg-[#020B10]">
      <div className=" w-[90%] mx-auto ">
        <div className="">
          <div className="flex flex-col ">
            {/* <h4 className="text-[9px] mb-1 leading-[24px] font-[600] text-[#E5AE00] tracking-[-0.4px] uppercase">
                     Crypto Exchange Launches Coin with an Integrated Reward System
                   </h4> */}
            <div
              className=" border border-white border-opacity-20  max-w-[480px] w-[100%] mx-auto  justify-center items-center rounded-full"
              style={{
                background:
                  " linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            >
              <h4 className="text-white font-[600] font-inter px-1 py-2 tracking-[-0.24px] text-center text-[10px]  capitalize">
                Crypto Exchange Launches Coin with an integrated reward system
              </h4>
            </div>
            <h1 className="text-[32px] mb-4 mt-4 text-center font-[700] manrope leading-[120%] tracking-[-2px] text-[#fff] ">
             $BFX Pays You Every Time Someone Trades on BlockchainFX
            </h1>
            <p className="text-[#fff] mb-4  text-center font-[400] leading-[157%] tracking-[-0.14px] text-[14px]">
             Start earning today and receive up to a maximum of 25,000 USDT in daily passive staking rewards by buying $BFX during the presale. As a holder, you earn a share of the trading fee revenue, without having to trade yourself.
            </p>

            <div className="flex flex-col gap-2 border border-[#C0C0C0] py-5 px-3 rounded-[13px]">
              <div className="flex items-center space-x-3">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[157%] text-[13px]">
                  The first crypto exchange Bridging Blockchain and Finance across 500+ Assets
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[157%] text-[13px]">
                  Bitcoin, Ethereum, Gold, Stocks, Forex, ETFs, Options, Futures, all in one place
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={check} alt="" />
                <p className="text-[#fff] capitalize font-[400] leading-[157%] text-[13px]">
                 BlockchainFX has been awarded as the  Fastest-Growing Crypto Trading App of 2025
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[450px] pt-[30px] space-y-[27px]">
            <div className="relative flex justify-center">
              <img src={heroimg} alt="heroimg" />
                            <div
                              className="px-[27px] py-[17px] max-w-[160px] absolute bottom-[10%] right-[-2%] flex items-center flex-col space-y-[10px] rounded-[10px] pr-[20px]"
                              style={{
                                borderRadius: "9.617px",
                                border: "1px solid #FFF",
                                background: "rgba(0, 0, 0, 0.21)",
                                backdropFilter: "blur(17.899999618530273px)"
                              }}
                            >
                              <h4 className="text-[#fff] text-[12px] font-[400] leading-[68.691%]">Earned Last Week</h4>
                              <h5 className="text-[18.547px] font-[700] flex items-center leading-[100%] text-[#FFF]">$2,748 <span className="text-[12px] pl-2 text-[#1ACE2E] flex  items-center leading-[86.937%] font-[700]"><img src={arwgrn} alt="" />+13%</span> </h5>
                            </div>
            </div>
            <div className="flex justify-center items-center space-x-[20px]">
              <img src={heroicns1} alt="" />
              <img src={heroicns2} alt="" />
              <img src={heroicns3} alt="" />
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex flex-col items-center">
                <img src={uersrev} loading="lazy" alt="reviews" />
                <p className="text-[#fff] font-[400] text-[16px]">
                  Verified Ratings
                </p>
              </div>
              <div
                className="flex space-x-2 items-center flex-col py-3 px-5 rounded-[10px]"
                style={{
                  background: "background: rgba(3, 15, 22, 0.30)",
                  border: "1.5px solid rgba(230, 175, 3, 0.30)",
                }}
              >
                <img
                  className="w-[82px] h-[15px]"
                  loading="lazy"
                  src={stars}
                  alt="star"
                />
                <p className="text-[#fff] font-[400] text-[17.702px]">
                  4.87/5{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-[0px] items-center space-x-[17px]">
              <button
                onClick={handleScroll}
                style={{
                  background:
                    "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
                className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]"
              >
                Buy $BFX
              </button>

              <button
                onClick={handleScrollToDemo}
                className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[138px] rounded-[8px] !w-[100%] h-[50px]"
              >
                How it works?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-2 border-[1px] w-[90%] mx-auto mt-[30px] border-[#262626] h-[72px]  flex flex-col items-center p-2 rounded-[6px] ">
        <p className="font-[600] relative z-[99] text-[15px] text-center text-[white]">
          Featured In:
        </p>
        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal object-cover"
              src={herobnr1}
              alt="Featured"
            />
          </a>
          <a
            href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal object-cover"
              src={herobnr2}
              alt="Featured"
            />
          </a>
          <a
            href="https://www.binance.com/en/square/post/21135762162242"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal object-cover"
              src={herobnr3}
              alt="Featured"
            />
          </a>
          <a
            href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal object-cover"
              src={herobnr4}
              alt="Featured"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
