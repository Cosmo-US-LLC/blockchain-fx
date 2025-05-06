import whitepaper from "../assets/Whitepaper/instantSwap.gif";
import swapbg from "../assets/Swap/swapbg2.png"
export default function SwapSection() {
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
      <div className=" bg-[#000]  pt-[30px] pb-[30px] px-[80px] ">
        <div className="px-6 max-w-[1200px] mx-auto w-full pt-[100px] pb-[30px] space-y-[40px]  rounded-[13px] bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${swapbg})` }}>
        
        <div className="flex flex-row items-center">
        <div className="w-[50%]">
            <div className="w-full p-2">
              <img
                src={whitepaper}
                className="w-[453px] h-auto"
                alt="whitepaper"
              />
            </div>
          </div>
          <div className="w-[50%] space-y-4 pl-4">
            <div className="w-full p-2 flex flex-col justify-start text-white">
            <h3 className="text-[40px] font-[800] leading-[52px] mb-4 text-[#fff]">
            More Than 500 Assets 
            </h3>
              <p className="text-[18px] text-[#fff] font-[400] leading-[27px]">
              BlockchainFX is the first exchange that lets Web3 users instantly swap between crypto and traditional asset classes. No delays, no extra fees, no switching platforms. Just fast and real-time trading.           </p>
            </div>

          
          </div>
        </div>
        <div 
            style={{
              border:"0.835px solid #262626"
            }}
            className="w-full rounded-[13px] flex justify-center max-w-[1150px] w-[100%] mx-auto py-[20px] px-[20px] space-x-[15px]">
              <h4 className="text-[20px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">Users can trade on BlockchainFX:</h4>
              <h4 className="text-[20px] text-[#fff] font-[600] leading-[116.878%] tracking-[-0.267px]">Crypto</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Stocks</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Forex</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Commodities</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">ETFs</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Options</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Futures</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">Indices</h4>
              <h4 className="text-[20px] text-[#fff] font-[500] leading-[116.878%] tracking-[-0.267px]">CFDs</h4>
            </div>
        </div>
      </div>
    </>
  );
}
