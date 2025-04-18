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
      <div className=" bg-[#020B10] flex items-center justify-center pt-[30px] pb-[60px] px-[80px] ">
        <div className="p-6 max-w-[1280px] min-h-[454px] w-full flex flex-row items-center rounded-[13px] bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${swapbg})` }}>
        
        
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
            <h3 className="text-[40px] font-[800] leading-[52px] mb-4 bg-gradient-to-r from-white to-[#E5AE00] bg-clip-text text-transparent">
            Swap Assets Instantly
            </h3>
              <p className="text-[18px] text-[#fff] font-[400] leading-[27px]">
              Trade anything in one place, like swapping Gold for BTC or ETH for Nvidia stock in seconds. No more juggling platforms, dealing with deposits, delays, or extra fees. BlockchainFX makes trading faster and easier than ever.              </p>
            </div>

            <div className="w-full p-2 flex justify-start">
              <button
                onClick={handleScroll}
                className="text-white bg-[#E5AE00] px-[13px]  hover:text-white hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-white rounded-[8px] max-w-[143px] w-[100%] h-[50px]"
              >
                Buy $BFX
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
