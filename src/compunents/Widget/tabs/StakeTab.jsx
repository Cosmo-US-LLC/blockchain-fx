import { useState, useRef, useEffect } from "react"
import { userStakeTokens, userUnstakeTokens, useUserState } from "../../../presale-gg/stores/user.store"
import { formatNumber, parseNum } from "../../../presale-gg/util"
import toast from "react-hot-toast"
import { api } from "../../../presale-gg/api"

const StakeTab = () => {
  const userData = useUserState()

  const [ tokensStr, setTokensStr ] = useState("")

  const partialNumRegexp = /^(\d*|(\d+\.?\d*))$/;

  const [ stakeLoading, setStakeLoading ] = useState(false)
  const [ unstakeLoading, setUnstakeLoading ] = useState(false)

  const stake = async () => {
    if (stakeLoading || unstakeLoading) return
    if (!tokensStr || parseNum(tokensStr) === 0) return toast.error("Invalid token amount entered")
    setStakeLoading(true)
    try {
      await toast.promise(userStakeTokens(tokensStr), {
        loading: "Staking tokens",
        success: "Successfully staked tokens",
        error: (err) => api.getApiErrorMessage(err, "Error staking tokens")
      })
    } catch (_) {}
    setStakeLoading(false)
  }

  // Original unstake handler, disabled per request until the 90-day post-launch vesting period ends
  // const unstake = async () => {
  //   if (stakeLoading || unstakeLoading) return
  //   if (!tokensStr || parseNum(tokensStr) === 0) return toast.error("Invalid token amount entered")
  //   setUnstakeLoading(true)
  //   try {
  //     await toast.promise(userUnstakeTokens(tokensStr), {
  //       loading: "Unstaking tokens",
  //       success: "Successfully unstaked tokens",
  //       error: (err) => api.getApiErrorMessage(err, "Error unstaking tokens")
  //     })
  //   } catch (_) {}
  //   setUnstakeLoading(false)
  // }

  const [isUnstakeInfoOpen, setIsUnstakeInfoOpen] = useState(false)
  const unstakeInfoRef = useRef(null)
  const supportsHoverRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(hover: hover)").matches
  )

  useEffect(() => {
    if (!isUnstakeInfoOpen) return
    const handleClickOutside = (event) => {
      if (
        unstakeInfoRef.current &&
        !unstakeInfoRef.current.contains(event.target)
      ) {
        setIsUnstakeInfoOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isUnstakeInfoOpen])

	return (
    <div className="gap-[10px] flex-1 justify-between flex flex-col relative w-full min-h-[300px] 2xl:max-h-[380px] xl:max-h-[380px] lg:max-h-[380px] md:max-h-[100%] sm:max-h-[100%] max-h-[100%]">
      <p className="text-center text-[#fff] text-[16px] font-bold">Staking</p>
      <div className="flex flex-col gap-[inherit]">
        <div className="flex gap-4 <md:flex-col">
          <div
            className="flex-1 px-[11px] py-[12px] space-y-[5px] border border-[#D3D3D3] text-[12px] flex flex-col items-center"
            style={{
              background: "rgba(176, 176, 176, 0.17)",
            }}
          >
            <p className="leading-[1.2] text-[#fff] font-bold text-[14px]">{formatNumber(parseNum(userData.userStakeData?.total_staked), 0, 2)} BFX</p>
            <p className="leading-[1.2] text-[#fff]">Currently Staked</p>
          </div>
          <div
            className="flex-1 px-[11px] py-[12px] space-y-[5px] border border-[#D3D3D3] text-[12px] flex flex-col items-center"
            style={{
              background: "rgba(176, 176, 176, 0.17)",
            }}
          >
            <p className="leading-[1.2] font-bold text-[#fff] text-[14px]">{formatNumber(parseNum(userData.userStakeData?.daily_interest), 0, 2)} BFX</p>
            <p className="leading-[1.2] text-[#fff]">Current Daily Interest</p>
          </div>
        </div>
        <div className="flex gap-4 <md:flex-col">
          <div
            className="flex-1 self-stretch px-[11px] py-[12px] space-y-[5px] border border-[#D3D3D3] text-[12px] flex flex-col items-center"
            style={{
              background: "rgba(176, 176, 176, 0.17)",
            }}
          >
            <p className="leading-[1.2] text-[#fff] font-bold text-[14px]">{formatNumber(parseNum(userData.userStakeData?.total_earnings), 0, 2)} BFX</p>
            <p className="leading-[1.2] text-[#fff]">Total Earnings</p>
          </div>
          <div
            className="flex-1 self-stretch px-[11px] py-[12px] space-y-[5px] border border-[#D3D3D3] text-[12px] flex flex-col items-center"
            style={{
              background: "rgba(176, 176, 176, 0.17)",
            }}
          >
            <p className="leading-[1.2] font-bold text-[#fff] text-[14px]">158% ~ 297%</p>
            <p className="leading-[1.2] text-[#fff]">Expected APY</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-[10px] text-[#fff] font-bold">
          <span >Available to Stake</span>
          <span>{formatNumber(parseNum(userData.userStakeData?.total_can_stake))} BFX</span>
        </div>
        <input
          className="border h-[30.612px] border-[#454545] text-[#fff] p-1 flex justify-between items-center w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#fff]placeholder:opacity-50"
          placeholder="0"
          value={tokensStr}
          onFocus={(e) => {
            if (tokensStr === "0") {
              setTokensStr("")
              e.currentTarget.value = ""
            };
          }}
          onBlur={(e) => {
            if (tokensStr === "") {
              setTokensStr("0")
              e.currentTarget.value = "0"
            };
          }}
          onChange={(e) => {
            let val = e.target.value;
            if (!partialNumRegexp.test(val)) {
              val = tokensStr;
            }
            if (parseNum(val) > 99999999999) {
              val = "99999999999";
            }
            setTokensStr(val);
            e.target.value = val;
          }}
        />
        <div className="flex justify-between">
          <button
            className="px-2 py-1 text-[10px] text-[#fff] bg-[rgba(176, 176, 176, 0.17)] border border-[#d3d3d3] font-[500]"
            onClick={() => setTokensStr(userData.userStakeData?.total_can_stake ?? "0")}
          >
            Max Stake ({formatNumber(parseNum(userData.userStakeData?.total_can_stake))})
          </button>
          <button
            className="px-2 py-1 text-[10px] text-[#fff] bg-[rgba(176, 176, 176, 0.17)] border border-[#d3d3d3] font-[500]"
            onClick={() => setTokensStr(userData.userStakeData?.total_staked ?? "0")}
          >
            Max Unstake ({formatNumber(parseNum(userData.userStakeData?.total_staked))})
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          className="text-white bg-[#E5AE00] px-[12px] hover:text-white hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#E5AE00] w-[100%] h-[32.094px]"
          onClick={stake}
        >
          Stake
        </button>
        <div
          className="relative w-[100%]"
          ref={unstakeInfoRef}
          onMouseEnter={() =>
            supportsHoverRef.current && setIsUnstakeInfoOpen(true)
          }
          onMouseLeave={() =>
            supportsHoverRef.current && setIsUnstakeInfoOpen(false)
          }
        >
          <button
            type="button"
            className="text-white bg-[#E5AE00] opacity-60 cursor-not-allowed px-[12px] text-[11.85px] font-[800] border border-[#E5AE00] w-[100%] h-[32.094px]"
            onClick={() => setIsUnstakeInfoOpen((open) => !open)}
          >
            Unstake
          </button>
          {isUnstakeInfoOpen && (
            <div className="absolute bottom-[calc(100%+8px)] right-0 max-w-[calc(100vw-40px)] z-30 w-[220px] rounded-[8px] border border-[#FBD914] bg-[#111] p-[10px] text-center text-[10.5px] leading-[1.4] text-[#fff] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Unstaking is locked until the 90-day vesting period after launch has ended.
            </div>
          )}
        </div>
      </div>
    </div>
	)
}

const stakeTabData = {
  component: StakeTab,
  label: "Stake",
  key: "stake"
}

export default stakeTabData