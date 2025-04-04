import React from "react";

import cardicon1 from "../assets/SecurityBuilt/s1.png";
import cardicon2 from "../assets/SecurityBuilt/s2.png";
import cardicon3 from "../assets/SecurityBuilt/s3.png";
import cardicon4 from "../assets/SecurityBuilt/s4.png";
import cardicon5 from "../assets/SecurityBuilt/s5.png";
import cardicon6 from "../assets/SecurityBuilt/s6.png";
import black from "../assets/GetInFirst/black2.png";


function SecurityBuiltSec() {
  return (
    <div className="bg-[#020B10] pt-[50px] pb-[50px] px-[80px]">
      <div className="max-w-[1280px] py-[100px] rounded-[16px] space-y-[40px] w-[100%] mx-auto bg-no-repeat bg-cover bg-center  "
                  style={{ backgroundImage: `url(${black})` }}>
      
      
        <div className="space-y-[30px]">
          <h3 className="text-[48px] capitalize font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
          Security Built Into the Core
          </h3>
          <p className="text-[18px] font-[400] italic max-w-[751px] text-center mx-auto w-[100%] leading-[155.5%] text-[#ACC4D1] tracking-[-0.36px]">
          BlockchainFX leverages advanced technology to build a reliable infrastructure and seamless ecosystem, providing a secure and user-friendly experience for BFX holders and traders.
          </p>
        </div>
        <div className="max-w-[694px] mx-auto grid grid-cols-3 gap-y-[30px]  text-white">
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon1} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            Third-Party <br /> Audited
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            BFX Team has been <br />KYC verified
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            Live Monitoring and <br /> Threat Detection
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            Comprehensive<br />Risk Management
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            Enhanced Data <br /> Privacy
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" className="w-[80px]" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-center">
            GDPR <br />compliant
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityBuiltSec;
