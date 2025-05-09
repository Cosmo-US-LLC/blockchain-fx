import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";
import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import ellipse2 from "../assets/EarnOnSec/Ellipse 4.png";

import graphyp from "../assets/HyperGrowth/Graph.png";
import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import arw from "../assets/PremiumSec/preawr (1).svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

function BiggestbuyMobSec() {
  const { t } = useTranslation(); 
   const [showTooltip, setShowTooltip] = useState(false);
    const swiperRef = useRef(null);
       const [activeIndex, setActiveIndex] = useState(0);
      
     useEffect(() => {
       if (swiperRef.current && swiperRef.current.swiper) {
         swiperRef.current.swiper.pagination.render();
         swiperRef.current.swiper.pagination.update();
       }
     }, []);

     const handleScroll = () => {
      setTimeout(() => {
        const element = document.getElementById("Wallet");
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offset = 80;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth"
          });
        }
      }, 200); 
    };
  return (
    <div className="pt-[24px] pb-[24px] bg-[#000] overflow-hidden">
    <div className="relative w-[90%] rounded-[24px] px-[20px] py-[30px] mx-auto bg-[#111]">
    <div className="space-y-[20px]">
              <h3 className="text-[30px] capitalize font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
              Biggest buy-in competition
              </h3>
              <p className="text-[15px] font-[400] w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
              The top 10 BFX presale buyers will receive a share of 100,000 USD in $BFX. This exclusive reward is our way of thanking those who contributed the most and played a major role in the growth of the BlockchainFX ecosystem.
              </p>
            </div>
            <div className="bg-[#312911] w-[86%] mt-[30px] space-y-[15px] mx-auto border border-[#fff] px-[10px] py-[20px] rounded-[24px]">
                <div className="flex justify-between items-center px-[15px] pt[15px]">
                    <h3 className="text-[#F9C333] text-[9px] font-[600] w-[20%]">Rank</h3>
                    <h3 className="text-[#F9C333] text-[9px] font-[600] w-[25%]">Wallet</h3>
                    <h3 className="text-[#F9C333] text-[9px] font-[600] w-[25%]">Total Buy</h3>
                    <h3 className="text-[#F9C333] text-[9px] font-[600] w-[20%]">Prize</h3>
                </div>
                <div className="flex justify-between items-center px-[15px] py-[15px] bg-[#BB9E08] rounded-[24px]">
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">1st</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">0x589...18e01  </h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">$124,590.58</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">$50,000</h3>
                </div>
                <div className="flex justify-between items-center px-[15px] py-[15px] bg-[#99958C] rounded-[24px]">
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">2nd</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">0xa28...ba37d </h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">$63,560.79</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">$20,000</h3>
                </div>
                <div className="flex justify-between items-center px-[15px] py-[15px] bg-[#A46A2A] rounded-[24px]">
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">3rd</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">0xc6e...62f8e </h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[25%]">$52,192.16</h3>
                    <h3 className="text-[#FFF89C] text-[9px] font-[600] w-[20%]">$10,000</h3>
                </div>
                <div className="flex justify-between items-center px-[15px] py-[5px] ">
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[20%]">4th</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[25%]">0x71C...9ec9B</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[25%]">$35,143.44</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[20%]">$5,000</h3>
                </div>
                <div className="flex justify-between items-center px-[15px] py-[5px] ">
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[20%]">5th</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[25%]">0x5ae...767de</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[25%]">$24,710.55</h3>
                    <h3 className="text-[#fff] text-[9px] font-[600] w-[20%]">$3,000</h3>
                </div>
            </div>
    </div>
  </div>
  );
}

export default BiggestbuyMobSec;
