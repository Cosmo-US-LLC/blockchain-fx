import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import card from "../assets/CreditCard/card.webp";
import ellipse from "../assets/EarnOnSec/Ellipse 3.png";
import applepay from "../assets/CreditCard/btnsvg (2).png";
import googlelepay from "../assets/CreditCard/btnsvg (1).png";

function CreditCardMob() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsInline", "");
      video.setAttribute("muted", "");
      video.play().catch((error) => {
        console.log("Autoplay failed. Error:", error);
      });
    }
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[10px] pb-[34px] px-6 bg-[#020B10]">
      <div
        style={{
          border: "1px solid rgba(231, 178, 9, 0.17)",
        }}
        className="relative flex flex-col gap-6 rounded-[16px] px-6 py-6 overflow-hidden bg-[#010E11]"
      >
        <img
          src={ellipse}
          className="absolute top-[0%] w-[500px] h-[520px] left-[0%]"
          alt=""
        />
        <h3 className=" text-left capitalize text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACE43]">
          BFX Visa Card
        </h3>

        <ul className="list-disc space-y-[6px]">
          <div className="w=[100%] h-[0.3px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Metal or 18 Karat Gold Card
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Up to $100,000 per Transaction
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Up to $10K Monthly ATM Withdrawals
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Use BFX and USDT Rewards for Payments
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Accepted Worldwide (Online & In-Stores)
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 py-[8px] font-[500]">
            Top Up with BFX and 20+ Crypto
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#fff]"></div>
          <li className="text-[14px] text-[#fff] ml-3 pt-[8px] font-[500]">
            BFX Visa Card Only Available in Presale
          </li>
        </ul>

        <div className="flex items-center justify-center space-x-2">
          <h4 className="text-[14px] text-[#fff] font-[400]">
            Compatible with
          </h4>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]">
            <img src={applepay} className="h-[36px]" alt="Apple Pay" />
          </button>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]">
            <img src={googlelepay} className="h-[36px]" alt="Google Pay" />
          </button>
        </div>

        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
          className="w-[100%] rounded-[16px] items-center py-[20px] flex justify-center"
        >
          <img src={card} className="mx-auto max-w-[258px]" alt="" />
        </div>
        <p className="text-[12px] text-[#FFF] font-[400] text-center leading-[175%] tracking-[-0.32px]">
          Shipping will begin once the BFX presale ends, as all cards will be
          sent out simultaneously. Every BFX NFT holder will receive a secure
          form after the presale to submit their shipping details. Cards will be
          delivered worldwide via DHL or FedEx Express.
        </p>
      </div>
    </div>
  );
}

export default CreditCardMob;
