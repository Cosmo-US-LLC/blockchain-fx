import React from "react";
import hero_reviews from "../assets/presale-v3/hero_reviews.png";
import stars from "../assets/herosection/stars.webp";
import heroVideo from "../assets/herosection/herogif.gif";

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

  return (
    <div className="pt-[22px] pb-[2rem] bg-[#020B10]">
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
              <h4 className="text-[16px] font-[400] text-[12px] text-[white]">
                Connecting Blockchain and Global Financial
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
            <img
              className="w-[250px] h-auto mx-auto"
              src={hero_reviews}
              alt="hero_reviews"
            />
            <p className="text-[16px] text-[#8497A2] font-[400] text-center pt-4">
              BlockchainFX is the only crypto native trading platform that
              provides instant access to the world’s largest financial markets
              across 500+ different assets.
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

            <a
              href="https://vip.blockchainfx.com/whitepaper.pdf"
              target="_blank"
              className=""
              rel="noopener noreferrer"
            >
              <button className="w-[144px] hover:text-white hover:bg-[#E5AE00] px-[14px] text-[#E6B005] bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] rounded-[8px]  h-[48px]">
                Watch Demo
              </button>
            </a>
          </div>
          <div className="flex justify-center pt-[15px]">
            <img src={heroVideo} className="" alt="" />
            {/* <video
              width={500}
              height={410}
              className="max-h-[550px]"
              muted
              autoPlay="autoplay"
              preload="auto"
              playsInline
              loop
            >
              <source src={heroVideo} type="video/webm" />
            </video> */}
          </div>

          {/* <div className="border rounded-[6px] py-[20px] !mt-[20px] px-[13px]">
            <h3 className="text-center text-[15px] font-[600]">Featured In:</h3>
            <div className="flex justify-center items-center space-x-[9px]">
              <img className="h-[14px] !mt-[2px]" src={herobnr2} alt="" />
              <img className="" src={fobicn} alt="" />
              <img className="h-[17px]" src={herobnr4} alt="" />
              <img
                className="max-w-[100.25px] h-[11.7px]"
                src={herobnr5}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
