import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/OneAppSec/iconopen (1).svg";
import iconcls from "../assets/OneAppSec/iconopen (2).svg";
import oneimg from "../assets/OneAppSec/imgonecec.png";

const items = [
  {
    icon: oneicon1,
    title: "Multiple Devices",
    description:
      "Trade from whatever device you like — PC, Mac, iOS or Android.",
  },
  {
    icon: oneicon2,
    title: "Technical Tools",
    description: "Advanced technical tools designed to enhance market analysis and decision-making.",
  },
  {
    icon: oneicon3,
    title: "Risk Management",
    description: "Comprehensive risk management features to minimize risks.",
  },
  {
    icon: oneicon4,
    title: "Multiple Charts",
    description: "Trade using multiple charts simultaneously for better market insights.",
  },
];

function OneAppSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="pt-[40px] pb-[50px] ">
     <div className="max-w-[1400px] w-[100%] mx-auto relative">
     <div className="max-w-[1220px] flex justify-between w-[100%] mx-auto space-y-[56px]">
        <div className="w-[50%] max-w-[581px] space-y-[32px]">
          <h3 className="text-[50px] font-[700] leading-[114%] text-[#181A20] leading-[-1px] text-start">
            Everything In One Apps
          </h3>
          <p className="text-[18px] text-[#181A20] font-[400] leading-[127.778%] leading-[-0.32px] text-start">
            An innovative, modern and intuitive trading platform
          </p>
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className={`py-[30px] pr-5 border-b last:border-none   transition-all duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-white"
                }`}
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
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div className="w-[80%]">
                      <div className="flex justify-between items-center">
                        <h3 className="text-[20px] font-[600] text-[#000]">
                          {item.title}
                        </h3>
                        <div>
                          <img
                            src={index === activeIndex ? iconcls : iconapon}
                            alt={index === activeIndex ? "Collapse" : "Expand"}
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                      <p
                        className={`mt-[16px] text-[18px] font-[400] text-[#000] max-w-[400px] overflow-hidden transition-all duration-300 ${
                          index === activeIndex
                            ? "max-h-[200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                        style={{
                          transition: "max-height 0.3s ease, opacity 0.3s ease",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[48%]">
          <img src={oneimg} className="absolute right-0" alt="" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default OneAppSec;
