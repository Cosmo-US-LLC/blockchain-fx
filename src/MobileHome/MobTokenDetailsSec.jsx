import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";
import chart from "../assets/TokenAllocationSec/chart_w.png";

function MobTokenDetailsSec() {
  const address = "0xCa1e5c23E3eEB1CB5dd1257FbB304FaB1227e094";

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
    <div className="py-[30px] bg-[#000]" id="allocation">
      <div className="relative space-y-[20px] w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#fff] tracking-[-1px]">
            Token Details
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#8497A2] tracking-[-0.32px]">
            Use the contract information below <br /> to add the $BFX token to
            your wallet.
          </p>
        </div>
        <div className="space-y-[20px]">
          <div className="bg-[#030F16] w-[100%] border p-5 rounded-[6px] border-white border-opacity-10">
            <img src={chart} alt="Chart" className="h-[210px] w-auto object-contain" />
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Token Name</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              BlockchainFX
            </h3>
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Launch on</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              Uniswap and CEX
            </h3>
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Token Symbol</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              BFX
            </h3>
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Token Type</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              Ethereum
            </h3>
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Decimal</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">18</h3>
          </div>
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">Total Supply</h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              3.5B
            </h3>
          </div>
          {/* <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center ">
            <div className="bg-[#030F16]border px-[12px] rounded-[6px] w-[100%] pt-[12px] pb-[12px] border-white border-opacity-10">
              <h4 className="text-[#fff] text-[12px] font-[400]">
                Token Contract Address
              </h4>
              <h3 className="text-white opacity-70 flex break-all items-center text-[12px] font-[700]">
                {address}{" "}
                <img
                  src={copy}
                  className="h-[18px] ml-2 cursor-pointer"
                  alt="Copy Icon"
                  onClick={copyToClipboard}
                />
              </h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MobTokenDetailsSec;
