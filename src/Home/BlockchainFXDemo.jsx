import React from "react";
import { useTranslation } from "react-i18next";
import liveVideo from "../assets/BlockchainFXDemo/bfx-demo.mp4";
import ernvet2 from "../assets/BlockchainFXDemo/ellipse2.png";
import whitepaper from "../assets/Whitepaper/instantSwap.gif";

function BlockchainFXDemo() {
  const { t } = useTranslation();

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

  const handleScroll2 = () => {
    setTimeout(() => {
      const element = document.getElementById("insideSec");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 130;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="flex items-center bg-[#020B10] pt-[50px]" id="desktopDemo">
      <div className="max-w-[1200px] relative overflow-hidden  w-[100%] mx-auto border-[1px] border-[#575757] bg-[#020B10] relative rounded-[24px] pb-[30px]">
        <div className="flex justify-between items-center gap-[2rem]">
          <div className="flex justify-end items-center gap-5 relative z-[99]">
            <div className="w-[45%] space-y-[20px] pl-[70px] py-[60px]">
              <h4 className="text-[40px] text-[#fff] font-[600]">
                BlockchainFX Demo
              </h4>
              <p className="text-[#fff] text-[18px] font-[500]">
                In just a few seconds, users can trade BTC,Tesla, Gold, Pepe,
                ETFs, CFDs, and more, all seamlessly <br /> on one powerful
                platform.
              </p>
              <div className="flex justify-start pt-[20px] pb-[0px] items-center space-x-[17px]">
                <button
                  onClick={handleScroll}
                  style={{
                    background:
                      "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                  }}
                  className="text-[#000] px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]"
                >
                  Buy BFX
                </button>

                <button
                  onClick={handleScroll2}
                  className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[228px] rounded-[8px] !w-[100%] h-[50px]"
                >
                  Watch Live Trading Here
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <video
                className="rounded-[14px] h-[320px] "
                width="920"
                height="320"
                controls={false}
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={liveVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="absolute top-[-0%] left-[-1%]">
            <img src={ernvet2} alt="BlockchainFX" />
          </div>
        </div>
        <div className="w-[100%] pt-[50px] pb-[30px]">
          <div className="flex flex-row items-center justify-between mx-[80px] border-t-[1px] border-[#fff] pt-[50px] pb-[80px]">
            <div className="w-[50%]">
              <div className="w-full">
                <img
                  src={whitepaper}
                  className="w-[453px] h-auto"
                  alt="whitepaper"
                />
              </div>
            </div>
            <div className="w-[45%] space-y-4 ">
              <div className="w-full flex flex-col justify-start text-white">
                <h3 className="text-[40px] font-[800] leading-[52px] mb-4 text-[#fff]">
                  More Than 500 Assets
                </h3>
                <p className="text-[18px] text-[#fff] font-[400] leading-[27px] w-[450px]">
                  BlockchainFX is the only exchange that lets Web3 users
                  instantly swap between crypto and traditional asset classes.
                  No delays, no extra fees, no switching platforms. Just fast
                  and real-time trading.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "0.835px solid #262626",
            }}
            className="w-full rounded-[13px] flex justify-center max-w-[1150px] w-[100%] mx-auto py-[20px] px-[20px] space-x-[15px]"
          >
            <h4 className="text-[18px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">
              Users can trade on BlockchainFX:
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">
              Crypto
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Stocks
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Forex
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Commodities
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              ETFs
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Options
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Futures
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              Indices
            </h4>
            <h4 className="text-[18px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">
              CFDs and more.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockchainFXDemo;
