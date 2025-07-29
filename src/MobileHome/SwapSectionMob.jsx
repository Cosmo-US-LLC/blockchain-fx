import whitepaper from "../assets/Whitepaper/instantSwap.gif";
import swapbg from "../assets/Swap/mobbg.png"
import { useTranslation } from "react-i18next";
export default function SwapSectionMob() {
  const { t } = useTranslation();
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
    <>
      <div className="w-full py-[24px] px-[20px] bg-[#020B10]">
        <div className="py-6 px-3 space-y-[20px] rounded-[24px] border-[1px] border-[#E5E7EB]"
  
        >
         
          <div className="w-[100%] space-y-4 ">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className=" text-[#FFF] text-[30px] font-[600] leading-[120%] tracking-[-1.5px] text-center mb-4">
                {t("blockchainfx_demo.assets_title")}
              </h3>
              <p className="font-inter text-[16px] text-[#fff] font-medium leading-[25px] text-center max-w-[350px] mx-auto">
                <span dangerouslySetInnerHTML={{ __html: t("blockchainfx_demo.assets_description") }} />
              </p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="w-full p-2">
              <img
                src={whitepaper}
                className="w-[453px] h-auto"
                alt="whitepaper"
              />
            </div>
          </div>
          <div 
            style={{
              border:"1px solid #61767B"
            }}
            className="w-full rounded-[13px]  py-[20px] px-[20px] space-y-[15px]">
              <div className="">
                <h4 className="text-[16px] text-center text-[#fff] font-[700] leading-[116.878%] tracking-[-0.267px]">
                  {t("blockchainfx_demo.asset_list_title")}
                </h4>
              </div>
              <div className="space-y-[10px]">
                <div className="flex justify-center space-x-3">
                  <h4 className="text-[16.124px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_crypto")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_stocks")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_forex")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_commodities")}</h4>
                </div>
                <div className="flex justify-center space-x-4 gap-y-3 flex-wrap">
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_etfs")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_options")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_futures")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_indices")}</h4>
                  <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">{t("blockchainfx_demo.asset_cfds")}</h4>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
