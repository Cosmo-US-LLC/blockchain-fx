import { useEffect, useState } from "react";
import { api } from "../../../presale-gg/api";
import { useAccount } from "../../../presale-gg/web3";
import { tokenNameMap } from "../../../presale-gg/assets/img/tokens";
import { capitalize, formatLargeNumber, formatNumber, parseNum } from "../../../presale-gg/util";
import Toggle from "../../ui/Toggle";

/**
 * @typedef {import("../../../presale-gg/api/api.types").API.TransactionHistoryItem} TransactionHistoryItem
 * @typedef {import("../../../presale-gg/api/api.types").API.BonusTransactionHistoryItem} BonusTransactionHistoryItem
 */

const TransactionHistoryTab = () => {
  /** @type {[TransactionHistoryItem[], (transactions: TransactionHistoryItem[]) => void]} */
  const [transactions, setTransactions] = useState([])
  /** @type {[BonusTransactionHistoryItem[], (transactions: BonusTransactionHistoryItem[]) => void]} */
  const [bonusTransactions, setBonusTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const accountData = useAccount()

  const [ showBonus, setShowBonus ] = useState(false)

  useEffect(() => {
    if (!accountData.address) return setTransactions([])
    setLoading(true)
    Promise.all([
      api.getTransactionHistory(accountData.address, 0, 100)
        .then((res) => {
          setTransactions(res.data)
        }),
      api.getBonusTransactionHistory(accountData.address, 0, 100)
        .then((res) => {
          setBonusTransactions(res.data)
        }),
    ]).then(() => setLoading(false))
  }, [accountData.address])

  const statusColMap = {
		"pending": ["#4f2e1a", "#de7223"],
		"unpaid": ["#4f2e1a", "#de7223"],
		"processing": ["#4f2e1a", "#de7223"],
		"completed": ["#142e23", "#13a868"],
		"failed": ["#731a14", "#de5950"],
		"expired": ["#731a14", "#de5950"],
		"error": ["#731a14", "#de5950"],
		"finalizing": ["#4f2e1a", "#de7223"],
		"refunded": ["#731a14", "#de5950"],
		"rank": ["#0b3661", "#66aaed"],
		"referral": ["#4f2e1a", "#de7223"],
		"referrer": ["#731a14", "#de5950"],
		"bonus_code": ["#142e23", "#13a868"]
	}

  const getStatus = (trx) => trx.status === "pending" ? "unpaid" : trx.status

  return (
    <div className="gap-[10px] flex-1 h-0 justify-between flex flex-col relative w-full min-h-full">
      <p className="text-center text-[16px] font-bold">Transaction History</p>
      <div className="flex items-center justify-center gap-2 text-[12px] font-[600]">
        <Toggle checked={showBonus} onChange={(newChecked) => setShowBonus(newChecked)} />
        Show bonus transactions?
      </div>
      <div className="flex flex-col gap-2 flex-1 h-0 overflow-y-auto pr-2 -mr-2">
        {((showBonus && bonusTransactions.length === 0) || (!showBonus && transactions.length === 0)) && (
          <p className="text-[14px] text-center">
            {loading ? "Loading..." : `No ${showBonus ? "bonus " : ""}transactions`}
          </p>
        )}
        {!showBonus && transactions.map((trx) => (
          <div className="flex items-center text-[10px] <sm:text-[9px] gap-2 min-h-8 px-2 border border-[#D3D3D3] bg-[rgba(237,237,237,0.4)]" key={trx.id}>
            <div className="min-w-[8rem] flex gap-1 flex-[1.5] items-center">
              <p className="leading-[1.2] w-12 flex-none text-end">{formatLargeNumber(parseNum(trx.payment_token_amount))}</p>
              <img className="w-4 h-4" src={tokenNameMap[trx.payment_token_name.toLowerCase()]} alt="" />
              <p className="leading-[1.2]">{trx.payment_token_name}</p>
            </div>
            <p className="leading-[1.2] flex-1">{trx.tokens_bought === null ? capitalize(getStatus(trx)) : `+${formatLargeNumber(parseNum(trx.tokens_bought))} BFX`}</p>
            <p
              className="leading-[1.2] bg-[red] flex justify-center w-16 text-[10px] <sm:text-[8px] <sm:w-[3.125rem] rounded-[6px] font-bold py-1 text-[#fff]"
              style={{backgroundColor: statusColMap[getStatus(trx)]?.[1] ?? statusColMap["processing"][0]}}
            >{capitalize(getStatus(trx))}</p>
          </div>
        ))}
        {showBonus && bonusTransactions.map((trx) => (
          <div className="flex items-center text-[10px] <sm:text-[9px] gap-2 min-h-8 px-12 border border-[#D3D3D3] bg-[rgba(237,237,237,0.4)]" key={trx.id}>
            <p className="leading-[1.2] flex-1">+{formatLargeNumber(parseNum(trx.bonus_token_amount))} BFX</p>
            <p
              className="leading-[1.2] bg-[red] flex justify-center w-16 text-[10px] <sm:text-[8px] <sm:w-[3.125rem] rounded-[6px] font-bold py-1 text-[#fff]"
              style={{backgroundColor: statusColMap[trx.type][1]}}
            >{capitalize(trx.type)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const transactionHistoryTabData = {
  label: "Transactions",
  component: TransactionHistoryTab,
  key: "transaction-history"
}

export default transactionHistoryTabData
