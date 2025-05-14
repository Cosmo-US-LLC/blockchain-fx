import React from "react";
// import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "../assets/TokenAllocationSec/Icon.svg";
import chart from "../assets/TokenAllocationSec/chart.png";
import { useTranslation } from "react-i18next";

function TokenAllocationSec() {
  const { t } = useTranslation();

  const address = "0xd0d801eea2c2422df3e626b82ebbb618f4cc445e";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
 
  return (
    <div className="bg-[#020B10] pt-[50px] pb-[50px] px-[80px]" id="allocation">
      <div className="space-y-[10px] pb-[50px]">
          <h3 className="text-[48px] font-[600] text-center leading-[120%] text-white tracking-[-3.36px]">
          Token Details
          </h3>
          <p className="text-[18px] text-[#fff] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[140%] tracking-[-0.4px] ">
          The token allocation is structured to reward early supporters the most
          </p>
        </div>
    <div className="bg-[#111] max-w-[1200px] mx-auto rounded-[10px] py-[40px] px-[272px] ">
      <div className="max-w-[696px] relative space-y-[40px] w-[100%] mx-auto ">
        
       <div className="w-[100%] mx-auto ">
        <img src={chart} loading="lazy" className="" alt="" />
       </div>
      </div>
    </div>
    <div className="space-y-[8px] max-w-[1200px] mx-auto mt-[8px]">
  {/* First Row */}
  <div className="w-[100%] space-x-[21px] mx-auto flex justify-between items-center">
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Token name:</h4>
      <h3 className="text-white text-[18px] font-[500]">BlockchainFX</h3>
    </div>
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Launch on:</h4>
      <h3 className="text-white text-[18px] font-[500]">Uniswap and CEX</h3>
    </div>
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Token type:</h4>
      <h3 className="text-white text-[18px] font-[500]">Ethereum</h3>
    </div>
  </div>

  {/* Second Row */}
  <div className="w-[100%] mx-auto space-x-[21px] flex justify-between items-center">
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Token symbol:</h4>
      <h3 className="text-white text-[18px] font-[500]">BFX</h3>
    </div>
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Decimal:</h4>
      <h3 className="text-white text-[18px] font-[500]">18</h3>
    </div>
    <div className="max-w-[400px] w-[100%] border px-[17px] pt-[14px] bg-[#111] space-y-[7px] rounded-[10px] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Total Supply:</h4>
      <h3 className="text-white text-[18px] font-[500]">3.5B</h3>
    </div>
  </div>

  {/* Third Row (Contract Address - kept different as per original) */}
  <div className="w-[100%] mx-auto flex justify-between items-center">
    <div className="border px-[17px] space-y-[12px] rounded-[10px] w-[100%] pt-[14px] bg-[#111] pb-[16px] border-[#000]">
      <h4 className="text-white/70 text-[14px] font-[400]">Token Contract Address</h4>
      <h3 className="text-white flex text-[16px] font-[500]">
      0xD0d801eEa2c2422dF3e626b82EBBb618f4Cc445e{" "}
        <img
          src={copy}
          className="pl-2 w-[24px] cursor-pointer"
          alt="Copy Icon"
          onClick={copyToClipboard}
        />
      </h3>
    </div>
  </div>
</div>
    </div>
  );
}

export default TokenAllocationSec;
