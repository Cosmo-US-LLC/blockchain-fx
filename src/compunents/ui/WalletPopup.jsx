import React from "react";

import { connect } from "@wagmi/core"
import { connections, getConfig } from "../../presale-gg/web3/config";

const WalletPopup = ({ onClose }) => {
  return (
    <div 
    onClick={onClose}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start">
      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white p-6 rounded-lg shadow-lg w-[487px] px-[30px] py-[24px] rounded-[8px] mt-[4rem] 2xl:mr-10 xl:mr-10 lg:mr-10 md:mr-0 sm:mr-0 mr-0">
       <div className="border border-[#E3E3E3] space-y-[20px] rounded-[8px] px-[30px] py-[14px]">
        <div className="flex justify-between items-center max-w-[280px] mx-auto">
          {connections.map((conn) => (
            <button
              key={conn.key}
              className="w-[52px] h-[52px] border-[1px] bg-[#F6F6F6] flex justify-center items-center border-[#E3E3E3] cursor-pointer"
              onClick={async () => {
                const { config, walletConnectModal } = await getConfig()
                if (conn.key === "walletconnect") {
                  walletConnectModal.open()
                } else if (conn.onClick) {
                  await conn.onClick();
                } else {
                  connect(config, {connector: config.connectors[conn.connectorIndex]})
                }
                onClose()
              }}
            >
              <img src={conn.icon} alt={conn.label} />
            </button>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default WalletPopup;
