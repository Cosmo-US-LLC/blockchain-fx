import React from "react";
import nexticn1 from "../assets/NextGen/nwxticon (9).svg";
import nexticn2 from "../assets/NextGen/nwxticon (8).svg";
import nexticn3 from "../assets/NextGen/nwxticon (7).svg";
import nexticn4 from "../assets/NextGen/nwxticon (6).svg";
import nexticn5 from "../assets/NextGen/nwxticon (5).svg";
import nexticn6 from "../assets/NextGen/nwxticon (4).svg";
import nexticn7 from "../assets/NextGen/nwxticon (3).svg";
import nexticn8 from "../assets/NextGen/nwxticon (2).svg";
import nexticn9 from "../assets/NextGen/nwxticon (1).svg";
import nexticn10 from "../assets/NextGen/nwxticon.svg";

function NextGenerationSec() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };

  return (
    <div className="pt-[50px] pb-[50px] bg-[#FBFBFB]">
      <div className="max-w-[1200px]  w-[100%] mx-auto space-y-[60px]">
        <h3 className="text-[30px] font-[700] leading-[155.556%] leading-[-1px] text-center">
          Next Generation Trading Experience
        </h3>
        <div className="space-y-[45px]">
          <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex flex-col min-w-[185px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn1} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Team with 25 Years <br /> Of Experience
              </p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn2} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                500+ <br /> Assets
              </p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn10}  className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Ultra <br /> Tight Spreads
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[145px] space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn4} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                24/7 Live <br /> Chat Support
              </p>
            </div>
            <div className="flex flex-col items-center min-w-[129px] space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn3} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Register <br /> in 1 Min
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex min-w-[185px] flex-col items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn5} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                One-Click <br /> Trading
              </p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn6} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Leverage <br /> Trading
              </p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn7} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Up to 9 <br /> Charts
              </p>
            </div>
            <div className="flex flex-col min-w-[145px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn8} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                100+ <br /> Indicators
              </p>
            </div>
            <div className="flex flex-col min-w-[129px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img src={nexticn9} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]">
                Monthly <br /> Tournaments
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-[30px] space-x-[17px]">
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
            >
              Buy $BFX
            </button>
            <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
              Beta Trading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextGenerationSec;
