import whitepaper from "../assets/Whitepaper/whitepaperbook.png";
import whitepaperBg from "../assets/Whitepaper/whitepaper_bg.png";
// import whitepaper from "../assets/Whitepaper/whitepaper.webp";

export default function WhitepaperMob() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };
  return (
    <>
      <div className="w-full py-[24px] px-[24px] bg-[#000]" id="whitepaper">
        <div
          className="whitepaperBg py-6 px-4 space-y-[16px]"
          // style={{
          //   background: "url('../assets/Whitepaper/whitepaper_bg.png')"
          // }}
        >
          <div className="w-[100%] space-y-4 ">
            <div className="w-full p-2 flex flex-col justify-start">
              <h3 className="text-[30px] text-center font-[500] leading-[115%] mb-4 text-white tracking-tighter">
                BFX Whitepaper
              </h3>
              <p className="text-[14px] text-center text-[#8497A2]">
                Explore the whitepaper to learn how BFX powers a next-gen
                trading ecosystem. Discover its key features and advantages, and
                see how BlockchainFX is bridging the gap between blockchain and
                traditional finance by creating the crypto industry's first
                trading super app.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <button className="rounded-[10px] w-[137px] h-[50px] font-[700] py-1 bg-gradient-to-r from-[#E5AE00] to-[#FFD551]">
              Buy BFX
            </button>
            <button className="rounded-[10px] bg-black border border-[#E6B005] text-[#E6B005] w-[178px] h-[50px] py-1">
              Access Whitepaper
            </button>
          </div>

          <div className="w-[100%]">
            <div className="w-full p-2">
              <img
                src={whitepaper}
                className="w-[453px] h-auto object-cover"
                alt="whitepaper"
              />
            </div>
          </div>
          {/* <div className="w-full p-2 space-x-2 flex justify-center">
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[110px] w-[100%] h-[39px]"
            >
              Buy $BFX
            </button>
            <a
              href="https://vip.blockchainfx.com/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-white hover:bg-[#E5AE00] px-[8px] text-black bg-transparent text-[14px] font-[800] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[160px] w-[100%] h-[39px]">
                Access Whitepaper
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
