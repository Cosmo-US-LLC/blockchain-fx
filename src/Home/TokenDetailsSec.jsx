import React from "react";

import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";

function TokenDetailsSec() {
 
  return (
    <div className="pt-[77px] space-y-[35px] bg-[#FAFAFA] pb-[80px]">
      <div className="max-w-[1220px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[50px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
          Token Details
          </h3>
          <p className="text-[20px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
          Use the contract information below to add the $BFX token to your wallet.
          </p>
        </div>
      <div className="space-y-[17px]">
      <div className="w-[100%] mx-auto flex justify-between items-center ">
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Token Name</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">BlockchainFX</h3>
        </div>
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Launch on</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">Uniswap and CEX</h3>
        </div>
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Token Type</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">Ethereum</h3>
        </div>
        
       </div>
       <div className="w-[100%] mx-auto flex justify-between items-center ">
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Token Symbol</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">$BFX</h3>
        </div>
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Decimal</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">18</h3>
        </div>
        <div className="max-w-[363px] w-[100%] border px-[24px] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Total Supply</h4>
            <h3 className="text-[#444] text-[23px] font-[700]">3.5B</h3>
        </div>
        
       </div>
       <div className="w-[100%] mx-auto flex justify-between items-center ">
        <div className="border px-[24px] w-[100%] pt-[17px] pb-[16px] border-[#000]">
            <h4 className="text-[#444] text-[16px] font-[400]">Token Contract Address</h4>
            <h3 className="text-[#444] flex text-[23px] font-[700]">0xfe588f4cfaf1126446d421cf00ec50cbe19b70cf <img src={copy} className="pl-2" alt="" /></h3>
        </div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default TokenDetailsSec;
