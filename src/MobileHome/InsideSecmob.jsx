
import video from "../assets/InsideSec/inside.webp";


function InsideSecmob() {

  return (
    <div className="py-[50px] bg-[#000]" id="reviews">
      <div className="bg-[#000] space-y-[15px] border border-[#262626] rounded-[19.247px] p-[30px]  w-[90%] mx-auto">
      <h4 className="text-[20px] text-center font-[400] leading-[120%] leading-[-1.5px] text-[#FFF] tracking-[-0.267px]">Inside BlockchainFX</h4>
      <h3 className="text-[30px] text-center font-[600] leading-[140%] leading-[-2px] text-[#FFF] tracking-[-0.267px]">Full $BFX Review <br /> & Live Trading Demo</h3>
            <div className="flex justify-center">
            {/* <img className="" src={video} alt="" /> */}
            <iframe
              width="100%"
              height="200px"
              src={"https://fast.wistia.net/embed/iframe/w8ynmofaw4"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
              style={{ borderRadius: "12px" }}
            />
            </div>
          </div>
    </div>
  );
}

export default InsideSecmob;
