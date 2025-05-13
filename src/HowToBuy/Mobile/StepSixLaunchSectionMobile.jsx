import React from "react";
import UniswapIcon from "../../assets/hoyToBuy/step6/uniswap.svg";
import goldenShadow from "../../assets/hoyToBuy/mobile/ellipes-bg.png";

const exchanges = [
  { color: "#FF007A", name: "Uniswap" },
  { color: "#F0B90B", name: "Binance" },
  { color: "#0052FE", name: "Coinbase" },
  { color: "#00F0FF", name: "KuCoin" },
  { color: "#7635F5", name: "OKX" },
];

function StepSixLaunchSectionMobile() {
  return (
    <div className="py-10 px-6 bg-[#000] relative top-[-6px]">
      <div className="relative w-full py-6 px-4 flex flex-col gap-5 border-[2px] border-[#E6AF0320] rounded-[16px] overflow-hidden">
        <img
          src={goldenShadow}
          alt="Golden Background Shadow"
          className="absolute top-0 left-0 z-30 w-full h-auto "
        />

        <div className="z-20 flex flex-col text-left text-white">
          <p className="text-[25px] font-[700] leading-[30px] tracking-[-1.25px] text-[#E5AE00] uppercase mb-2">
            Step 6
          </p>
          <h2 className="text-[30px] font-[700] leading-[36px] tracking-[-1.5px] mb-3">
            Launch
          </h2>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[-0.32px] text-[#9F9F9F] mb-4">
            $BFX will officially launch on multiple top-tier exchanges after the
            presale concludes.
          </p>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[-0.32px] text-[#9F9F9F] mb-6">
            Stay updated via our website and social channels for listing
            announcements.
          </p>
          <button className="px-2 py-2 max-w-[150px] font-[500] text-black transition bg-[#E5AE00] rounded-md">
            Buy BFX Now
          </button>
        </div>

        <div className="backdrop-blur-md border border-[#545454] rounded-[12px] relative z-20 p-4  ">
          <p className="mb-2 text-[14px] font-[600] text-[#808080] leading-[18px] capitalize text-center">
            $BFX Launches On Multiple Top-Tier Exchanges
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {exchanges.map((exchange, index) => (
              <div
                key={index}
                className={`${
                  index !== 0 && "blur-sm"
                } flex items-center justify-center gap-2  w-[114px] h-[41px] border rounded-md bg-white/5 border-white/20 backdrop-blur-md`}
              >
                <div
                  className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: exchange.color }}
                >
                  <img
                    src={UniswapIcon}
                    alt={`${exchange.name} Exchange Logo`}
                    className="w-5 h-5"
                  />
                </div>
                <span className="text-[12px] font-[700] leading-[30px] text-[#808080]">
                  {exchange.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepSixLaunchSectionMobile;
