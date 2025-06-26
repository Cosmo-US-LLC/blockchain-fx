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
          <div className="space-y-[22px] max-w-[638px] w-[100%]">
            <h1 className="text-[60px] font-[700] font-inter leading-[100%] tracking-[-1px] text-[#fff] ">
              The First Crypto <br /> Trading{" "}
              <span
                style={{
                  background:
                    "linear-gradient(91deg, #E5AE01 24.64%, #FFE182 97%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Super App
              </span>
            </h1>
            <p className="text-[#fff] max-w-[517px] w-[100%] font-[400] font-inter leading-[150%] text-[16px]">
              BlockchainFX is a next-gen crypto exchange that connects DeFi
               with traditional financial markets. It’s the only Web3 platform
               offering access to stocks, forex, ETFs, and more.
            </p>

            <div className="space-y-[10px] max-w-[530px] border-[0.5px] border-[#C0C0C0] py-[15px] pl-[21px] rounded-[13px]">
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">
                  The First crypto Exchange Bridging Blockchain and Finance
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">
                  Bitcoin, Ethereum, gold, Tesla, and over 500+ more assets
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={check} alt="" />
                <p className="text-[#fff] capitalize font-[400] leading-[150%] text-[16px]">
                  Awarded as “The Best New Crypto Trading App of 2025”
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[650px] w-[100%] space-y-[27px]">
            <div className="flex justify-center">
              {/* Embed Wistia Player */}
              <script src="https://fast.wistia.com/player.js" async></script>
              <script
                src="https://fast.wistia.com/embed/w8ynmofaw4.js"
                async
                type="module"
              ></script>
              <style>
                {`
              wistia-player[media-id='w8ynmofaw4']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/w8ynmofaw4/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
              }
            `}
              </style>
              <wistia-player
                media-id="w8ynmofaw4"
                aspect="1.7777777777777777"
                style={{
                  width: "100%",
                  maxWidth: "730px",
                  height: "auto",
                  maxHeight: "410px",
                }}
              ></wistia-player>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start pt-[20px] min-w-[350px] mt-3 pb-[0px] items-center space-x-[17px]">
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
              className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[140px] rounded-[8px] !w-[100%] h-[50px]"
            >
              How it works?
            </button>
          </div>
          <div className="flex items-center justify-between space-x-2 max-w-[680px] w-[100%]">
            <div>
              <h3 className="text-[#fff] mb-3 font-inter leading-[185%] font-[400] text-center text-[16px]">
                Audited and Approved by
              </h3>
              <div className="flex justify-center items-center space-x-[15px]">
                <img src={heroicns1} alt="" />
                <img src={heroicns2} alt="" />
                <img src={heroicns3} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <div
                className="flex items-center flex-col mt-3 py-[18px] space-y-[3px] px-5 rounded-[10px]"
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
                <p className="text-[#fff] font-[400] text-[16px] leading-[100%]">
                  4.87/5{" "}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[#fff] mb-3 font-inter font-[400] text-[16px]">
                  Verified Ratings
                </p>
                <img src={uersrev} loading="lazy" alt="reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
