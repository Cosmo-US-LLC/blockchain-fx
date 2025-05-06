
import video from "../assets/InsideSec/inside.webp";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";

function InsideSec() {

  return (
    <div className="py-[50px] bg-[#000]">
      <div className="bg-[#000] space-y-[15px] border border-[#262626] rounded-[41px] py-[40px] max-w-[1200px] w-[100%] mx-auto">
            <h4 className="text-[30px] text-center font-[600] leading-[120%] leading-[-1.5px] text-[#FFF] tracking-[-0.267px]">Inside BlockchainFX</h4>
            <h3 className="text-[40px] text-center font-[800] leading-[140%] leading-[-2px] text-[#FFF] tracking-[-0.267px]">Full $BFX Review & Live Trading Demo</h3>
            <div className="flex justify-center">
            <img className="max-w-[637.89px] w-[100%]" src={video} alt="" />
            </div>
          </div>
    </div>
  );
}

export default InsideSec;
