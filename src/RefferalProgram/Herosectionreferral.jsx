import React from "react";

function HerosectionReferral() {

  return (
    <div className="pt-[55px] pb-[20px] bg-[#020B10]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="">
          <div className="space-y-[10px]">
            
            <h1 className=" text-[66px] pt-[15px] font-[600] leading-[120%] tracking-[-1px] text-[#fff] text-center">
              BFX Referral Program
            </h1>
            <p className="text-[16px] max-w-[646px] w-[100%] mx-auto font-[400] leading-[150%] text-center text-[#8497A2] tracking-[-0.32px] " style={{ marginTop: '0px' }}>
              Connect your wallet to access your referral code and dashboard
            </p>

            <div className="flex items-center justify-center pt-[10px]">
              <button
                style={{
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
                className="text-[#000] 2xl:px-[12px] xl:px-[12px] lg:px-[12px] md:px-[12px] sm:px-[10px] px-[10px] hover:opacity-[0.8] italic 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] font-[800] border border-[#E5AE00] hover:border-[#E6B005] rounded-[8px] 2xl:max-w-[179px] xl:max-w-[179px] lg:max-w-[179px] md:max-w-[179px] sm:max-w-[150px] max-w-[150px] w-[100%] 2xl:h-[43px] xl:h-[43px] lg:h-[43px] md:h-[43px] sm:h-[40px] h-[40px]"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerosectionReferral;
