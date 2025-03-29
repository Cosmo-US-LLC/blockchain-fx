import React from "react";
import stars from "../assets/herosection/stars.png";
// import heroVideo from "../assets/herosection/heroVideo.mp4";
import uersrev from "../assets/herosection/Avatars.png";
import herove1 from "../assets/herosection/herove (3).png";
import herove2 from "../assets/herosection/herove (2).png";
import herove3 from "../assets/herosection/herove (4).png";
import herove4 from "../assets/herosection/herove (1).png";


function Herosection() {
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
    <div className="pt-[55px] pb-[20px] bg-[#020B10]">
      <div className="max-w-[1200px] relative w-[100%] mx-auto ">
        <div className="">
          <div className="space-y-[10px]">
          <div className="max-w-[368px] h-[37px] flex items-center justify-center mx-auto rounded-[30px] !border-[0.2px]"
          style={{
            background:"linear-gradient(90deg, rgba(255, 255, 255, 0.30) -45.06%, rgba(255, 255, 255, 0.00) 111.83%)",
            backdropFilter:"blur(150px"
          }}
          >
          <h4 className="text-[14px]  leading-[144.444%] font-[400] text-center text-[#fff] tracking-[-1px] capitalize">
              Blockchain Meets Global Financial Markets
            </h4>
          </div>
            <h1 className=" text-[45px] pt-[15px] font-[700] leading-[120%] tracking-[-1px] text-[#fff] text-center">
            The First Crypto <br /> Trading <span style={{
              background:" linear-gradient(92deg, #E5AE01 24.64%, #FFE182 97%)",
              backgroundClip:"text",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent"
              }}>Super App</span>
            </h1>
            <div className="flex items-center justify-center pt-[20px] space-x-3">
              <div className="flex flex-col items-center">
                <img src={uersrev} alt="" />
            <p className="text-[#8497A2] font-[400] text-[16px]">Verified Ratings</p>

              </div>
            <div className="flex space-x-2 items-center flex-col p-3 rounded-[10px]" 
            style={{
              background:"background: rgba(3, 15, 22, 0.30)",
              border:"1.5px solid rgba(230, 175, 3, 0.30)",

            }}
            >
            <img className="" src={stars} alt="" />
            <p className="text-[#fff] font-[400] text-[17.702px]">4.79/5 </p>
            </div>
          </div>
            <p className="text-[16px] max-w-[646px] w-[100%] mx-auto font-[400] leading-[150%] text-center text-[#8497A2] tracking-[-0.32px] ">
            BlockchainFX is the only crypto native trading platform that provides instant access 
            to the world’s largest financial markets across 500+ different assets. 
            </p>
          </div>
          <div
          className="flex justify-center pt-[20px] pb-[0px] items-center space-x-[17px]">
            <button 
             onClick={handleScroll}
            className="text-[#000] bg-[#E5AE00] px-[12px] hover:text-[#E6B005] hover:bg-transparent text-[16px] font-[800] border border-[#E6B005] hover:border-[#E6B005] rounded-[8px] max-w-[138px] w-[100%] h-[50px]">
              Buy $BFX
            </button>
           
            <button className="hover:text-[#000] hover:bg-[#E5AE00] px-[12px] text-[#E6B005] bg-transparent text-[16px] font-[500] border hover:border-[#E5AE00] border-[#E6B005] max-w-[138px] rounded-[8px] !w-[100%] h-[50px]">
            Watch Demo
            </button>
          </div>
          
        
          <div className="absolute max-h-[130px] max-w-[130px] top-[6%] left-[7%]">
                                     <img src={herove1} className=" " alt="" />
                                   </div>
                                   <div className="absolute max-h-[110px] max-w-[110px] bottom-[13%] left-[12%]">
                                     <img src={herove3} className="" alt="" />
                                   </div>
                                   <div className="absolute max-h-[130px] max-w-[130px] top-[6%] right-[8%]">
                                     <img src={herove2} className="" alt="" />
                                   </div>
                                   <div className="absolute max-h-[110px] max-w-[110px] bottom-[12%] right-[12%]">
                                     <img src={herove4} className="" alt="" />
                                   </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
