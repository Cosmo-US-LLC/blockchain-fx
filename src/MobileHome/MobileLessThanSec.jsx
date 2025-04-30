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
    <div className="pt-[24px] pb-[24px] bg-[#030F16] overflow-hidden">
    <div className="relative max-w-[1200px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        navigation={{
          nextEl: ".swiper-button-next-swp",
          prevEl: ".swiper-button-prev-swp",
          enabled: true,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet bg-yellow-800 p-1 rounded-full "></span>`;
          },
        }}      
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="space-y-[32px] min-h-[1234px] py-4 px-2 w-[90%] mx-auto border-[1px] border-[#2B2B2B] relative overflow-hidden rounded-[16px]">
            <img
              src={ellipse || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute top-[0%] left-[0%]"
              alt=""
            />
            <img
              src={ellipse2 || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute bottom-[0%] right-[0%]"
              alt=""
            />

            <div className="space-y-[20px]">
              <h3 className="text-[30px] capitalize font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
                {t("MobileLessThanSec.slide1.title")}
              </h3>
              <p className="text-[15px] font-[400] w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
                {t("MobileLessThanSec.slide1.description1")} <br /><br />
                {t("MobileLessThanSec.slide1.description2")}
              </p>
            </div>
            <div className="space-y-[70px] py-[30px]">
              <h4 className="text-[15px] space-y-[70px] font-[600] text-center leading-[130%] text-[#fff] tracking-[-0.617px]">
                {t("MobileLessThanSec.slide1.chartTitle")}
              </h4>
              <div className="relative">
                <div className="flex justify-end">
                  <img src={graph || "/placeholder.svg"} className="max-w-[236px] max-h-[236px]" alt="" />
                </div>
                <p className="text-[#fff] top-[-14%] left-[41%] absolute leading-[110%] text-[10px] font-[700] tracking-[-0.787px]">
                  {t("MobileLessThanSec.slide1.chart.bonds")} <br /> {t("MobileLessThanSec.slide1.chart.bondsValue")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[-1%] left-[16%] text-[10px] font-[700] tracking-[-0.787px]">
                  {t("MobileLessThanSec.slide1.chart.stocks")} <br /> {t("MobileLessThanSec.slide1.chart.stocksValue")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[17%] left-[10%] text-[10px] font-[700] tracking-[-0.787px]">
                  {t("MobileLessThanSec.slide1.chart.commodities")} <br /> {t("MobileLessThanSec.slide1.chart.commoditiesValue")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute top-[31%] left-[7%] text-[10px] font-[700] tracking-[-0.787px]">
                  {t("MobileLessThanSec.slide1.chart.crypto")} <br /> {t("MobileLessThanSec.slide1.chart.cryptoValue")}
                </p>
                <p className="text-[#fff] leading-[110%] absolute bottom-[-19%] right-[13%] text-[10px] font-[700] tracking-[-0.787px]">
                  {t("MobileLessThanSec.slide1.chart.forex")} <br /> {t("MobileLessThanSec.slide1.chart.forexValue")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-[3rem] pt-[20px] mx-auto w-[100%]">
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#E9AD2F] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[15px] font-[600] tracking-[0.247px]">
                    {t("MobileLessThanSec.slide1.legend.forex")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#DCDCDC] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[15px] font-[600] tracking-[0.247px]">
                    {t("MobileLessThanSec.slide1.legend.bonds")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#B6B6B6] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[15px] font-[600] tracking-[0.247px]">
                    {t("MobileLessThanSec.slide1.legend.usStock")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#7DBB6C] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[15px] font-[600] tracking-[0.247px]">
                    {t("MobileLessThanSec.slide1.legend.commodities")}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[57px] h-[31px] bg-[#A36E00] rounded-[4px]"></div>
                  <p className="text-[#fff] text-[15px] font-[600] tracking-[0.247px]">
                    {t("MobileLessThanSec.slide1.legend.crypto")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className="relative space-y-[33px] min-h-[1234px] rounded-[16px] py-[30px] px-[20px] overflow-hidden w-[90%] mx-auto"
            style={{
              border:"0.319px solid var(--stroke, rgba(230, 175, 3, 0.12))",
              background:"#030F16"
            }}
          >
            <img
              src={ellipse || "/placeholder.svg"}
              className="absolute top-[0%] left-[0%]"
              alt=""
            />
            <img
              src={ellipse2 || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute bottom-[0%] right-[0%]"
              alt=""
            />
            <div className="space-y-[20px] relative z-[9]">
              <h3 className="text-[30px] font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
                {t("MobileLessThanSec.slide2.title")}
              </h3>
              <p className="text-[15px] font-[400] max-w-[881px] mx-auto w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
                {t("MobileLessThanSec.slide2.description")}
              </p>
            </div>
            <div
              className="px-[15px] py-[20px] space-y-[32px] max-w-[366px] mx-auto rounded-[13px] bg-[#030F16] border border-[#2B2B2B] relative z-[9]"
            >
              <div className="flex items-start space-x-[3rem] justify-center">
                <div className="flex space-y-[14px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon1 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                    {t("MobileLessThanSec.slide2.comparison.newPlatform")}
                  </h3>
                </div>
                <div className="flex space-y-[20px] flex-col items-center justify-start">
                  <img className="w-[54px] h-[54px]" src={cardicon2 || "/placeholder.svg"} alt="" />
                  <h3 className="text-[#A8A8A8] text-center text-[18px] font-[600] leading-[105%] tracking-[-1.219]">
                    {t("MobileLessThanSec.slide2.comparison.blockchainFX")}
                  </h3>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon1 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                      {t("MobileLessThanSec.slide2.table.cost.title")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.cost.platform")}
                        </h4>
                        <div
                          className="relative"
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                        >
                          <img className="pt-1" src={Iicon || "/placeholder.svg"} alt="Info Icon" />
                          {showTooltip && (
                            <div className="absolute -left-8 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                              {t("MobileLessThanSec.slide2.table.cost.tooltip")}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.cost.bfx")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon2 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                      {t("MobileLessThanSec.slide2.table.time.title")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.time.platform")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.time.bfx")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon3 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                      {t("MobileLessThanSec.slide2.table.team.title")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                        <h4 className="text-[#fff] font-[500] text-center text-[15px] tracking-[-1px] leading-[120%]">
                          {t("MobileLessThanSec.slide2.table.team.platform")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.team.bfx")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] border border-[#2B2B2B]">
                  <div className="flex justify-center py-[10px] items-center flex-col">
                    <img className="w-[23px] h-[20.815px]" src={icon4 || "/placeholder.svg"} alt="" />
                    <h4 className="text-[#FFF] font-[700] text-[20px] leading-[105%]">
                      {t("MobileLessThanSec.slide2.table.workScope.title")}
                    </h4>
                  </div>
                  <div className="flex border-t border-[#2B2B2B]">
                    <div className="w-[50%] py-[3px] border-r border-[#2B2B2B]">
                      <div className="flex justify-center space-x-2 px-[2px] py-[5px] items-center">
                        <h4 className="text-[#fff] font-[500] text-start text-[15px] tracking-[-1px] leading-[120%]">
                          {t("MobileLessThanSec.slide2.table.workScope.platform")}
                        </h4>
                      </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center py-[3px]">
                      <div className="flex items-center justify-center">
                        <h4 className="text-[#fff] font-[500] text-[15px] tracking-[-1px] leading-[200%]">
                          {t("MobileLessThanSec.slide2.table.workScope.bfx")}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-[32px] min-h-[1234px] py-4 px-2 w-[90%] mx-auto border-[1px] border-[#2B2B2B] relative overflow-hidden rounded-[16px]">
            <img
              src={ellipse || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute top-[0%] left-[0%]"
              alt=""
            />
            <img
              src={ellipse2 || "/placeholder.svg"}
              className="max-w-[400px] h-[450px] absolute bottom-[0%] right-[0%]"
              alt=""
            />

            <div className="space-y-[30px] mx-auto">
              <div className="space-y-[20px] pb-[30px]">
                <h3 className="text-[30px] font-[600] text-center leading-[120%] text-[#FFF] tracking-[-2.548px]">
                  {t("MobileLessThanSec.slide3.title")}
                </h3>
                <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
                  {t("MobileLessThanSec.slide3.description")}
                </p>
              </div>
              <div
                className="space-y-[30px] bg-[#030F16] border border-[#2B2B2B] rounded-[5.712px] px-[28.32px] py-[50px]"
                style={{
                  boxShadow: "0px 7.032px 35.16px 0px rgba(169, 169, 169, 0.30)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[#FFF] font-[500] text-[10.56px]">
                    {t("MobileLessThanSec.slide3.chart.title")}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <hr className="h-[2px] w-[8px] bg-[#E5AE00]" />
                    <p className="text-[7px] text-[#949494] font-[500]">
                      {t("MobileLessThanSec.slide3.chart.blockchainFX")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <hr className="h-[2px] w-[8px] bg-[#CE2A96]" />
                    <p className="text-[7px] text-[#949494] font-[500]">
                      {t("MobileLessThanSec.slide3.chart.regularPlatform")}
                    </p>
                  </div>
                </div>
                <div className="py-[30px]">
                  <img src={graphyp || "/placeholder.svg"} alt="" />
                </div>
              </div>
              <div>
                <p className="text-[14px] py-[30px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[175%] text-[#fff] tracking-[-0.32px]">
                  {t("MobileLessThanSec.slide3.source")}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[102px] w-[100%] h-[40px]"
                  onClick={handleScroll}
                >
                  {t("MobileLessThanSec.slide3.buttonText")}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination flex justify-center p-2 gap-3 mt-4"></div>
      <div className="pt-[30px] flex justify-center items-center space-x-2">
        <button className="swiper-button-prev-swp a transform -translate-y-1/2">
          <img className="w-[42.545px] h-[42.545px]" src={arw || "/placeholder.svg"} alt="" />
        </button>
        <button className="swiper-button-next-swp rotate-[182deg] transform -translate-y-1/2">
          <img className="w-[42.545px] h-[42.545px]" src={arw || "/placeholder.svg"} alt="" />
        </button>
      </div>
    </div>
  </div>
  );
}

export default MobileLessThanSec;
