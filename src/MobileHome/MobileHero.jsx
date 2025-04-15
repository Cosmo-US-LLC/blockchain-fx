import React from "react";
import hero_reviews from "../assets/presale-v3/hero_reviews.png";
import stats_1 from "../assets/presale-v3/stats_1.webp";
import herobnr1 from "../assets/herosection/bnrhero (4).svg";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";
import stars from "../assets/herosection/stars.png";

function MobileHero() {
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
    <div className="pt-[22px] bg-[#020B10]">
      <div className="w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <div className="">
            <div
              style={{
                background:
                  "linear-gradient(90.19deg, rgba(255, 255, 255, 0.3) -45.06%, rgba(255, 255, 255, 0) 111.83%)",
              }}
              className="h-[29px] rounded-full flex flex-row items-center justify-center border-1 border-[1px] border-[#FFFFFF33]"
            >
              <h4 className="text-[12px] font-[400] text-[12px] text-[white]">
                Connecting Blockchain and Global Finance
              </h4>
            </div>
            <h2
              className="pt-4 pb-4 text-[43px] font-[600] text-white text-center font-manrope"
              style={{
                lineHeight: "120%",
                letterSpacing: "-5%",
              }}
            >
              The First Crypto Trading{" "}
              <span
                style={{
                  background:
                    "linear-gradient(92.16deg, #E5AE01 24.64%, #FFE182 97%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Super{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(92.16deg, #E5AE01 24.64%, #FFE182 97%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  App
                </span>
              </span>
            </h2>
              <div className="flex justify-center space-x-2 items-center">
             <div>
             <img
              className="w-[150px] h-auto mx-auto"
              src={hero_reviews}
              alt="hero_reviews"
            />
             <p className="text-[#8497A2] pt-[2px] text-center font-[400] text-[12px]">
                  Verified Ratings
                </p>
             </div>
            <div
              className="flex space-y-1 items-center flex-col p-3 rounded-[10px]"
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
              <p className="text-[#fff] font-[400] text-[14px] leading-[100%]">4.87/5 </p>
            </div>
              </div>
            <p className="text-[16px] text-[#8497A2] font-[400] text-center pt-4">
              BlockchainFX is the only crypto native trading platform providing
              instant access to the world’s largest financial markets with the
              release of its new BFX coin.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
            <button
              onClick={handleScroll}
              className="text-[16px] font-[700] h-[50px] w-[159px] rounded-[10px]"
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
            >
              Buy $BFX
            </button>

            {/* <a
              href="https://vip.blockchainfx.com/whitepaper.pdf"
              target="_blank"
              className=""
              rel="noopener noreferrer"
            > */}
            <button
              onClick={handleScrollToDemo}
              className="w-[144px] hover:text-white hover:bg-[#E5AE00] px-[14px] text-[#E6B005] bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] rounded-[8px]  h-[48px]"
            >
              Watch Demo
            </button>
            {/* </a> */}
          </div>
          <div className="flex relative justify-center pt-[15px]">
            <img src={stats_1} className="h-auto " alt="stats_1" />
            <div
              className="w-[100%] h-[100px] rounded-[1650px] bg-[#020B10]"
              style={{
                filter: "blur(37px)",
                position: "absolute",
                bottom: "-7%",
                zIndex: "1",
              }}
            ></div>
          </div>
          <div className="gap-2 border !border-t-0  !mt-[-30px] border-1 border-[#262626] h-[72px] w-full flex flex-col items-center p-2 ">
            <p className="font-[600] relative z-[99] text-[15px] text-center text-[white]">
              Featured In:
            </p>
            <div className="flex justify-center items-center space-x-2">
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
      </div>
    </div>
  );
}

export default MobileHero;
