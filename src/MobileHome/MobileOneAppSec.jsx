import React, { useState } from "react";
import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
import iconapon from "../assets/OneAppSec/iconopen (1).svg";
import iconcls from "../assets/OneAppSec/iconopen (2) copy.svg";
import oneimg from "../assets/OneAppSec/dailyimgmob.png";
import { useTranslation } from "react-i18next";
import { useApiState } from "../presale-gg/stores/api.store";

function MobileOneAppSec() {
  const { t } = useTranslation();
  const apiData = useApiState();
  const [activeIndex, setActiveIndex] = useState(0); // First item opens by default

  const items = [
    {
      icon: oneicon1,
      title: "Own BFX",
      description: "Buy $BFX during the presale in just a few seconds.",
    },
    {
      icon: oneicon2,
      title: "Stake your BFX",
      description:
        "Go to the presale dashboard, click on “Stake”, choose the amount, and confirm.",
    },
    {
      icon: oneicon3,
      title: "Personal Dashboard",
      description:
        "Connect your wallet and click on “Dashboard” in the top right corner to view your BFX balance.",
    },
    {
      icon: oneicon4,
      title: "Staking Rewards",
      description:
        "Your BFX and USDT rewards will appear on the dashboard 24 hours after you stake your coins.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="py-5 px-5 bg-[#000]" id="what-is-bfx-coin">
      <div className="flex flex-col relative border border-[#343434] rounded-[24px] px-2 py-[30px]">
        <div className="space-y-[20px]">
          <div className="w-[100%] flex gap-2 px-2 flex-col text-left">
            {!apiData.presaleEnded && (
              <div className="w-[180px] h-[32px] text-[14px] font-[600] text-white rounded-[7px] bg-[#E9C03D] flex justify-center items-center">
                <span className="text-[38px] leading-[9%] -mt-[23px] pr-[6px] animate-blink">
                  .
                </span>
                Live Now (Beta Phase)
              </div>
            )}
            <h3 className="text-[30px] font-[600] text-left leading-[120%] text-[white] tracking-[-1.5px]">
              Daily Staking Rewards
            </h3>
            <p className="text-[15px] text-[#fff] text-left font-[400] leading-[127.778%] tracking-[-0.32px]">
              Get in now and start earning every day
            </p>
          </div>

          <div className="w-[100%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="py-[25px] px-2 border-b border-[#343434] last:border-none"
              >
                <div
                  className="flex justify-between"
                  onClick={() => handleToggle(index)}
                >
                  <div className="w-[100%] space-y-[15px]">
                    <div className="flex items-center justify-start space-x-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[35] h-[35px]"
                      />
                      <h3 className="text-[20px] font-[600] text-[white]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="">
                    <img
                      src={activeIndex === index ? iconcls : iconapon}
                      alt={activeIndex === index ? "Collapse" : "Expand"}
                      className="w-[37] h-[37px]"
                    />
                  </div>
                </div>

                {activeIndex === index && (
                  <div
                    className="mt-4 text-[15px] text-[#fff] overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: activeIndex === index ? "200px" : "0",
                      opacity: activeIndex === index ? "1" : "0",
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-[100%] flex justify-center !mt-10">
            <img src={oneimg} className="object-cover" alt="" />
          </div>
          <div>
            <p className="text-[12px] text-[#fff] text-center font-[400]">
              Connect your wallet and click the button in the top right corner
              to view your personal dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOneAppSec;

// import React, { useState } from "react";
// import oneicon1 from "../assets/OneAppSec/oneicon (1).svg";
// import oneicon2 from "../assets/OneAppSec/oneicon (4).svg";
// import oneicon3 from "../assets/OneAppSec/oneicon (2).svg";
// import oneicon4 from "../assets/OneAppSec/oneicon (3).svg";
// import iconapon from "../assets/OneAppSec/iconopen (1).svg";
// import iconcls from "../assets/OneAppSec/iconopen (2) copy.svg";
// import oneimg from "../assets/OneAppSec/dailyimgmob.png";
// import { useTranslation } from "react-i18next";
// import { useApiState } from "../presale-gg/stores/api.store";

// function MobileOneAppSec() {
//   const { t } = useTranslation();
//   const apiData = useApiState();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = [
//     {
//       icon: oneicon1,
//       title: "Own BFX",
//       description: "Buy $BFX during the presale in just a few seconds.",
//     },
//     {
//       icon: oneicon2,
//       title: "Stake your BFX",
//       description:
//         "Go to the presale dashboard, click on “Stake”, choose the amount, and confirm.",
//     },
//     {
//       icon: oneicon3,
//       title: "Personal Dashboard",
//       description:
//         "Connect your wallet and click on “Dashboard” in the top right corner to view your BFX balance.",
//     },
//     {
//       icon: oneicon4,
//       title: "Staking Rewards",
//       description:
//         "Your BFX and USDT rewards will appear on the dashboard 24 hours after you stake your coins.",
//     },
//   ];

//   const handleToggle = (index) => {
//     setActiveIndex(index === activeIndex ? -1 : index);
//   };

//   return (
//     <div className="py-5 px-5 bg-[#000]   " id="what-is-bfx-coin">
//       <div className=" flex flex-col relative border border-[#343434] rounded-[24px] px-2 py-[30px]">
//         <div className="space-y-[10px]">
//           <div className="w-[100%] flex gap-2 flex-col text-left">
//             {!apiData.presaleEnded && (
//               <div className="w-[93px] h-[32px] text-[14px] font-[600] text-white rounded-[7px] bg-[#E9C03D] flex justify-center items-center">
//                 <span className="text-[38px] leading-[9%] -mt-[23px] pr-[6px] animate-blink">
//                   .
//                 </span>
//                 Live
//               </div>
//             )}
//             <h3 className="text-[30px] font-[700] text-left leading-[120%] text-[white] tracking-[-1.5px] ">
//               Daily Staking Rewards
//             </h3>
//             <p className="text-[15px] text-[#fff] text-left font-[400] leading-[127.778%] tracking-[-0.32px] ">
//               Get in now and start earning every day
//             </p>
//           </div>
//           <div className="w-[100%]">
//             <div className="">
//               {items.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`py-[25px] px-2 border-b border-[#343434] last:border-none   `}
//                 >
//                   <div
//                     className="flex justify-between "
//                     onClick={() => handleToggle(index)}
//                   >
//                     <div className="w-[100%] space-y-[15px]">
//                       <div className="flex items-center justify-start space-x-2">
//                         <img
//                           src={item.icon}
//                           alt={item.title}
//                           className="w-[35] h-[35px]"
//                         />
//                         <h3 className="text-[20px] font-[600] text-[white]">
//                           {item.title}
//                         </h3>
//                       </div>
//                       <div>
//                         <p className="text-[15px] text-start leading-[146%] font-[400] text-[#fff]">
//                           {" "}
//                           {item.description}
//                         </p>
//                       </div>
//                       {/* <div className="w-[80%]">
//                         <div className="flex items-center justify-between">

//                           <div>
//                             <img
//                               src={index === activeIndex ? iconcls : iconapon}
//                               alt={
//                                 index === activeIndex ? "Collapse" : "Expand"
//                               }
//                               className="w-[37] h-[37px]"
//                             />
//                           </div>
//                         </div>
//                         <p
//                           className={`mt-[8px] text-[15px] font-[400] text-[#fff] max-w-[400px] overflow-hidden transition-all duration-300 ${
//                             index === activeIndex
//                               ? "max-h-[200px] opacity-100"
//                               : "max-h-0 opacity-0"
//                           }`}
//                           style={{
//                             transition:
//                               "max-height 0.3s ease, opacity 0.3s ease",
//                           }}
//                         >
//                           {item.description}
//                         </p>
//                       </div> */}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-[100%] flex !mt-[10px] justify-center">
//             <img src={oneimg} className="object-cover" alt="" />
//           </div>
//           <div>
//             <p className="text-[12px] text-[#fff] text-center font-[400]">
//               Connect your wallet and click the button in the top right corner
//               to view your personal dashboard.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobileOneAppSec;
