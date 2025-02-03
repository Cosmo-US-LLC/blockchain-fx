import React from "react";
import herobnr1 from "../assets/herosection/bnrhero (5).svg";
import herobnr2 from "../assets/herosection/bnrhero (4).svg";
import herobnr3 from "../assets/herosection/bnrhero (3).svg";
import herobnr4 from "../assets/herosection/bnrhero (2).svg";
import herobnr5 from "../assets/herosection/bnrhero (1).webp";

function FeaturedSec() {
  return (
    <div className="h-[113px] flex items-center">
      <div className="max-w-[940px]  w-[100%] mx-auto ">
        <div className="">
          <div className="flex justify-center items-center h-[73.47] space-x-[44px] border rounded-[20px] py-[20px]">
            <img src={herobnr1}  alt="" />
            <img src={herobnr2} className="h-[24.21px]" alt="" />
            <img src={herobnr3} className="h-[33.39px]" alt="" />
            <img src={herobnr4} className="h-[29.86px]" alt="" />
            <img src={herobnr5} className="max-w-[225px] h-[21.56px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
