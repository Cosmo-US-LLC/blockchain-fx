import React from "react";
import check from "../assets/herosection/check.svg";

// import heroVideo from "../assets/herosection/heroVideo.mp4";
import heroimg from "../assets/herosection/herof.webp";
import uersrev from "../assets/herosection/Avatars.png";
import stars from "../assets/herosection/stars.png";
import arwgrn from "../assets/herosection/arwgrn.svg";
import heroicns1 from "../assets/herosection/herosvg (1).svg";
import heroicns2 from "../assets/herosection/herosvg (2).svg";
import heroicns3 from "../assets/herosection/herosvg (3).svg";

function Herosection() {

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
      const element = document.getElementById("HowDoesItSec");
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
    <div className="pt-[55px] pb-[20px] bg-[#020B10]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="flex justify-between gap-[2rem]">
          <div className="space-y-[27px] max-w-[738px] w-[100%]">
            {/* <h4 className="text-[16px]  leading-[150%] font-[600] text-[#E5AE00] tracking-[-0.16px] uppercase">
                Crypto Exchange Launches Coin with an Integrated Reward System
              </h4> */}
            <div className=" border border-white border-opacity-20 max-w-[410px]  flex  justify-center items-center rounded-full"
              style={{
                background: " linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            >
              <h4 className="text-white font-inter text-center  py-2 tracking-[-0.16px]  text-[12px]  capitalize">Crypto Exchange Launches Coin with an Integrated Reward System</h4>
            </div>
            <h1
              className="text-[60px] font-[700] pt-[] leading-[109%] tracking-[-3px text-[#fff] ">
              $BFX Pays You Every Time Someone Trades on BlockchainFX
            </h1>
            <p className="text-[#fff] max-w-[524px] w-[100%] font-[400] leading-[137.5%] text-[16px]">
            Start earning today and receive up to a maximum of 25,000 USDT in daily passive staking rewards by buying $BFX during the presale. As a holder, you earn a share of the trading fee revenue, without having to trade yourself.
            </p>

            <div className="space-y-[10px] max-w-[570px] border-[0.5px] border-[#C0C0C0] py-[17px] pl-[21px] rounded-[13px]">
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">The first crypto exchange Bridging Blockchain and Finance</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">Bitcoin, Ethereum, Gold, Stocks, Forex, ETFs, all in one place</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] capitalize font-[400] leading-[150%] text-[16px]">Awarded as the Fastest-Growing Crypto Trading App of 2025</p>
              </div>
            </div>
            <div className="flex justify-start pt-[20px] pb-[0px] items-center space-x-[17px]">
              <button
                onClick={handleScroll}
                style={{
                  background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
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
          <div className="max-w-[450px] space-y-[27px]">
            <div className="relative">
              <img src={heroimg} alt="heroimg" />
              <div
                className="px-[27px] py-[17px] max-w-[160px] absolute bottom-[10%] right-[-7%] flex items-center flex-col space-y-[10px] rounded-[10px] pr-[20px]"
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
                className="flex items-center flex-col py-[13px] space-y-[3px] px-5 rounded-[10px]"
                style={{
                  background: "background: rgba(3, 15, 22, 0.30)",
                  border: "1.5px solid rgba(230, 175, 3, 0.30)",
                }}
              >
                <img className="w-[82px] h-[15px]" loading="lazy" src={stars} alt="star" />
                <p className="text-[#fff] font-[400] text-[16px] leading-[100%]">
                  4.87/5{" "}
                </p>
              </div>
            </div>
          </div>



          {/* <div className="absolute max-h-[130px] max-w-[130px] top-[6%] left-[7%]">
            <img loading="lazy" src={herove1} className="" alt="cCrypto Presale" />
          </div>
          <div className="absolute max-h-[110px] max-w-[110px] bottom-[13%] left-[12%]">
            <img loading="lazy" src={herove3} className="" alt="Trading Strategy Tools" />
          </div>
          <div className="absolute max-h-[130px] max-w-[130px] top-[6%] right-[8%]">
            <img loading="lazy" src={herove2} className="" alt="crypto coins before exchange listing" />
          </div>
          <div className="absolute max-h-[110px] max-w-[110px] bottom-[12%] right-[12%]">
            <img loading="lazy" src={herove4} className="" alt="crypto coins before exchange listing" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
