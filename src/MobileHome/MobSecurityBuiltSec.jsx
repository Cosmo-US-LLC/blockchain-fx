import React from "react";

import cardicon1 from "../assets/SecurityBuilt/secicn (1).svg";
import cardicon2 from "../assets/SecurityBuilt/secicn (2).svg";
import cardicon3 from "../assets/SecurityBuilt/secicn (3).svg";
import cardicon4 from "../assets/SecurityBuilt/secicn (4).svg";
import cardicon5 from "../assets/SecurityBuilt/secicn (5).svg";
import cardicon6 from "../assets/SecurityBuilt/secicn (6).svg";

function MobSecurityBuiltSec() {
 
  return (
    <div className="pt-[24px] space-y-[35px] pb-[24px] bg-[#000]">
      <div className="space-y-[30px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
        <h3 className="text-[30px] font-[600] capitalize text-center leading-[114%] text-[#FFF] tracking-[-1px]">
          Security Built <br /> into the Core
          </h3>
          <p className="text-[15px] font-[400] max-w-[365px] text-center mx-auto w-[100%] leading-[28px] text-[#fff] tracking-[-0.32px]">
            BlockchainFX leverages advanced technology to build a reliable
            infrastructure and seamless ecosystem, delivering a secure and
            user-friendly experience for traders.
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-y-[3rem] pt-3">
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon1} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center"> Third-Party <br /> Audited</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon2} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center">BFX Team has been <br />KYC verified</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon3} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center">Live Monitoring and <br /> Threat Detection</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon4} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center">Comprehensive<br />Risk Management</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon5} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center"> Enhanced Data <br /> Privacy</h4>
          </div>
          <div className=" flex flex-col mx-auto space-y-[10px] justyfy-center items-center w-[100%]">
            <img src={cardicon6} className="max-h-[80px]" alt="" />
            <h4 className="text-[14px] font-[400] italic tracking-[-0.32px] text-white text-center"> GDPR <br />compliant</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobSecurityBuiltSec;
