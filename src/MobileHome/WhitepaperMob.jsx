import whitepaper from "../assets/Whitepaper/whitepaper.webp";

export default function WhitepaperMob() {

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
      <div className="w-full py-[24px] px-[24px]" id="whitepaper">
        <div className="py-6 px-4  space-y-[20px] border border-1 border-[#B0B0B0] rounded-[13px]">
        <div className="w-[100%] space-y-4 ">
            <div className="w-full p-2 flex flex-col justify-start">
              <h3 className="text-[30px] text-center font-bold leading-[115%] mb-4">
                Whitepaper
              </h3>
              <p className="text-[14px] text-center">
              Explore the BlockchainFX whitepaper to learn how the $BFX token powers a next-gen trading ecosystem and how you will significantly benefit as an early holder. Discover its key features, advantages, and how BlockchainFX is bridging the gap between blockchain and traditional finance by creating the crypto industry's first trading super app.
              </p>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-full p-2">
              <img src={whitepaper} className="w-[453px] h-auto" alt="whitepaper" />
            </div>
          </div>
            <div className="w-full p-2 space-x-2 flex justify-center">
              <button
                onClick={handleScroll}
                className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[110px] w-[100%] h-[39px]"
              >
                Buy $BFX
              </button>
              <a href="https://blockchainfx.com/whitepaper.pdf" rel="noopener noreferrer">
              <button className="hover:text-white hover:bg-[#E5AE00] px-[8px] text-black bg-transparent text-[14px] font-[800] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[160px] w-[100%] h-[39px]">
              Access Whitepaper
            </button>
              </a>
            </div>
        </div>
      </div>
    </>
  );
}
