import ernvet1 from "../assets/BiggestBuy/biggest-bg.png";
import biggesttable from "../assets/BiggestBuy/biggestbuytable.png"

export default function BiggestBuy (){

    return (
        <>
         <div className="flex items-center justify-center bg-[#000] pt-[50px] pb-[50px] px-[80px]" >
      <div
        className="p-6 w-full max-w-[1200px] overflow-hidden relative min-h-[662px] bg-no-repeat bg-cover bg-center  rounded-[16px] bg-[#111]"
         >
            
            <div className="flex flex-col justify-center items-center relative z-10 space-y-[29px] mb-[25px]">
             <h4 className="text-[40px] font-[800] text-white leading-[120%]">
                Biggest Buy-In Competition
             </h4>
             <p className="text-[18px] text-white font-[400] leading-[150%] w-[990px]">
             The top 10 BFX presale buyers will receive a share of a 100,000 USD prize pool in $BFX. This competition is our way of thanking those who contributed the most and played a major role in the growth of the BlockchainFX ecosystem.
             </p>
            </div>
            <div className=" relative z-10 mb-[25px]">
             <img src={biggesttable} alt='biggesttable'/>
            </div>
            <div className="flex justify-center items-center mb-[15px]">
  <div className="relative z-10">
    <button className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-[#E5AE00] bg-transparent text-[16px] font-[400] border hover:border-[#E5AE00] border-[#E5AE00] rounded-[8px] max-w-[126px] w-[100%] h-[38px]">
      Load more
    </button>
   
  </div>
</div>
<div className="flex justify-center items-center">
<p className="text-[13px] text-white font-[400] relative z-10">
    The list is updated weekly and is based on transactions made during the BFX presale
    </p>
    </div>

        <div className="absolute top-[0%]  left-[0%]">
                           <img src={ernvet1} className="" alt="BlockchainFX" />
                         </div>
      </div>

      </div>
        </>
    );
}