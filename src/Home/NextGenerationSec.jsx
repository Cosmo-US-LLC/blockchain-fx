import React from "react";
import nexticn1 from "../assets/NextGen/nwxticon (9).svg"
import nexticn2 from "../assets/NextGen/nwxticon (8).svg"
import nexticn3 from "../assets/NextGen/nwxticon (7).svg"
import nexticn4 from "../assets/NextGen/nwxticon (6).svg"
import nexticn5 from "../assets/NextGen/nwxticon (5).svg"
import nexticn6 from "../assets/NextGen/nwxticon (4).svg"
import nexticn7 from "../assets/NextGen/nwxticon (3).svg"
import nexticn8 from "../assets/NextGen/nwxticon (2).svg"
import nexticn9 from "../assets/NextGen/nwxticon (1).svg"

function NextGenerationSec() {
  return (
    <div className="pt-[70px] pb-[53px] bg-[#FBFBFB]">
      <div className="max-w-[1220px]  w-[100%] mx-auto space-y-[90px]">
        <h3 className="text-[50px] font-[700] leading-[114%] leading-[-1px] text-center">Next Generation Trading Experience</h3>
       <div className="space-y-[50px]">
       <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex flex-col min-w-[185px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn1} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Team with 25 Years <br /> Of Experience</p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn2} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">500+  <br /> Assets</p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn3} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Ultra <br /> Tight Spreads</p>
            </div>
            <div className="flex flex-col items-center min-w-[145px] space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn4} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">24/7 Live <br /> Chat Support</p>
            </div>
            <div className="flex flex-col items-center min-w-[129px] space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn3} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Register <br /> in 1 Min</p>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex min-w-[185px] flex-col items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn5} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">One-Click <br /> Trading</p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn6} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Leverage <br /> Trading</p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn7} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Up to 9 <br /> Charts</p>
            </div>
            <div className="flex flex-col min-w-[145px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn8} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">100+ <br />  Indicators</p>
            </div>
            <div className="flex flex-col min-w-[129px] items-center space-y-[20px]">
                <div className="min-h-[60px]">
                <img src={nexticn9} alt="" />
                </div>
                <p className="text-[20px] text-[#000] text-center leading-[140%] font-[400] tracking-[-0.32px]">Monthly <br /> Tournaments</p>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-[17px]">
            <button className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[18px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[18px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[152px] w-[100%] h-[58px]">
              Beta Trading
            </button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default NextGenerationSec;
