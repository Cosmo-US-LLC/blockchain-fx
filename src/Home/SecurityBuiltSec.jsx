import React from "react";

import cardicon1 from "../assets/SecurityBuilt/secicn (1).svg";
import cardicon2 from "../assets/SecurityBuilt/secicn (2).svg";
import cardicon3 from "../assets/SecurityBuilt/secicn (3).svg";
import cardicon4 from "../assets/SecurityBuilt/secicn (4).svg";
import cardicon5 from "../assets/SecurityBuilt/secicn (5).svg";
import cardicon6 from "../assets/SecurityBuilt/secicn (6).svg";

function SecurityBuiltSec() {
 
  return (
    <div className="pt-[73px] space-y-[35px] pb-[65px] bg-[#FAFAFA]">
      <div className="max-w-[985px] space-y-[90px] w-[100%] mx-auto ">
        <div className="">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Security Built into the Core
          </h3>
        </div>
        <div className=" grid grid-cols-3 gap-y-[4rem]  " 
        >
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon1} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">PCI DSS</h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon2} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Enhanced <br />Data Privacy</h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon3} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Live Monitoring and  <br />Threat Detection </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon4} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Third-Party  <br />Risk Management</h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon5} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">Data backups and  <br />disaster recovery</h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img src={cardicon6} alt="" />
            <h4 className="text-[20px] font-[600] tracking-[-0.32px] text-center">GDPR  <br /> compliant</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityBuiltSec;
