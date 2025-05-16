
import video from "../assets/InsideSec/inside.webp";
import herobnr2 from "../assets/herosection/bnrhero (3).svg";
import herobnr3 from "../assets/herosection/bnrhero (2).svg";
import herobnr4 from "../assets/herosection/bnrhero (1).svg";

function InsideSec() {

  return (
    <div className="py-[20px] bg-[#020B10]" id="insideSec">
      <div className="bg-[#020B10] space-y-[15px] border border-[#262626] rounded-[41px] py-[40px] max-w-[1200px] w-[100%] mx-auto">
            <h4 className="text-[30px] text-center font-[600] leading-[120%] leading-[-1.5px] text-[#FFF] tracking-[-0.267px]">Inside BlockchainFX</h4>
            <h3 className="text-[40px] text-center font-[800] leading-[140%] leading-[-2px] text-[#FFF] tracking-[-0.267px]">Full BFX Review & Live Trading Demo</h3>
            <div className="flex justify-center">
            <div className="flex justify-center">
          {/* Embed Wistia Player */}
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/w8ynmofaw4.js"
            async
            type="module"
          ></script>
          <style>
            {`
              wistia-player[media-id='w8ynmofaw4']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/w8ynmofaw4/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
              }
            `}
          </style>
          <wistia-player media-id="w8ynmofaw4" aspect="1.7777777777777777"   style={{ width: '100%', maxWidth: '730px', height: 'auto',maxHeight:"410px" }}
          ></wistia-player>
        </div>            </div>
          </div>
    </div>
  );
}

export default InsideSec;
