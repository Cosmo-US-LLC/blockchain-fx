import React from "react";
import check from "../assets/herosection/check.svg";
import { useTranslation } from "react-i18next";
import AOFA from "../assets/herosection/AOFA.webp";

import uersrev from "../assets/herosection/Avatar group.png";
import stars from "../assets/herosection/stars.png";
import heroicns1 from "../assets/herosection/herosvg (1).svg";
import heroicns2 from "../assets/herosection/herosvg (2).svg";
import heroicns3 from "../assets/herosection/herosvg (3).svg";

function Herosection() {
  const { t } = useTranslation();

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

  const handleScrollToDemo = () => {
    setTimeout(() => {
      const element = document.getElementById("HowDoesItSec");
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
    <div className="pt-[55px] pb-[20px] bg-[#020B10]" id="hero">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="flex justify-between gap-[2rem]">
          <div className="space-y-[22px] max-w-[638px] w-[100%]">
            <h1 className="text-[60px] font-[700] font-inter leading-[100%] tracking-[-1px] text-[#fff] ">
              <span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />{" "}
              <span
                style={{
                  background:
                    "linear-gradient(91deg, #E5AE01 24.64%, #FFE182 97%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                {t("hero.title_highlight")}
              </span>
            </h1>
            <p
              className="text-[#fff] max-w-[550px] py-[10px] w-[100%] font-[400] font-inter leading-[133.333%] text-[18px]"
              dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
            />

            <div className="space-y-[10px] max-w-[530px] border-[0.5px] border-[#C0C0C0] py-[15px] pl-[21px] rounded-[13px]">
              <div className="flex items-center space-x-2">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="tick icon"
                />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">
                  {t("hero.feature1")}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="tick icon"
                />
                <p className="text-[#fff] font-[400] capitalize leading-[150%] text-[16px]">
                  {t("hero.feature2")}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="tick icon"
                />
                <p className="text-[#fff] capitalize font-[400] leading-[150%] text-[16px]">
                  {t("hero.feature3")}
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[650px] w-[100%] space-y-[27px]">
            <div className="flex justify-center">
              {/* Embed Wistia Player */}
              <script src="https://fast.wistia.com/player.js" async></script>
              <script
                src="https://fast.wistia.com/embed/w8ynmofaw4.js"
                async
                type="module"
              ></script>
              <style>
                {`
              wistia-player[media-id='w8ynmofaw4']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/w8ynmofaw4/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
              }
            `}
              </style>
              <wistia-player
                media-id="w8ynmofaw4"
                aspect="1.7777777777777777"
                style={{
                  width: "100%",
                  maxWidth: "730px",
                  height: "auto",
                  maxHeight: "410px",
                }}
              ></wistia-player>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start pt-[20px] min-w-[350px] mt-3 pb-[0px] items-center space-x-[17px]">
            <button
              onClick={handleScroll}
              style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className="text-[#000] px-[30px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px]  w-fit h-[50px]"
            >
              {t("hero.buy_button")}
            </button>

            <button
              onClick={handleScrollToDemo}
              className="hover:text-[#000] hover:bg-[#E5AE00] px-[18px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005]  rounded-[8px] !w-fit h-[50px]"
            >
              {t("hero.how_it_works_button")}
            </button>
            <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden min-w-[200px]  flex-col items-end">
              <a href="https://blockchainfx.com/license.pdf" target="_blank" rel="noopener noreferrer" className=""><img className="max-w-[160px]" src={AOFA} alt="" /></a>
            </div>
          </div>
          <div className="flex mt-[-15px] items-start justify-between space-x-2 max-w-[580px] w-[100%]">
            <div>
              <h3 className="text-[#fff] mb-[18px] font-inter leading-[185%] font-[400] text-center text-[16px]">
                {t("hero.audited_by")}
              </h3>
              <div className="flex justify-center items-center space-x-[15px]">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(1).svg"
                  }
                  alt="certik"
                />
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(2).svg"
                  }
                  alt="coinsult"
                />
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(3).svg"
                  }
                  alt="SolidProof logo shield icon and text"
                />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="">
                <p className="text-[#fff] text-center mb-2 font-inter font-[400] text-[16px]">
                  {t("hero.verified_ratings")}
                </p>
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/Avatar%20group.png"
                  }
                  className="object-cover"
                  loading="lazy"
                  alt="reviews"
                />
                <div className="flex items-center mt-3 justify-center space-x-[10px] rounded-[10px]">
                  <p className="text-[#fff] font-[400] text-[17.7px] leading-[100%]">
                    {t("hero.rating")}
                  </p>
                  <img
                    className="w-[82px] h-[15px]"
                    loading="lazy"
                    src={
                      "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/stars.png"
                    }
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
