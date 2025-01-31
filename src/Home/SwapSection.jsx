import whitepaper from "../assets/Whitepaper/instantSwap.gif";

export default function SwapSection() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-[50px] px-[60px]">
        <div className="p-6 max-w-[1080px] min-h-[454px] border border-1 border-[#B0B0B0] flex flex-row items-center rounded-[13px]">
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
            <div className="w-full p-2 flex flex-col justify-start">
              <h3 className="text-[45px] font-bold leading-[48px] mb-4">
                Swap Between Assets{" "}
              </h3>
              <p className="text-[14px]">
                Enjoy limitless trading opportunities, like
                exchanging gold for BTC or swapping ETH for Nvidia
                stock instantly without multiple brokers. Traditionally,
                converting crypto into other assets required separate exchanges,
                extra fees, and long wait times. BlockchainFX
                streamlines everything in one place, making trading faster,
                easier, and more convenient than ever.
              </p>
            </div>

            <div className="w-full p-2 flex justify-start">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]"
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
