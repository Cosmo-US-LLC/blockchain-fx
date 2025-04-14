import React from "react";
import ReferralEarn from "../assets/ReferralProgram/ReferralEarn.png";

function EarnWithReferral() {
  return (
    <div className="pt-[0px] sm:pt-[55px] pb-[20px] bg-[#020B10]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto">
        <div className="space-y-[10px]">
          <h1 className="text-[28px] sm:text-[40px] pt-[15px] font-[600] leading-[120%] tracking-[-1px] text-[#fff] text-center font-inter">
            EARN WITH REFERRALS
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-stretch space-x-[0px] sm:space-x-[40px] pt-[40px] px-[4%] sm:px-[0%] w-[100%] h-full">
          <div className="w-[100%] sm:w-[50%]">
            <div
              className="bg-[#242424] w-[100%]"
            >
              <div>
                <p className="text-[15px] sm:text-[16px] font-[600] pt-[16px] px-[16px] sm:px-[20px] leading-[120%] tracking-[-1px] text-[#D99A26] font-inter">
                  Step 1: Connect Your Wallet
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] py-[16px] sm:py-[24px] px-[16px] sm:px-[24px] font-inter">
                  Go to BlockchainFX.com/referral and connect your wallet.{" "}
                </p>
              </div>
            </div>

            <div className="bg-[#242424] w-[100%] mt-[20px]">
              <div>
                <p className="text-[15px] sm:text-[16px] font-[600] pt-[16px] px-[16px] sm:px-[20px] leading-[120%] tracking-[-1px] text-[#D99A26] font-inter">
                  Step 2: Share Your Referral Code
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] pt-[16px] sm:pt-[24px] px-[16px] sm:px-[20px] inter">
                  You’ll receive a unique referral code.
                </p>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] pb-[16px] sm:pb-[24px] pt-[4px] sm:pt-[10px] px-[16px] sm:px-[20px] font-inter">
                  Share it with friends, family, or your crypto community.
                </p>
              </div>
            </div>

            <div className="bg-[#242424] w-[100%] mt-[20px]">
              <div>
                <p className="text-[15px] sm:text-[16px] font-[600] pt-[16px] px-[16px] sm:px-[20px] leading-[120%] tracking-[-1px] text-[#D99A26] font-inter">
                  Step 3: Referral Benefits
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] pr-[10px] pt-[16px] sm:pt-[24px] pl-[16px] sm:pl-[20px] font-inter">
                  Anyone who uses your referral code and buys $100 or more will
                  get automatically 30% more BFX added to their purchase.
                </p>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-[#fff] pt-[16px] sm:pt-[20px] pb-[16px] sm:pb-[24px] pl-[16px] sm:pl-[20px] pr-[10px] font-inter">
                  You’ll get 10% of their purchase amount in BFX every time your
                  referral code is used. Plus, make it into the Top 20
                  Leaderboard and boost your rewards even more!
                </p>
              </div>
            </div>

            <div className="bg-[#242424] w-full mt-[20px]">
              <div>
                <p className="text-[15px] sm:text-[16px] font-[600] pt-[16px] px-[16px] sm:px-[20px] leading-[120%] tracking-[-1px] text-[#D99A26] font-inter">
                  Step 4: Track Your Earnings
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-white pt-[16px] sm:pt-[24px] pl-[16px] sm:pl-[20px] pr-[10px] font-inter">
                  Monitor your referral earnings right from your wallet.
                </p>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-white pb-[16px] sm:pb-[24px] pt-[5px] sm:pt-[10px] pl-[16px] sm:pl-[20px] pr-[10px] font-inter">
                  Watch your BFX grow as more people join through your link!
                </p>
              </div>
            </div>

            <div className="bg-[#242424] w-full mt-[20px]">
              <div>
                <p className="text-[15px] sm:text-[16px] font-[600] pt-[16px] px-[16px] sm:px-[20px] leading-[120%] tracking-[-1px] text-[#D99A26] font-inter">
                  Join The Movement Now
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] font-[400] leading-[120%] tracking-[-1px] text-white py-[16px] sm:py-[24px] pl-[16px] sm:pl-[20px] pr-[10px] font-inter">
                  Start today and earn rewards every time someone uses your
                  code. Grow your community and be part of the first crypto
                  super app. Early supporters get exclusive surprises!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[50%] mt-[20px] sm:mt-[0px] flex justify-center items-center bg-[#242424] min-h-fit aspect-square">
            <img src={ReferralEarn} alt="" className="max-md:w-[270px] w-[70%] h-auto aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarnWithReferral;
