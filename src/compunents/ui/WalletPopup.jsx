import React from "react";

import wlticn1 from "../../assets/navbar/wallet/popsvg (1).svg"
import wlticn2 from "../../assets/navbar/wallet/popsvg (2).svg"
import wlticn3 from "../../assets/navbar/wallet/popsvg (3).svg"
import wlticn4 from "../../assets/navbar/wallet/popsvg (4).svg"

const WalletPopup = ({ onConnect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[487px] px-[30px] py-[24px] rounded-[8px] mt-[4rem] 2xl:mr-10 xl:mr-10 lg:mr-10 md:mr-0 sm:mr-0 mr-0">
       <div className="border border-[#E3E3E3] space-y-[20px] rounded-[8px] px-[30px] py-[14px]">
       <div className="flex justify-center ">
          <button
            onClick={onConnect}
            className="text-white bg-[#E5AE00] px-[5px] hover:text-black hover:bg-transparent  text-[16px] font-[700] border border-[#E5AE00] hover:border-[#000] rounded-[4px]  max-w-[153px] w-[100%]  h-[42px]"
          >
            Connect Wallet{" "}
          </button>
        </div>
        <div className="flex justify-between items-center max-w-[280px] mx-auto">
          <div className="w-[52px] h-[52px] border-[1px] bg-[#F6F6F6] flex justify-center items-center border-[#E3E3E3]">
            <img src={wlticn1} alt="" />
          </div>
          <div className="w-[52px] h-[52px] border-[1px] bg-[#F6F6F6] flex justify-center items-center border-[#E3E3E3]">
            <img src={wlticn2} alt="" />
          </div>
          <div className="w-[52px] h-[52px] border-[1px] bg-[#F6F6F6] flex justify-center items-center border-[#E3E3E3]">
            <img src={wlticn3} alt="" />
          </div>
          <div className="w-[52px] h-[52px] border-[1px] bg-[#F6F6F6] flex justify-center items-center border-[#E3E3E3]">
            <img src={wlticn4} alt="" />
          </div>
        </div>
        <div className="border border-[#E3E3E3] space-y-[14px] rounded-[8px] px-[20px] py-[15px]">
          <h3 className="text-[#444] text-[14px] font-[700] text-center leading-[normal]">Connect Wallet Manually</h3>
          <p className="text-[#8A8A8A] tracking-[-0.6px] text-[12px] font-[400] text-center leading-[normal]">Get access to your personal dashboard without connecting your wallet. Just copy and paste your wallet address in the field and see how many BFX tokens you have.</p>
        <div className="w-[100%] flex">
          <input type="text" className="p-2 w-[100%] outline-none border border-r-0 h-[39px]" />
          <button className="bg-[#E5AE00] text-[12px] text-white font-[700] h-[39px] w-[90px]">Access</button>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default WalletPopup;
