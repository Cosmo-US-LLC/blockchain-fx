import { useState } from "react"
import { resetUserBonusCode, userApplyBonusCode, userResetReferralCode, userUpdateReferralCode, useUserState } from "../../presale-gg/stores/user.store"
import toast from "react-hot-toast"
import { api } from "../../presale-gg/api"

/**
 * @param {object} props 
 * @param {(code: string) => Promise<unknown>} props.onClick
 * @param {string} props.label
 * @param {string | null} props.appliedText
 * @param {() => void} props.onReset
 * @param {string} [props.defaultValue]
 * @returns 
 */
export const CodeInput = (props) => {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState(props.defaultValue ?? "")

  const apply = async () => {
    if (loading) return
    if (!code) return toast.error("Invalid code")
    setLoading(true)
    try {
      await props.onClick(code)
    } catch (_) {}
    setLoading(false)
  }

  return (
    <div className="flex gap-2 border border-[#454545] text-[12px]">
      {props.appliedText ? (
        <p 
          className="w-0 flex-1 !outline-none text-[12px] p-1 text-[#009900] font-bold"
        >{props.appliedText}</p>
      ) : (
        <input
          size={0}
          className="w-0 flex-1 !outline-none text-[12px] p-1 placeholder:text-[#000] placeholder:opacity-50 font-bold"
          value={code}
          onChange={(e) => setCode(e.currentTarget.value)}
          placeholder={props.label}
        />
      )}
      <button
        className="!outline-none bg-[#e5ae00] text-[#fff] p-1 border-l border-[#454545] font-bold w-14"
        onClick={() => {
          if (props.appliedText) props.onReset()
          else apply()
        }}
      >
        {loading ? "Loading" : (props.appliedText ? "Reset" : "Apply")}
      </button>
    </div>
  )
}

/**
 * @param {object} props 
 * @param {string} [props.defaultValue]
 * @returns 
 */
export const BonusCodeInput = (props) => {
  const userData = useUserState()

  return (
    <CodeInput
      defaultValue={props.defaultValue}
      label="Bonus Code"
      appliedText={userData.appliedBonusCode ? `Applied Code +${userData.appliedBonusCode.percentage}%` : null}
      onReset={() => resetUserBonusCode()}
      onClick={async (code) => {
        await toast.promise(userApplyBonusCode(code), {
          loading: "Applying bonus code",
          error: (err) => api.getApiErrorMessage(err, "Error applying bonus code"),
          success: "Successfully applied bonus code"
        })
      }}
    />
  )
}

/**
 * @param {object} props 
 * @param {string} [props.defaultValue]
 * @returns 
 */
export const ReferralCodeInput = (props) => {
  const userData = useUserState()

  return (
    <CodeInput
      defaultValue={props.defaultValue}
      label="Referral Code"
      appliedText={userData.user?.referred_by ? "Applied Referral Code" : undefined}
      onReset={() => userResetReferralCode()}
      onClick={async (code) => {
        await toast.promise(userUpdateReferralCode(code), {
          loading: "Applying referral code",
          error: (err) => api.getApiErrorMessage(err, "Error applying referral code"),
          success: "Successfully applied referral code"
        })
      }}
    />
  )
}