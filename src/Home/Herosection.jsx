import React from "react";
// import herogif from "../assets/herosection/herogif.gif";
// import heroVideo from "../assets/herosection/heroVideo.mp4";
import heroVideo from "../assets/herosection/heroVideo.webm";

function Herosection() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };


  return (
    <div className="pt-[40px] pb-[20px] bg-[#FFF]">
      <div className="max-w-[1200px]  w-[100%] mx-auto ">
        <div className="">
          <div className="space-y-[10px]">
            <h4 className="text-[18px]  leading-[144.444%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Blockchain Meets Global Financial Markets
            </h4>
            <h2 className=" text-[45px] font-[700] leading-[130%] tracking-[-1px] text-[#000] text-center">
              The Ultimate Trading Platform
            </h2>
            <p className="text-[14px] max-w-[840px] w-[100%] mx-auto font-[400] leading-[150%] text-center text-[#000] tracking-[-0.32px] ">
              BlockchainFX is the first crypto-native platform providing access
              to the world’s largest financial markets. Trade Crypto, Forex,
              ETFs, Stocks, Futures, Options, Bonds, Indices, CFDs, and more—all
              in one place. Secure early access by holding $BFX and earn up to
              25,000 USDT in daily staking rewards from collected trading fees.
            </p>
          </div>
          <div
           onClick={handleScroll}
          className="flex justify-center pt-[20px] pb-[0px] items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Beta Trading
            </button>
          </div>
          <div className="flex justify-center max-w-[619px] mx-auto">
            {/* <img src={herogif} className="max-h-[550px]" alt="" /> */}
            <video
              width={500}
              height={410}
              className="max-h-[410px]"
              muted
              autoPlay="autoplay"
              preload="auto"
              playsInline
              loop
            >
              <source src={heroVideo} type="video/webm" />
            </video>
          </div>
          {/* <div className="flex justify-center items-center h-[73.47] space-x-[52px] border rounded-[20px] py-[20px]">
            <img src={herobnr1} alt="" />
            <img src={herobnr2} alt="" />
            <img src={herobnr3} alt="" />
            <img src={herobnr4} alt="" />
            <img src={herobnr5} className="max-w-[225px] h-[25.82px]" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
