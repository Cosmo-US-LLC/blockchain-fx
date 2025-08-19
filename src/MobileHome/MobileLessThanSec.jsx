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

function MobileLessThanSec() {
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
    <div className="pt-[24px] pb-[24px] bg-[#020B10] overflow-hidden">
    <div className="relative max-w-[1200px] mx-auto">
    <div className="space-y-[32px] py-6 px-4 w-[90%] mx-auto border-[1px] border-[#2B2B2B] relative overflow-hidden rounded-[16px] bg-[#030F16]">
            <img
              src={ellipse || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute top-[0%] left-[0%]"
              alt=""
            />

            <div className="space-y-[20px]">
              <h3 className="capitalize text-[30px] font-[600] max-w-[230px] mx-auto leading-[120%] tracking-[-1.5px] text-center text-[#FFF] ">
                {t("less_than_section.title")}
              </h3>
              <p className="w-[100%] font-inter  text-center text-[16px] text-[#fff] font-medium leading-[25px]">
                {t("less_than_section.description")}
              </p>
            </div>
            <div className="space-y-[70px] py-[30px]">
              <h4 className="text-[15px] space-y-[70px] font-[600] text-center leading-[130%] text-[#fff] tracking-[-0.617px]">
                {t("less_than_section.chart_title")}
              </h4>
              <div>
                {/* <h4 className="text-[15px] space-y-[70px] font-[600] text-center leading-[130%] text-[#fff] tracking-[-0.617px]">
                  {t("less_than_section.costs.title")}
                </h4>
                <p className="text-[#fff] text-center text-[16px] font-medium">
                  {t("less_than_section.costs.description")}
                </p> */}
              </div>
              <div className="relative mt-10">
                <div className="flex justify-end">
                  <img src={graph || "/placeholder.svg"} className="max-w-[200px] max-h-[200px]" alt="" />
                </div>
                <p className="text-[#fff] top-[-24%] left-[41%] absolute leading-[110%] text-[12px] w-[100px] font-[500] tracking-[-0.787px]">
                  {t("less_than_section.chart.bonds")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[-12%] left-[14%] text-[12px] w-[100px] font-[500] tracking-[-0.787px]">
                  {t("less_than_section.chart.stocks")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[16%] left-[5%] text-[12px] w-[100px] font-[500] tracking-[-0.787px]">
                  {t("less_than_section.chart.commodities")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[42%] left-[3%] text-[12px] w-[100px] font-[500] tracking-[-0.787px]">
                  {t("less_than_section.chart.etfs")}
                </p>
                <p className="text-[#F3D885] p-1 border border-[#E5AE00] rounded-[5px] leading-[110%] absolute top-[62%] left-[0%] text-[12px] w-[98px] font-[900] tracking-[-0.383px]">
                  {t("less_than_section.chart.crypto")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute bottom-[-19%] right-[13%] text-[12px] font-[500] tracking-[-0.787px]">
                  {t("less_than_section.chart.forex")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-[3rem] pt-[20px] mx-auto w-[100%]">
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#E9AD2F] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.forex")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#DCDCDC] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.bonds")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#B6B6B6] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.us_stock")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#7DBB6C] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.commodities")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#D39219] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.etfs")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#A36E00] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[14px] capitalize font-[600] tracking-[0.247px]">
                    {t("less_than_section.legend.crypto")}
                  </p>
                </div>
              </div>
            </div>
          </div>
    
    </div>
     
  </div>
  );
}

export default MobileLessThanSec;
