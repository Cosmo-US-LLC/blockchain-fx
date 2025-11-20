import React from "react";
import { useTranslation } from "react-i18next";
import AOFA from "../assets/herosection/AOFA.webp";
import uersrev from "../assets/herosection/Avatar group.webp";
import stars from "../assets/herosection/stars (2).webp";
import heroicns1 from "../assets/herosection/herosvg (1).svg";
import heroicns2 from "../assets/herosection/herosvg (3).svg";
import heroicns3 from "../assets/herosection/herosvg (2).svg";
import check from "../assets/herosection/check.svg";

import herobnr1 from "../assets/herosection/bnrhero (2).webp";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";
import herobnr5 from "../assets/herosection/bnrhero (9).svg";
import herobnr6 from "../assets/herosection/bnrhero (7).svg";
import herobnr7 from "../assets/herosection/full-okx-logo 1.svg";
import herobnr8 from "../assets/herosection/bnrhero (8).svg";
import herobnr9 from "../assets/herosection/bnrhero (6).svg";
import herobnr10 from "../assets/herosection/bnrhero (11).svg";
import herobnr11 from "../assets/herosection/bnrhero (12).svg";

function MobileHero() {
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
      const element = document.getElementById("MobileDemo");
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
    <div className="pt-[22px] pb-[15px] bg-[#020B10]" id="hero">
      <div className=" w-[90%] mx-auto ">
        <div className="">
          <div className="flex flex-col ">
            {/* <h4 className="text-[9px] mb-1 leading-[24px] font-[600] text-[#E5AE00] tracking-[-0.4px] uppercase">
                     Crypto Exchange Launches Coin with an Integrated Reward System
                   </h4> */}
            <div
              className=" border border-white border-opacity-20 flex space-x-[10px] max-w-[480px] w-[100%] mx-auto  justify-center items-center rounded-full px-2"
              style={{
                background:
                  " linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.0005 0C3.13425 0 0 3.13364 0 6.99875C0 10.8659 3.13425 14 7.0005 14C10.8667 14 14 10.8654 14 6.99875C14 3.13364 10.8667 0 7.0005 0ZM7.0005 13.2831C3.52929 13.2831 0.716973 10.4693 0.716973 6.99825C0.716973 3.52866 3.52929 0.715946 7.0005 0.715946C10.4707 0.715946 13.2835 3.52866 13.2835 6.99825C13.283 10.4693 10.4702 13.2831 7.0005 13.2831Z"
                  fill="white"
                />
                <path d="M7.72099 8L8 3H6L6.27809 8H7.72099Z" fill="white" />
                <path
                  d="M7.00624 9C6.41417 9 6 9.4072 6 9.9996C6 10.5706 6.40209 11 6.9837 11H7.00624C7.60958 11 8 10.5706 8 9.9996C7.98954 9.4072 7.59791 9 7.00624 9Z"
                  fill="white"
                />
              </svg>
              <h4 className="text-white font-[600] font-inter px-1 py-2 text-[12px]  uppercase">
                {t("hero.presale_stage_almost_sold_out")}
              </h4>
            </div>
            <h1 className="text-[35px] mb-4 mt-4 text-center font-[700] tracking-[-2px] leading-[120%] font-inter text-[#fff] ">
              <span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />{" "}
              <span
                className="pr-[8px]"
                style={{
                  background:
                    "linear-gradient(91deg, #E5AE01 24.64%, #FFE182 97%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("hero.title_highlight")}
              </span>
            </h1>
            <p
              className="text-[#fff] mb-4 mobilepara text-center font-[500] leading-[157%] tracking-[-0.14px] text-[16px]"
              dangerouslySetInnerHTML={{ __html: t("hero.subtitle_des") }}
            />
          </div>
          <div className="max-w-[450px] space-y-[27px]">
            <div className="relative flex justify-center">
              <iframe
                width="100%"
                height="200px"
                src={"https://fast.wistia.net/embed/iframe/w8ynmofaw4"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
                style={{ borderRadius: "12px" }}
              />
            </div>

            <div className="!mt-[15px] space-x-3 flex justify-center items-center">
              <p className="text-[15px] text-[#fff] leading-[185%] text-center font-[400]">
                {t("hero.Licensed")}
              </p>
              {/* <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex min-w-[130px] flex-col items-end">
                <img className="max-w-[130px]" src={AOFA} alt="" />
                <a
                  href="https://blockchainfx.com/license.pdf"
                  className="text-[10px] mr-[12px] underline text-[#fff] "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify license
                </a>
              </div> */}
            </div>
            <div className="flex items-center justify-center space-x-3 !mt-[20px]">
              <div className="flex flex-col items-center">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/Avatar%20group.webp"
                  }
                  className="object-cover h-[43px]"
                  loading="lazy"
                  alt="reviews"
                />
                <p className="text-[#fff] font-[400] text-[16px]">
                  {t("hero.verified_ratings")}
                </p>
              </div>
              <div
                className="flex space-x-2 items-center flex-col py-3 px-5 rounded-[10px]"
                style={{
                  background: "background: rgba(3, 15, 22, 0.30)",
                  border: "1.5px solid rgba(230, 175, 3, 0.30)",
                }}
              >
                <img
                  className="w-[82px]"
                  loading="lazy"
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/stars%20(2).webp"
                  }
                  alt="star"
                />
                <p className="text-[#fff] font-[400] text-[17.702px]">
                  {t("hero.rating")}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[15px] text-[#fff] leading-[185%] text-center font-[400]">
                {t("hero.audited_by")}
              </p>
            </div>
            <div className="!mt-[12px]  flex justify-center items-center space-x-[20px]">
              <img
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(1).svg"
                }
                alt="certik"
              />
              <img
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(3).svg"
                }
                alt="SolidProof logo shield icon and text"
              />
              <img
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/herosvg%20(2).svg"
                }
                alt="coinsult"
              />
            </div>

            <div className="flex flex-col gap-2 border border-[#C0C0C0] !mt-[20px] py-5 px-3 rounded-[13px]">
              <div className="flex items-center space-x-3 max-w-[320px] w-[100%]">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="BlockchainFX"
                />
                <p className="text-[#fff] font-[400] capitalize leading-[157%] text-[13px]">
                  {t("hero.featuremob1")}
                </p>
              </div>
              <div className="flex items-center space-x-3 max-w-[300px] w-[100%]">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="BlockchainFX"
                />
                <p className="text-[#fff] font-[400] capitalize leading-[157%] text-[13px]">
                  {t("hero.featuremob2")}
                </p>
              </div>
              <div className="flex items-center space-x-3 max-w-[320px] w-[100%]">
                <img
                  src={
                    "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/check.svg"
                  }
                  alt="BlockchainFX"
                />
                <p
                  className="text-[#fff] capitalize font-[400] leading-[157%] text-[13px]"
                  dangerouslySetInnerHTML={{ __html: t("hero.featuremob3") }}
                ></p>
              </div>
            </div>
            <div className="flex justify-center pb-[0px] items-center space-x-[17px]">
              <button
                onClick={handleScroll}
                style={{
                  background:
                    "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                }}
                className="text-[#000] px-[20px] hover:opacity-[0.8] text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] w-fit h-[50px]"
              >
                {t("hero.buy_button")}
              </button>
              <button
                onClick={handleScrollToDemo}
                className="hover:text-[#000] hover:bg-[#E5AE00] px-[15px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] rounded-[8px] !w-fit h-[50px]"
              >
                {t("hero.how_it_works_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-2 border-[1px] w-[90%] mx-auto mt-[30px] border-[#262626] flex flex-col items-center p-2 rounded-[6px] ">
        <p className="font-[600] relative z-[99] text-[15px] text-center text-[white]">
          {t("featured_sec.featured_in")}
        </p>
        <div className="grid gap-3">
          <div className="flex space-x-2 justify-center items-center">
            <a
              href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(1).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://www.binance.com/en/square/post/29811397309321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(2).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[90px] max-w-[90px]"
            >
              <img
                className="mix-blend-luminosity w-[100%] h-[100%] opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(2).webp"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(3).svg"
                }
                alt="Featured"
              />
            </a>
          </div>
          <div className="flex space-x-3 justify-center items-center">
            <a
              href="https://www.kucoin.com/news/flash/blockchainfx-presale-surpasses-10m-as-it-aims-to-outperform-sui-and-hyperliquid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(11).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://hackernoon.com/best-crypto-to-buy-now-why-blockchainfxs-$0019-presale-could-outpace-sei-and-pengu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(9).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://finbold.com/blockchainfx-raises-7-24m-in-presale-as-first-multi-asset-super-app-connecting-crypto-stocks-and-forex-goes-live-in-beta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(7).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://www.okx.com/learn/cardano-blockchainfx-presale-opportunity "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="brightness-0 invert-[.70] h-[14px] w-[92px] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/full-okx-logo%201.svg"
                }
                alt="Featured"
              />
            </a>
          </div>
          <div className="flex space-x-3 justify-center items-center">
            <a
              href="https://www.bitget.com/news/detail/12560604943063"
              target="_blank"
              rel="noopener noreferrer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-[26px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0 object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(8).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://cointelegraph.com/press-releases/blockchainfx-raises-7-24m-in-presale-as-multi-asset-app-for-crypto-stocks-forex-launches-beta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mix-blend-luminosity opacity-[0.5] h-[20px] hover:opacity-[1] hover:mix-blend-normal object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(6).svg"
                }
                alt="Featured"
              />
            </a>
            <a
              href="https://decrypt.co/339250/blockchainfx-raises-7-24m-in-presale-as-first-multi-asset-super-app-connecting-crypto-stocks-and-forex-goes-live-in-beta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mix-blend-luminosity opacity-[0.5] h-[20px] hover:opacity-[1] hover:mix-blend-normal object-cover"
                src={
                  "https://bfx-cdn.fra1.cdn.digitaloceanspaces.com/assets/blockchainfx/HeroSection2/bnrhero%20(12).svg"
                }
                alt="Featured"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
