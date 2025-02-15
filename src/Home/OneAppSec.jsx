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
    title: "Any Device",
    description:
      "Users can trade from any device, whether it's a PC, Mac, iOS, or Android.",
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
    description: "Traders can use multiple charts at the same time for better market insights.",
  },
];

function OneAppSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="py-[50px] bg-[#FBFBFB] overflow-hidden" id="what-is-bfx-coin">
     <div className="max-w-[1300px] w-[100%] mx-auto relative">
     <div className="max-w-[1200px] flex justify-between w-[100%] mx-auto space-y-[56px]">
        <div className="w-[50%] max-w-[473px] space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[700] leading-normal text-[#181A20] tracking-[-1px] text-start">
            Everything In One App
          </h3>
          <p className="text-[14px] text-[#181A20] font-[400] leading-[150%] leading-[-0.32px] text-start">
          A lightning-fast and innovative trading solution
          </p>
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
                      <div className="flex justify-between items-center">
                        <h3 className="text-[18px] leading-[142.44%] font-[600] text-[#000]">
                          {item.title}
                        </h3>
                        <div>
                          <img
                            src={index === activeIndex ? iconcls : iconapon}
                            alt={index === activeIndex ? "Collapse" : "Expand"}
                            className="w-[18px] h-[18px]"
                          />
                        </div>
                      </div>
                      <p
                        className={`mt-[12px] text-[14px] leading-[161.598%] font-[400] text-[#000] max-w-[248px] overflow-hidden transition-all duration-300 ${
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
        <div className="w-[58%] overflow-visible">
          <div className="w-[142%] h-[100%]" style={{
            backgroundImage:`url(${oneimg})`,
            backgroundPosition: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default OneAppSec;
