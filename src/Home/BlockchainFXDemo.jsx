import React from "react";
// import demoimg from "../assets/BlockchainFXDemo/demo.webp"
// import stars from "../assets/Expert/Stars.png"
import liveVideo from "../assets/BlockchainFXDemo/live.mp4";

// import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";
function BlockchainFXDemo() {

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
    <div className="flex items-center bg-[#020B10] py-[50px]" id="desktopDemo">
      <div className="max-w-[1200px] relative overflow-hidden flex justify-between items-center gap-[2rem] w-[100%] mx-auto border border-[#E6AF03] bg-[#030F16] relative rounded-[24px]">
        <div className="flex justify-end items-center gap-5 relative z-[99]">
          <div className="w-[45%] space-y-[20px] pl-[70px] py-[60px]">
            <h4
              className="text-[40px] font-[600]"
              style={{
                background: "linear-gradient(90deg, #FFF 0%, #FACD42 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BlockchainFX Demo
            </h4>
            <p className="text-[#fff] text-[18px] font-[500]">
            In just a few seconds, users can trade BTC, Tesla, Gold, Pepe, ETFs, CFDs, and more — all seamlessly on one platform without switching brokers.
            </p>
            <div className="flex justify-start pt-[20px] pb-[0px] items-center space-x-[17px]">
              <button
               onClick={handleScroll}
               style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="text-[#000]  px-[12px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]">
                Buy $BFX
              </button>

              <button
                onClick={() =>
                  (window.location.href = "https://trade.blockchainfx.io")
                }
                className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[178px] rounded-[8px] !w-[100%] h-[50px]"
              >
                Start Trading (Beta)
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <video
            className="rounded-[14px] h-[320px]"
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
        <div className="absolute top-[-8%] left-[-5%]">
          <img src={ernvet2} className=" " alt="BlockchainFX" />
        </div>
      </div>
    </div>
  );
}

export default BlockchainFXDemo;
