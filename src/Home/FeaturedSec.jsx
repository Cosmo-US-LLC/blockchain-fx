import React from "react";
import ftimg from "../assets/herosection/ftimg.webp";
import herobnr1 from "../assets/herosection/bnrhero (4).svg";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";

function FeaturedSec() {
  return (
    <div className="bg-[#020B10] py-[50px]">
      <div className=" ">
        <div className="w-[100%] mx-auto">
          <div className="relative">
          <img src={ftimg} loading="lazy" className="max-w-[1200px] mx-auto w-[100%]" alt="" />
          <div className="w-[100%] h-[246px] rounded-[1650px] bg-[#020B10]"
          style={{
            filter:"blur(37px)",
            position:"absolute",
            bottom:"-7%",
            zIndex:"9"
          }}
          ></div>
          </div>
          <div className="bg-[#020B10] flex relative z-[99] mt-[-60px] justify-center items-center h-[73.47] space-x-[20px] border border-[#262626] rounded-[13.357px] py-[25px] max-w-[1200px] w-[100%] mx-auto">
            <h3 className="text-[16.697px] font-[600] pr-3 text-[#fff] tracking-[-0.267px]">Featured In:</h3>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/" target="_blank" rel="noopener noreferrer"
           className=""
           ><img  loading="lazy" src={herobnr1} className="w-[145px] h-[24px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/" target="_blank" rel="noopener noreferrer"
           className=""
           > <img  loading="lazy" src={herobnr2} className="w-[105px] h-[24px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" rel="noopener noreferrer"
           className=""
           > <img  loading="lazy" src={herobnr3} className="w-[135px] h-[24px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="" />
            </a>
           </div>
           <div className="flex flex-col items-center space-y-2">
           <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer"
           className=""
           ><img  loading="lazy" src={herobnr4} className="w-[175px] h-[30px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="" />
            </a>
           </div>
          
            {/* <img  loading="lazy" src={herobnr5} className="max-w-[225px] h-[21.56px]" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
