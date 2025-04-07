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
          <img src={ftimg} className="" alt="" />
          <div className="flex mt-[0px] justify-center items-center h-[73.47] space-x-[20px] border border-[#262626] rounded-[13.357px] py-[25px] max-w-[1200px] w-[100%] mx-auto">
            <h3 className="text-[16.697px] font-[600] italic pr-3 text-[#fff] tracking-[-0.267px]">Featured In:</h3>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/" target="_blank" rel="noopener noreferrer"
           className=""
           ><img src={herobnr1}  alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" rel="noopener noreferrer"
           className=""
           > <img src={herobnr2}  alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/" target="_blank" rel="noopener noreferrer"
           className=""
           > <img src={herobnr3}  alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer"
           className=""
           ><img src={herobnr4}  alt="" />
            </a>
           </div>
          
            {/* <img src={herobnr5} className="max-w-[225px] h-[21.56px]" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
