import React from "react";

import cardicon1 from "../assets/SecurityBuilt/secicn (1).svg";
import cardicon2 from "../assets/SecurityBuilt/secicn (2).svg";
import cardicon3 from "../assets/SecurityBuilt/secicn (3).svg";
import cardicon4 from "../assets/SecurityBuilt/secicn (4).svg";
import cardicon5 from "../assets/SecurityBuilt/secicn (5).svg";
import cardicon6 from "../assets/SecurityBuilt/secicn (6).svg";

function SecurityBuiltSec() {
  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[985px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Security Built into the Core
          </h3>
          <p className="text-[14px] font-[400] max-w-[550px] text-center mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            BlockchainFX leverages advanced technology to build a reliable
            infrastructure and seamless ecosystem, delivering a secure and
            user-friendly experience for traders.
          </p>
        </div>
        <div className="max-w-[658px] mx-auto grid grid-cols-3 gap-y-[30px]  ">
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon1} alt="" className="w-[26.7px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              PCI DSS
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" className="w-[31.3px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              Enhanced <br />
              Data Privacy
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" className="w-[41px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              Live Monitoring and <br />
              Threat Detection{" "}
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" className="w-[41.7px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              Third-Party <br />
              Risk Management
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" className="w-[36.6px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              Data backups and <br />
              disaster recovery
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" className="w-[28.1px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              GDPR <br /> compliant
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityBuiltSec;
