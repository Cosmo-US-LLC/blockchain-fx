import React from "react";
import UniswapIcon from "../../assets/hoyToBuy/step6/uniswap.svg";
import goldenShadow from "../../assets/hoyToBuy/step6/goldenShadow.png";

const exchanges = [
  { color: "#FF007A", name: "Uniswap" },
  { color: "#F0B90B", name: "Binance" },
  { color: "#0052FE", name: "Coinbase" },
  { color: "#00F0FF", name: "KuCoin" },
  { color: "#7635F5", name: "OKX" },
];

function StepSixLaunchSectionMobile() {
  return (
    <div className="md:hidden py-10 bg-[#020B10]">
      <div className="relative w-full max-w-[95%] mx-auto p-6 border border-[#545454] rounded-[16px] overflow-hidden">
        
        {/* Background Shadow */}
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-10 h-auto opacity-30"
        />

        {/* Exchange Cards */}
        <div className="backdrop-blur-md border border-[#545454] rounded-[12px] relative z-20 p-6 mb-8">
          <p className="mb-4 text-[16px] font-medium text-[#808080] text-center">
            $BFX Launches On Multiple Top-Tier Exchanges
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {exchanges.map((exchange, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 w-full h-[61px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md"
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: exchange.color }}
                >
                  <img src={UniswapIcon} alt={`${exchange.name} Exchange Logo`} className="w-7 h-7" />
                </div>
                <span className="text-sm font-semibold text-[#808080]">
                  {exchange.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="z-20 text-center text-white">
          <p className="text-[26px] font-semibold text-[#E5AE00] uppercase mb-4">
            Step 6
          </p>
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight mb-6">
            Launch
          </h2>
          <p className="text-[16px] text-[#9F9F9F] leading-relaxed mb-4">
            $BFX will officially launch on multiple top-tier exchanges after
            the presale concludes.
          </p>
          <p className="text-[16px] text-[#9F9F9F] leading-relaxed mb-6">
            Stay updated via our website and social channels for listing
            announcements.
          </p>
          <button className="w-full py-2 font-semibold text-black transition bg-yellow-400 rounded-md hover:bg-yellow-500">
            Buy BFX Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepSixLaunchSectionMobile;
