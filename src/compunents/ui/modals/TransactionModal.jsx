import { useEffect, useRef } from "react";
import Modal from "./Modal";
import { QRCodeCanvas } from "@akamfoad/qrcode";

import copy from "../../../assets/navbar/wallet/copy-left.png";
import iicon from "../../../assets/navbar/wallet/information-circle-contained-filled.png";
import { copyText } from "../../../presale-gg/util";

/**
 * @param {import("./Modal").ModalProps & {transaction: import("../../../presale-gg/api/api.types").API.Transaction}} props
 */
export const TransactionModal = ({ transaction, ...others }) => {
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    if (!qrCanvasRef.current) return;
    const code = new QRCodeCanvas(transaction.pay_address, {
      bgColor: "#000",
      fgColor: "#fff",
    });
    code.draw(qrCanvasRef.current);
  }, [transaction.pay_address]);

  return (
    <Modal {...others} title="Transaction">
      <div className="flex flex-col space-y-[10px] items-center space-x-2">
        <h4 className="text-[12px] font-bold text-[#545454]">
          {transaction.pay_currency.toUpperCase()} (
          {transaction.network.toUpperCase()})
        </h4>
        <div className="w-40 h-40 flex flex-col p-[2px] bg-[#000] rounded-md">
          <canvas ref={qrCanvasRef} className="w-full h-full" />
        </div>
        <p className="text-center font-[400] text-[#868686] text-[11px] tracking-[-0.22px]">
          Scan QR code or Copy the address{" "}
        </p>
      </div>
      <div className="space-y-[10px]">
        <div className="flex flex-col">
          <p className="text-[10px] text-[#777] font-[500]">Amount to pay</p>
          <div className="border flex justify-between items-center border-[#DFDFDF] rounded-[4px] p-[8px]">
            <input
              type="text"
              className="text-[12px] text-[#989898] outline-none"
              value={transaction.pay_amount}
              readOnly
            />
            <button onClick={() => copyText(transaction.pay_amount)}>
              <img src={copy} alt="Copy" />
            </button>
          </div>
        </div>
        {transaction.payin_extra_id && (
          <>
            <div className="space-y-[10px]">
              <div className="flex flex-col">
                <p className="text-[10px] text-[#777] font-[500]">
                  Destination tag
                </p>
                <div className="border flex justify-between items-center border-[#DFDFDF] rounded-[4px] p-[8px]">
                  <input
                    type="text"
                    className="text-[12px] text-[#989898] outline-none"
                    value={transaction.pay_amount}
                    readOnly
                  />
                  <button onClick={() => copyText(transaction.pay_amount)}>
                    <img src={copy} alt="Copy" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  space-x-2 p-[6px] border border-[#BA7B00] bg-[#FFF6E7]">
              <img src={iicon} alt="Info" className="w-[19px] h-[19px]" />
              <p className="text-[#9D6508] text-[10px] tracking-[-0.05px] font-[500] leading-[1.4]">
                You <span className="font-bold">must include</span> the
                destination tag in the transaction or you will not receive your
                tokens
              </p>
            </div>
          </>
        )}
        <div className="flex flex-col">
          <p className="text-[10px] text-[#777] font-[500]">Payment address</p>
          <div className="border flex justify-between items-center border-[#DFDFDF] rounded-[4px] p-[8px]">
            <input
              type="text"
              className="text-[12px] text-[#989898] outline-none"
              value={transaction.pay_address}
              readOnly
            />
            <button onClick={() => copyText(transaction.pay_address)}>
              <img src={copy} alt="Copy" />
            </button>
          </div>
        </div>
        <div className="flex  space-x-2 p-[6px] border border-[#BA7B00] bg-[#FFF6E7]">
          <img src={iicon} alt="Info" className="w-[19px] h-[19px]" />
          <p className="text-[#9D6508] text-[10px] tracking-[-0.05px] font-[500]">
            Only send {transaction.pay_currency.toUpperCase()} on the{" "}
            {transaction.network.toUpperCase()} blockchain
          </p>
        </div>
        <button
          onClick={() => copyText(transaction.pay_address)}
          className="flex justify-center items-center  text-[11.85px] text-[#fff] bg-[#E5AE00] runded-[4px] border border-[#E5AE00] h-[32px] w-[100%] hover:opsety-[0.6]"
        >
          <img src={copy} className="mr-2" alt="" />
          Copy the wallet address
        </button>
        <div>
          <ul className="pl-3 list-decimal space-y-[10px]">
            <li className="text-[10px] text-[#7C7C7C] font-[500]">
              BFX tokens, bonuses, staking rewards and NFTs (if eligible) are
              added to your dashboard instantly.
            </li>
            <li className="text-[10px] text-[#7C7C7C] font-[500]">
              Connect the same wallet at BlockchainFX.com to check your
              dashboard and BFX balance.
            </li>
            <li className="text-[10px] text-[#7C7C7C] font-[500]">
              Any amount sent to this wallet is automatically credited and added
              to your dashboard.
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
