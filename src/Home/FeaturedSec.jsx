import { useTranslation } from "react-i18next";
import herobnr1 from "../assets/herosection/bnrhero (4).svg";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";
import herobnr5 from "../assets/herosection/bnrhero (9).svg";
import herobnr6 from "../assets/herosection/bnrhero (7).svg";
import herobnr7 from "../assets/herosection/bnrhero (10).svg";
import herobnr8 from "../assets/herosection/bnrhero (8).svg";
import herobnr9 from "../assets/herosection/bnrhero (6).svg";

function FeaturedSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[35px] bg-[#020B10]">
      <div className="">
        <div className="w-[100%] mx-auto">
          <div className="bg-[#020B10] flex relative z-[99] justify-center items-center h-[73.47] space-x-[15px] border border-[#262626] rounded-[13.357px] py-[25px] max-w-[1200px] w-[100%] mx-auto">
            <h3 className="text-[16.697px] font-[600] text-[#fff] tracking-[-0.267px]">{t("featured_sec.featured_in")}</h3>
            <div className="flex flex-col items-center">
              <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr4} className="h-[22px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
              <div className="flex flex-col items-center">
              <a href="https://www.binance.com/en/square/post/21135762162242" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr3} className=" h-[22px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://blockonomi.com/shiba-inu-shib-pepe-coin-pepe-blockchainfx-bfx-which-one-will-bring-the-highest-roi-during-the-peak-of-the-bull-run/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr1} className="h-[22px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://coinpedia.org/sponsored/new-crypto-presales-to-invest-in-march-2025/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr2} className="h-[22px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://hackernoon.com/best-crypto-to-buy-now-why-blockchainfxs-$0019-presale-could-outpace-sei-and-pengu" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr5} className="h-[20px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://finbold.com/blockchainfx-raises-7-24m-in-presale-as-first-multi-asset-super-app-connecting-crypto-stocks-and-forex-goes-live-in-beta/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr6} className=" h-[16px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://www.mexc.com/news/heres-why-blockchainfx-is-one-of-the-best-cryptos-to-buy/66441" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr7} className=" h-[16px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://www.bitget.com/news/detail/12560604943063" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr8} className="h-[20px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://cointelegraph.com/press-releases/blockchainfx-raises-7-24m-in-presale-as-multi-asset-app-for-crypto-stocks-forex-launches-beta" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={herobnr9} className="h-[20px] mix-blend-luminosity opacity-[0.5] hover:opacity-[1] hover:mix-blend-normal" alt="Featured" />
              </a>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
