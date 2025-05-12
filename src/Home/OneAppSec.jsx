import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/OneAppSec/iconopen (1).svg";
import iconcls from "../assets/OneAppSec/iconopen (2).svg";
import dailyimg from "../assets/OneAppSec/dailyimg.webp";
import { useTranslation } from "react-i18next";

const items = [
  {
    icon: oneicon1,
    title: "Own BFX",
    description: "Buy BFX during the presale in just a few seconds.",
  },
  {
    icon: oneicon2,
    title: "Stake your BFX",
    description: "Go to the presale dashboard, click on “Stake”, choose the amount, and confirm.",
  },
  {
    icon: oneicon3,
    title: "Personal Dashboard",
    description: "Connect your wallet and click on “Dashboard” in the top right corner to watch your BFX balance.",
  },
  {
    icon: oneicon4,
    title: "Staking Rewards",
    description: "Your BFX and USDT rewards will appear on the dashboard 24 hours after you stake your coins.",
  },
];

function OneAppSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="py-[50px] bg-[#000] overflow-hidden" >
      <div className="max-w-[1200px] flex justify-between w-[100%] mx-auto space-y-[56px] border-[1px] border-[#6f6f6f] rounded-[27px] px-[30px] py-[35px]"
      >
        <div className="w-[43%] max-w-[473px] space-y-[20px]">
         <div className="space-y-[10px]">
          <h4 className="px-2 h-[29px] flex items-center max-w-[93px] text-[14px] text-[#030F16] bg-[#E9C03D] rounded-[7px] "> <span className="text-[40px] !mb-[22px] mr-[3px] leading-[0px] animate-blink">.</span> Live Now</h4>
         <h3 className="text-[40px] capitalize font-[700] leading-normal text-[#fff] tracking-[-1px] text-start">
          Daily Staking Rewards
          </h3>
          <p className="text-[20px]  text-[#fff] font-[400] leading-[150%] leading-[-0.32px] text-start">
          Get in now and start earning every day
          </p>
         </div>
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className={`py-[24px] pr-5 border-b last:border-none   transition-all duration-300 `}
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex w-[100%] justify-between items-center space-x-4 space-y-[15px]">
                    <div>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[75.387px] h-[75.387px]"
                      />
                    </div>
                    <div className="w-[80%]">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[22px] leading-[142.44%] font-[600] text-[#fff]">
                          {t(item.title)}
                        </h3>
                        <div>
                          <img
                            src={index === activeIndex ? iconcls : iconapon}
                            alt={index === activeIndex ? "Collapse" : "Expand"}
                            className=""
                          />
                        </div>
                      </div>
                      <p
                        className={`mt-[12px] text-[18px] leading-[161.598%] font-[400] text-[#fff] max-w-[248px] overflow-hidden transition-all duration-300 ${
                          index === activeIndex
                            ? "max-h-[200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                        style={{
                          transition: "max-height 0.3s ease, opacity 0.3s ease",
                        }}
                      >
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[55%] space-y-[25px] overflow-visible">
          <img src={dailyimg} className="object-cover" alt="" />
          <p className="text-[13px] text-center pl-[32px] leading-[150.598%] font-[400] text-[#fff]">Connect your wallet and click on the top right corner to see your personal dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default OneAppSec;
