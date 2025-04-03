import React from "react";
import ftimg from "../assets/herosection/ftimg.webp";
import herobnr1 from "../assets/herosection/bnrhero (4).svg";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";

function FeaturedSec() {
  return (
    <div className="flex items-center bg-[#020B10] py-[50px]">
      <div className=" ">
        <div className="">
          <img src={ftimg} className="w-[94%] ml-auto" alt="" />
          <div className="flex mt-[-50px] justify-center items-center h-[73.47] space-x-[20px] border border-[#262626] rounded-[13.357px] py-[25px] max-w-[1200px] w-[100%] mx-auto">
            <h3 className="text-[16.697px] font-[600] pr-3 text-[#fff] tracking-[-0.267px]">Featured In:</h3>
            <a href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/" target="_blank" rel="noopener noreferrer">
            <img src={herobnr1}  alt="" />
            </a>
            <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" rel="noopener noreferrer">
            <img src={herobnr2} className="h-[24.21px]" alt="" />
            </a>
           <a href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/" target="_blank" rel="noopener noreferrer">
           <img src={herobnr3} className="h-[22.39px]" alt="" />
           </a>
           <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer">
           <img src={herobnr4} className="h-[26.86px]" alt="" />
           </a>
            {/* <img src={herobnr5} className="max-w-[225px] h-[21.56px]" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
