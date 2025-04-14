import { useEffect, useState } from "react";
import buyTab from "./tabs/BuyTab";
import clsx from "clsx";
import stakeTab from "./tabs/StakeTab";
import transactionHistoryTab from "./tabs/TransactionHistoryTab";
import { useAccount } from "../../presale-gg/web3";

const tabs = [buyTab];
const needsWalletConnected = new Set([stakeTab.key, transactionHistoryTab.key])

const Widget = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const Comp = selectedTab.component;

  const accountData = useAccount()

  useEffect(() => {
    if (!accountData.address && needsWalletConnected.has(selectedTab.key)) setSelectedTab(buyTab)
  }, [selectedTab.key, accountData.address])

  return (
    <div
      style={{
        background: "linear-gradient(212deg, rgb(207 207 207 / 25%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 22%) 103.45%)",
        borderRadius: "26.227px",
border:" 0.663px solid #FFF",
backdropFilter: "blur(13.031462669372559px)"
      }}
      className="flex flex-col max-w-[413.763px] gap-[10px] relative rounded-[6.419px] px-[33px] pt-[28px] pb-[11px] border border-[#B0B0B0] w-[100%] mx-auto min-h-[600px] <md:px-[20px] <md:min-h-[400px]"
    >
      <div className="w-[100%] absolute top-0 -translate-y-1/2 left-0 flex justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={clsx(
              "text-[9.875px] text-center w-[100px] <md:w-[80px] font-[700] h-[30.612px] border border-[#454545] flex items-center justify-center rounded-[6px]",
              {
                "bg-[#020B10] text-[#fff]": selectedTab !== tab
              },
              {
                "bg-[#000] text-[#fff]": selectedTab === tab,
              },
              {
                "cursor-not-allowed": !accountData?.address && needsWalletConnected.has(tab.key)
              }
            )}
            title={!accountData?.address && needsWalletConnected.has(tab.key) ? "Connect your wallet" : ""}
            disabled={!accountData?.address && needsWalletConnected.has(tab.key)}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Comp />
    </div>
  );
};

export default Widget;
