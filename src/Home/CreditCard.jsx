import React from "react";
import creditVideo from "../assets/CreditCard/cred.mp4";
import applepay from "../assets/CreditCard/btnsvg (2).png";
import googlelepay from "../assets/CreditCard/btnsvg (1).png";

import ernvet1 from "../assets/EarnOnSec/Ellipse 4.png";
import ernvet2 from "../assets/EarnOnSec/Ellipse 3.png";

function CreditCard() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };

  return (
    <div className="pt-[20px] pb-[50px] bg-[#020B10]">
      <div className="max-w-[1200px] reative overflow-hidden relative overfloe-hidden bg-[#030F16] min-h-[480px] p-[30px] w-[100%] space-y-[25px] mx-auto rounded-[13px]"
         style={{
          border: "1px solid #2B2B2B"
        }}
      >
      <div className="relative z-[9] space-x-[2rem] flex justify-between  items-center  ">
        
          <div className="w-[45%] p-[40px]  min-h-[460px]  rounded-[11px] space-y-[20px]">
            <h3 className="text-[40px]  capitalize font-[700] leading-[128%]  tracking-[-1px]"
            style={{
              background:"linear-gradient(90deg, #FFF 0%, #FACD42 100%)",
              backgroundClip:"text",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent"
            }}>
            BFX Visa Card
            </h3>
            <ul className="list-disc">
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Unlimited Spending</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Metal or 18 Karat Gold Card </li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Up to $100,000 per Transaction</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Up to $10K Monthly ATM Withdrawals </li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Use BFX and USDT Rewards for Payments</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Accepted Worldwide (Online & In-Stores) </li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">Top Up with BFX and 20+ Crypto</li>
              <li className="text-[16px] text-[#fff] border-b border-[#26282A] ml-5 py-[14px] font-[500] ">BFX Visa Card Only Available in Presale
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-3">
            <h4 className="text-[16px] text-[#fff] font-[400] ">Compatible with</h4>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]"><img src={applepay} className="h-[36px]" alt="" /></button>
          <button className="w-[80.2px] h-[36px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px]"><img src={googlelepay} className="h-[36px]" alt="" /></button>
          </div>
          </div>
          <div className="w-[54%] flex items-center flex-col justify-center  min-h-[460px] space-y-[20px]  rounded-[11px]">
            <video width="500" className="!rounded-[11px]" height="260" playsInline  controls={false} autoPlay muted loop>
             <source src={creditVideo} type="video/mp4" />
           </video>
           <div className="">
            <p className="text-[10px] text-center max-w-[816px] text-[#fff] mx-auto tracking-[-0.32px] leading-[230%] font-[400] ">Shipping will begin once the BFX presale ends, as all cards will be sent out simultaneously. Every BFX Founder’s Club member will receive a secure form after the presale to submit their shipping details. Cards will be delivered worldwide via DHL or FedEx Express. </p>
           </div>
          </div>
        </div>
             <div className="absolute top-[-8%] left-[-5%]">
                                        <img src={ernvet2} className=" " alt="" />
                                      </div>
                                      <div className="absolute bottom-[0%] right-[0%]">
                                        <img src={ernvet1} className="" alt="" />
                                      </div>
      </div>
    </div>
  );
}

export default CreditCard;
