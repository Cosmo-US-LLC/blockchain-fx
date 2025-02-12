import crs from "../../assets/navbar/wallet/crs.png";
import copy from "../../assets/navbar/wallet/copy-left.png";
import qrcode1 from "../../assets/navbar/wallet/qrcode (3).png";
import qrcode2 from "../../assets/navbar/wallet/qrcode (2).png";
import qrcode3 from "../../assets/navbar/wallet/qrcode (1).png";
import copywt from "../../assets/navbar/wallet/copy-right.png";
import iicon from "../../assets/navbar/wallet/information-circle-contained-filled.png";


const cardData = [
    {
        id: 1,
        name: "USDT Wallet Address (ERC-20)",
        amount: "500,000.00 BFX",
        token: "USDT",
        qrImage: qrcode3,
    },
    {
      id: 2,
      name: "USDT Wallet Address (BEP-20)",
      amount: "500,000.00 BFX ",
      token: "USDT",
      qrImage: qrcode3,
    },
    {
      id: 3,
      name: "ETH Wallet Address (ERC-20)",
      amount: "500,000.00 BFX",
      token: "ETH",
      qrImage: qrcode1,
    },
    {
        id: 4,
        name: "BNB Wallet Address (BEP-20)",
        amount: "BNB",
        token: "500,000.00 BFX",
        qrImage: qrcode2,
      },
  ];


const CardList = ({ selectedCoin, onClose }) => {
    const selectedCard = selectedCoin !== undefined ? cardData[selectedCoin] : cardData[0]; 

    if (!selectedCard) return null; 
    
      if (!selectedCard) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white space-y-[10px] 2xl:p-6 xl:p-6  lg:p-6 md:p-6 sm:p-6 p-4 rounded-[12px] shadow-lg w-[350px] relative">
        <div className="flex justify-center items-center">
          <h2 className="text-[14px] font-[600] tracking-[-0.28px] text-center">Buy Token</h2>
          <button
            className="text-gray-600 absolute top-[3.5%] right-[5%] pb-1 hover:text-black"
            onClick={onClose}
          >
            <img src={crs} alt="" />
          </button>
        </div>
        <div className="pt-[10px] pb-[10px] border birder-[#E4E4E4] rounded-[4px] bg-[#FCFCFC]">
            <p className="text-center text-[14px] text-[#636363] font-[400] leading-[130%]">Send <span className="text-[#E5AE00]">0.001 {selectedCard.token}</span> to the address <br /> listed below to get <span className="text-[#E5AE00]">{selectedCard.amount}</span> </p>
        </div>
        <div className="flex flex-col space-y-[10px] items-center space-x-2">
        <h4 className="text-[12px] font-bold text-[#545454]">{selectedCard.name}</h4>
        <img src={selectedCard.qrImage} alt="QR Code" />
          <p className="text-center font-[400] text-[#868686] text-[11px] tracking-[-0.22px]">Scan QR code or Copy the address </p>
        </div>
        <div className="space-y-[10px]">
          <div className="border flex justify-between items-center border-[#DFDFDF] rounded-[4px] p-[8px]">
            <input
              type="text"
              className="text-[12px] text-[#989898] outline-none"
              value="0xBWMIWDWN4UNVhfrNWVX85N4Oxbf3i3caq"
              readOnly
            />
            <img src={copy} alt="" />
          </div>
          <div className="flex  space-x-2 p-[6px] border border-[#BA7B00] bg-[#FFF6E7]">
            <img src={iicon} alt="" />
            <p className="text-[#9D6508] text-[10px] tracking-[-0.05px] font-[500]">
              Only send ETH on the Ethereum (ERC-20) blockchain
            </p>
          </div>
          <button className="flex justify-center items-center  text-[11.85px] text-[#fff] bg-[#E5AE00] runded-[4px] border border-[#E5AE00] h-[32px] w-[100%] hover:opsety-[0.6]">
            <img src={copywt} className="mr-2" alt="" />
            Copy the wallet address
          </button>
          <div>
            <ul className="pl-3 list-decimal space-y-[10px]">
              <li className="text-[10px] text-[#7C7C7C] font-[500]">
                BFX tokens, bonuses, staking rewards and NFTs (if eligible) are
                added to your dashboard instantly. 
              </li>
              <li className="text-[10px] text-[#7C7C7C] font-[500]">
                Connect the same wallet at BlockchainFX.com to check  your
                dashboard and BFX balance. 
              </li>
              <li className="text-[10px] text-[#7C7C7C] font-[500]">
                Any amount sent to this wallet is automatically credited  and
                added to your dashboard.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
