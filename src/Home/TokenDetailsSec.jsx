import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";

function TokenDetailsSec() {
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
    <div className="pt-[50px] space-y-[35px] bg-[#FAFAFA] pb-[50px] px-[152px]">
      <div className="max-w-[896px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            Token Details
          </h3>
          <p className="text-[14px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            Use the contract information below to add the $BFX token to your
            wallet.
          </p>
        </div>
        <div className="space-y-[17px]">
          <div className="w-[100%] space-x-[20px] mx-auto flex justify-between items-center ">
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">Token Name</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">
                BlockchainFX
              </h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">Launch on</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">
                Uniswap and CEX
              </h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">Token Type</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">Ethereum</h3>
            </div>
          </div>
          <div className="w-[100%] mx-auto space-x-[20px] flex justify-between items-center ">
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                Token Symbol
              </h4>
              <h3 className="text-[#444] text-[16px] font-[700]">$BFX</h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">Decimal</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">18</h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                Total Supply
              </h4>
              <h3 className="text-[#444] text-[16px] font-[700]">3.5B</h3>
            </div>
          </div>
          <div className="w-[100%] mx-auto flex justify-between items-center ">
            <div className="border px-[17px] space-y-[7px] rounded-[6px] w-[100%] pt-[14px] bg-[#fff] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                Token Contract Address
              </h4>
              <h3 className="text-[#444] flex text-[16px] font-[700]">
                {address}{" "}
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
    </div>
  );
}

export default TokenDetailsSec;
