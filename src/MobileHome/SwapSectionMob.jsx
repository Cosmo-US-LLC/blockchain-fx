import whitepaper from "../assets/Whitepaper/instantSwap.gif";
import swapbg from "../assets/Swap/mobbg.png"
export default function SwapSectionMob() {
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
      <div className="w-full py-[24px] px-[20px] bg-[#000]">
        <div className="py-6 px-3 space-y-[20px] rounded-[24px]"
       style={{ backgroundImage: `url(${swapbg})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"
      }} 
        >
         
          <div className="w-[100%] space-y-4 ">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className="text-[30px] text-[#FFF] font-bold leading-[120%] tracking-[-1.5px]  text-center mb-4">
              More Than 500 Assets 
              </h3>
              <p className="text-[14px] text-[#fff] text-center max-w-[350px] mx-auto">
              BlockchainFX is the first exchange that lets Web3 users instantly swap between crypto and traditional asset classes. No delays, no extra fees, no switching platforms. Just fast and real-time trading.
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
              border:"0.835px solid #58470d"
            }}
            className="w-full rounded-[13px]  py-[20px] px-[20px] space-y-[15px]">
              <div className="">
              <h4 className="text-[16px] text-center text-[#fff] font-[700] leading-[116.878%] tracking-[-0.267px]">Users can trade on BlockchainFX:</h4>
              </div>
              <div className="space-y-[10px]">
                <div className="flex justify-center space-x-3">
                <h4 className="text-[16.124px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">Crypto</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Stocks</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Forex</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Commodities</h4>
                </div>
                <div className="flex justify-center space-x-4">
                <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">ETFs</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Options</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Futures</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Indices</h4>
              <h4 className="text-[16.124px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">CFDs</h4>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
