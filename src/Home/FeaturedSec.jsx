import { useTranslation } from "react-i18next";


function FeaturedSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[35px] bg-[#020B10]">
      <div className="">
        <div className="w-[100%] mx-auto">
          <div className="bg-[#020B10] flex relative z-[99] justify-center items-center h-[73.47] space-x-[25px] border border-[#262626] rounded-[13.357px] py-[25px] max-w-[1200px] w-[100%] mx-auto">
            <h3 className="text-[16.697px] font-[600] text-[#fff] tracking-[-0.267px]">{t("featured_sec.featured_in")}</h3>
            <div className="flex flex-col items-center">
              <a href="https://coinmarketcap.com/community/articles/67d43c30c4a5810cf71d7406/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src="assets/blockchainfx/HeroSection2/bnrhero%20(1).svg" className="h-[22px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
              <div className="flex flex-col items-center">
              <a href="https://www.binance.com/en/square/post/29811397309321" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(2).svg'} className=" h-[22px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.bitget.com/news/detail/12560604943063" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(8).svg'} className="h-[22px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.kucoin.com/news/flash/blockchainfx-presale-surpasses-10m-as-it-aims-to-outperform-sui-and-hyperliquid" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(11).svg'} className="h-[22px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://cointelegraph.com/press-releases/blockchainfx-raises-7-24m-in-presale-as-multi-asset-app-for-crypto-stocks-forex-launches-beta" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(6).svg'} className="h-[30px]  brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://hackernoon.com/best-crypto-to-buy-now-why-blockchainfxs-$0019-presale-could-outpace-sei-and-pengu" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(9).svg'} className=" h-[20px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://finbold.com/blockchainfx-raises-7-24m-in-presale-as-first-multi-asset-super-app-connecting-crypto-stocks-and-forex-goes-live-in-beta/" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/bnrhero%20(7).svg'} className=" h-[16px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
             <div className="flex flex-col items-center">
              <a href="https://www.okx.com/learn/cardano-blockchainfx-presale-opportunity " target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={'assets/blockchainfx/HeroSection2/full-okx-logo%201.svg'} className="h-[20px] brightness-0 invert-[.70] hover:brightness-100 hover:invert-0" alt="Featured" />
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
