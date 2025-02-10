import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/HowToBuySec/ei_arrow-up.svg";
import iconcls from "../assets/HowToBuySec/ei_arrow-up (1).svg";
import imghow from "../assets/HowToBuySec/Frame 1410125732.webp";

const items = [
  {
    icon: oneicon1,
    title: "1. Connect your wallet",
    description: "Connect your wallet with Metamask or Trust Wallet",
  },
  {
    icon: oneicon2,
    title: "2. Choose a payment method ",
    description: "Choose between ETH, BNB and USDT",
  },
  {
    icon: oneicon3,
    title: "3. Confirm Transaction",
    description: 'Click on the "Buy BFX" button and confirm the transaction',
  },
  {
    icon: oneicon4,
    title: "4. Claim $BFX",
    description:
      "You can claim your $BFX in your personal dashboard once the pre-sale is done",
  },
];

function HowToBuySec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

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
    <div className="py-[50px] space-y-[27px] bg-[#FAFAFA] ">
      <h3 className="text-[30px] font-[700] text-center leading-[155.556%] text-[#181A20] leading-[-1px]">
        How To Buy $BFX
      </h3>
      <div className="max-w-[1000px] flex justify-between items-center w-[100%] mx-auto ">
        <div className="w-[50%] max-w-[581px] space-y-[20px]">
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className={`py-[25px] px-4 border-b last:border-none  transition-all duration-300`}
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex w-[100%]  justify-between items-center space-x-4 space-y-[15px]">
                    <div className="px-3 w-[100%]">
                      <div className="flex justify-between items-center">
                        <h3
                          className={`text-[24px] capitalize font-[600] ${
                            index === activeIndex
                              ? "text-[#E5AE00]"
                              : "text-[#181A20] "
                          }`}
                        >
                          {item.title}
                        </h3>
                        <div>
                          <img
                            src={index === activeIndex ? iconcls : iconapon}
                            alt={index === activeIndex ? "Collapse" : "Expand"}
                            className="w-[40px] h-[40px]"
                          />
                        </div>
                      </div>
                      <p
                        className={` mt-[14px]  text-[16px] font-[400] text-[#000] overflow-hidden transition-all duration-300 ${
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
          <div className="flex justify-start items-center px-[2rem] space-x-[17px]">
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
            >
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Need Help?
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          <img src={imghow} className="h-[542px] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowToBuySec;
