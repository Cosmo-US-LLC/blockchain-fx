import { useEffect, useState } from "react";
import buyTab from "./tabs/BuyTab";
import clsx from "clsx";
import stakeTab from "./tabs/StakeTab";
import transactionHistoryTab from "./tabs/TransactionHistoryTab";
import { useAccount } from "../../presale-gg/web3";

// import comcoin from "../../assets/wallet/comcoin.webp";
import tabicn1 from "../../assets/wallet/tabicn (3).svg";
import tabicn2 from "../../assets/wallet/tabicn (2).svg";
import tabicn3 from "../../assets/wallet/tabicn (1).svg";

const tabs = [buyTab];
const needsWalletConnected = new Set([stakeTab.key, transactionHistoryTab.key]);

const Widget = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const Comp = selectedTab.component;

  const accountData = useAccount();

  useEffect(() => {
    if (!accountData.address && needsWalletConnected.has(selectedTab.key))
      setSelectedTab(buyTab);
  }, [selectedTab.key, accountData.address]);

  return (
    <div
      style={{
        background:
          "linear-gradient(212deg, rgb(207 207 207 / 25%) 0.66%, rgba(23, 23, 23, 0.68) 49.48%, rgb(30 30 30 / 22%) 103.45%)",
        borderRadius: "26.227px",
        border: " 0.663px solid #FFF",
        backdropFilter: "blur(13.031462669372559px)",
      }}
      className="flex flex-col max-w-[450px] gap-[10px] relative rounded-[6.419px] px-[33px] pt-[28px] 2xl:pb-[60px] xl:pb-[60px] lg:pb-[60px] md:pb-[60px] sm:pb-[20px] pb-[20px] border border-[#B0B0B0] w-[100%] mx-auto min-h-[600px] <md:px-[20px] <md:min-h-[400px]"
    >
      <div className="flex justify-center space-x-2 items-center p-2 rounded-[50px] border">
        {/* Buy */}
        <button
          onClick={() => setSelectedTab(buyTab)}
          className={clsx(
            "px-5 py-1 text-[10px] rounded-[30px] flex justify-center items-center",
            selectedTab === buyTab
              ? "bg-[#5C5C5C] text-[#fff] "
              : "bg-[transparent] text-[#fff] "
          )}
        >
          <img className="mr-1" src={tabicn1} alt="" />
          Buy
        </button>

        {/* Stake */}
        <button
          onClick={() => setSelectedTab(stakeTab)}
          className={clsx(
            "px-5 py-1 text-[10px] rounded-[30px] flex justify-center items-center",
            selectedTab === stakeTab
              ? "bg-[#5C5C5C] text-[#fff] "
              : "bg-[transparent] text-[#fff] ",
            {
              "cursor-not-allowed":
                !accountData?.address && needsWalletConnected.has("stake"),
            }
          )}
          title={
            !accountData?.address && needsWalletConnected.has("stake")
              ? "Connect your wallet"
              : ""
          }
          disabled={!accountData?.address && needsWalletConnected.has("stake")}
        >
          <img className="mr-1" src={tabicn2} alt="" />
          Stake
        </button>

        {/* History */}
        <button
  onClick={() => setSelectedTab(transactionHistoryTab)}
  className={clsx(
    "px-5 py-1 text-[10px] rounded-[30px] flex justify-center items-center",
    selectedTab === transactionHistoryTab
      ? "bg-[#5C5C5C] text-[#fff] "
      : "bg-[transparent] text-[#fff] ",
    {
      "!cursor-not-allowed":
        !accountData?.address && needsWalletConnected.has("transaction-history"),
    }
  )}
  title={
    !accountData?.address && needsWalletConnected.has("transaction-history")
      ? "Connect your wallet"
      : ""
  }
  disabled={
    !accountData?.address && needsWalletConnected.has("transaction-history")
  }
>
  <img className="mr-1" src={tabicn3} alt="" />
  History
</button>
      </div>
      <div className="w-[100%] absolute top-0 -translate-y-1/2 left-0 flex justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={clsx(
              "text-[9.875px] text-center w-[100px] <md:w-[80px] font-[700] h-[30.612px] border border-[#454545] flex items-center justify-center rounded-[6px]",
              {
                "bg-[#020B10] text-[#fff]": selectedTab !== tab,
              },
              {
                "bg-[#000] text-[#fff]": selectedTab === tab,
              },
              {
                "cursor-not-allowed":
                  !accountData?.address && needsWalletConnected.has(tab.key),
              }
            )}
            title={
              !accountData?.address && needsWalletConnected.has(tab.key)
                ? "Connect your wallet"
                : ""
            }
            disabled={
              !accountData?.address && needsWalletConnected.has(tab.key)
            }
            // onClick={() => setSelectedTab(tab)}
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
