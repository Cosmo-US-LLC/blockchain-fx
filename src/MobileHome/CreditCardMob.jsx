import React, { useEffect, useRef } from "react";
import creditVideo from "../assets/CreditCard/cred.mp4";
import ellipse from "../assets/CreditCard/ellipse.webp";

function CreditCardMob() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsinline", "");
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
    <div className="pt-[34px] pb-[34px] px-6 bg-[#030B10]">
      <div className="relative flex flex-col gap-8 rounded-[16px] px-6 py-6 border border-[#E7B2092B] overflow-hidden">
        <img
          src={ellipse}
          className="max-w-[400px] h-[450px]  absolute top-[-15%] left-[-20%]  "
          alt=""
        />
        <h3 className="text-[32px] text-left capitalize font-[600] leading-[128%] tracking-[-2.52px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACE43]">
          BFX Visa Card
        </h3>

        <ul className="list-disc space-y-[6px]">
          <li className="text-[14px] text-[#ACC4D1]   ml-3 py-[8px] font-[500] ">
            Unlimited Spending{" "}
          </li>
          <div className="w=[100%] h-[0.3px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]  ml-3 py-[8px] font-[500] ">
            Metal or 18 Karat Gold Card
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]   ml-3 py-[8px] font-[500] ">
            Up to $100,000 per Transaction
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]   ml-3 py-[8px] font-[500] ">
            Up to $10K Monthly ATM Withdrawals{" "}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]  ml-3 py-[8px] font-[500] ">
            Use BFX and USDT Rewards for Payments{" "}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]   ml-3 py-[8px] font-[500] ">
            Accepted Worldwide (Online & In-Stores){" "}
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]    ml-3 py-[8px] font-[500] ">
            Top Up with BFX and 20+ Crypto
          </li>
          <div className="w=[100%] h-[0.5px] bg-[#ACC4D1]"></div>
          <li className="text-[14px] text-[#ACC4D1]  ml-3 pt-[8px] font-[500] ">
            BFX Visa Card Only Available in Presale
          </li>
        </ul>

        <div className="w-[100%] bg-[#030B10] rounded-[16px] items-center flex justify-center flex-col space-y-5  ">
          <video
            width="300"
            height="260"
            className="!rounded-[8px]"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={creditVideo} type="video/mp4" />
          </video>
        </div>
        <p className="text-[12px] text-[#FFF] font-[400] text-center leading-[175%] tracking-[-0.32px]">
          Shipping will begin once the BFX presale ends, as all cards will be
          sent out simultaneously. Every BFX Founder’s Club member will receive
          a secure form after the presale to submit their shipping details.
          Cards will be delivered worldwide via DHL or FedEx Express.
        </p>
      </div>
    </div>
  );
}

export default CreditCardMob;
