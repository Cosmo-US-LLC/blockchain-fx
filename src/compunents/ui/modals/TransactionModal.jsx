import { QRCodeCanvas } from '@akamfoad/qrcode'
import clsx from 'clsx'
import Modal from './Modal'
import { ReactComponent as CheckCircleIcon } from '../../../assets/icons/check-circle.svg'
import { ReactComponent as ClockIcon } from '../../../assets/icons/clock.svg'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/error.svg'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useAccount } from "../../../presale-gg/web3/hooks"
import copyImg from "../../../assets/navbar/wallet/copy-left.png";
import iicon from "../../../assets/navbar/wallet/information-circle-contained-filled.png";
import { capitalize, copyText, parseNum, waitForNextTransaction, zeroPad } from '../../../presale-gg/util'
import { refetchUserData } from '../../../presale-gg/stores/user.store'
/**
 * @typedef {import("../../../presale-gg/api/api.types").API.Transaction} NowPaymentsTransaction
 * @typedef {import("./Modal").ModalProps} ModalProps
 * @typedef {Omit<ModalProps, 'title'> & {transaction: NowPaymentsTransaction}} TransactionModalProps
 */

const EXPIRES_IN_MS = 60 * 60 * 1000

/**
 * @param {TransactionModalProps} props
 */
export const TransactionModal = ({ transaction, ...others }) => {
  const [qrRef, setQrRef] = useState(null)
  const [status, setStatus] = useState('unpaid')
  const [completedTransaction, setCompletedTransaction] = useState(null)
  const accountData = useAccount()
  const createdAt = useRef(Date.now() - 1000)
  const [expiresInMs, setExpiresInMs] = useState(EXPIRES_IN_MS)

  const timeStr = useMemo(() => {
    const mins = Math.floor(expiresInMs / (60 * 1000))
    const secs = Math.floor((expiresInMs - mins * 60 * 1000) / 1000)
    return `${zeroPad(Math.floor(mins), 2)}:${zeroPad(Math.floor(secs), 2)}`
  }, [expiresInMs])

  useEffect(() => {
    if (!others.open) return
    const interval = setInterval(() => {
      const diff = Math.max(createdAt.current + EXPIRES_IN_MS - Date.now(), 0)
      if (diff === 0 && status === 'unpaid') setStatus('expired')
      setExpiresInMs(diff)
    }, 1000)
    return () => clearInterval(interval)
  }, [others.open, status])

  useEffect(() => {
    setStatus('unpaid')
    createdAt.current = Date.now() - 1000
  }, [transaction])

  useEffect(() => {
    if (!accountData.address || !others.open) return
    const abortController = new AbortController()
    waitForNextTransaction(accountData.address, createdAt.current, {
      signal: abortController.signal
    }).then((trx) => {
      refetchUserData().finally(() => {
        if (abortController.signal.aborted) return
        setStatus('paid')
        setCompletedTransaction(trx)
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "purchase",
          ecommerce: {
            value: parseNum(transaction.price_amount),
            currency: 'USD',
            transaction_id: trx.id
          }
        })
      })
    })
    return () => abortController.abort()
  }, [accountData.address, others.open, transaction])

  useEffect(() => {
    if (!qrRef) return
    new QRCodeCanvas(transaction.pay_address, {
      bgColor: "#000",
      fgColor: "#fff"
    }).draw(qrRef)
  }, [transaction.pay_address, qrRef])

  const statusCols = {
    paid: '#32a852',
    unpaid: '#000',
    expired: '#f54545'
  }

  return (
    <Modal
      {...others}
      title="Transaction"
      style={{ '--status-col': statusCols[status] }}
      innerClassName='flex flex-col gap-4 max-h-[44rem]'
    >
      <div className="flex flex-col text-xs gap-[0.125rem]" style={{"color": "var(--status-col)"}}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[0.2em]">
            {status === 'paid' && <CheckCircleIcon className='w-[1.15em] h-[1.15em]' />}
            {status === 'unpaid' && <ClockIcon className='w-[1.15em] h-[1.15em]' />}
            {status === 'expired' && <ErrorIcon className='w-[1.15em] h-[1.15em]' />}
            {capitalize(status)}
          </div>
          {status === 'unpaid' && <p>Expires in {timeStr}</p>}
        </div>
        <div
          className="flex h-2 bg-[rgba(0,0,0,0.2)] rounded-full overflow-hidden"
          style={{ '--frac': `${status === "unpaid" ? 1 - expiresInMs / EXPIRES_IN_MS : 1}` }}
        >
          <div className="rounded-full" style={{flex: "var(--frac)", backgroundColor: "var(--status-col)"}} />
        </div>
      </div>
      {status === 'unpaid' && (
        <>
          <div className='flex flex-col gap-2 -mt-2'>
            <p className='text-[12px] font-bold text-[#545454] text-center'>{transaction.pay_currency.toUpperCase()} ({transaction.network.toUpperCase()})</p>
            <canvas ref={setQrRef} className="w-40 h-40 self-center rounded-md" />
            <p className='text-center font-[400] text-[#868686] text-[11px] tracking-[-0.22px]'>Scan QR code or Copy the address</p>
          </div>
          <NumberValue
            value={transaction.pay_amount}
            label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
          />
          {transaction.payin_extra_id && (
          <>
            <NumberValue label="Destination Tag" value={transaction.payin_extra_id} />
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
          <NumberValue value={transaction.pay_address} label={`Payment address`} />
          <div className="flex  space-x-2 p-[6px] border border-[#BA7B00] bg-[#FFF6E7]">
            <img src={iicon} alt="Info" className="w-[19px] h-[19px]" />
            <p className="text-[#9D6508] text-[10px] tracking-[-0.05px] font-[500]">
              Only send {transaction.pay_currency.toUpperCase()} on the{" "}
              {transaction.network.toUpperCase()} blockchain
            </p>
          </div>
          <button
            onClick={() => copyText(transaction.pay_address)}
            className="flex justify-center items-center  text-[11.85px] text-[#fff] bg-[#E5AE00] runded-[4px] border border-[#E5AE00] h-[32px] w-[100%] hover:opsety-[0.6] flex-shrink-0"
          >
            <img src={copyImg} className="mr-2" alt="" />
            Copy the wallet address
          </button>
          <ul className='pl-3 list-decimal space-y-[10px]'>
            <li className='text-[10px] text-[#7C7C7C] font-[500]'>BFX tokens, bonuses, staking rewards and NFTs (if eligible) are added to your dashboard instantly.</li>
            <li className='text-[10px] text-[#7C7C7C] font-[500]'>Connect the same wallet at BlockchainFX.com to check your dashboard and BFX balance.</li>
            <li className='text-[10px] text-[#7C7C7C] font-[500]'>Any amount sent to this wallet is automatically credited and added to your dashboard.</li>
          </ul>
        </>
      )}
      {status === 'expired' && (
        <>
          <div className="flex  space-x-2 p-[6px] border border-[#BA7B00] bg-[#FFF6E7]">
            <img src={iicon} alt="Info" className="w-[19px] h-[19px]" />
            <p className="text-[#9D6508] text-[10px] tracking-[-0.05px] font-[500]">
              This transaction has expired, do not send any more tokens as they may be lost. To try
            again create a new transaction.
            </p>
          </div>
        </>
      )}
      {status === 'paid' && (
        <>
          <NumberValue
            value={transaction.pay_amount}
            label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
          />
          <NumberValue
            value={completedTransaction?.tokens_bought ?? '0'}
            label={`You Received (BFX)`}
            noCopy
          />
          <p className='text-[10px] text-[#7C7C7C] font-[500]'>
            This transaction has completed successfully, do not send any more tokens as they may be
            lost. To try again create a new transaction.
          </p>
        </>
      )}
    </Modal>
  )
}

export default TransactionModal

/**
 * 
 * @param {object} props 
 * @param {string | number} props.value
 * @param {string} props.label
 * @param {boolean} [props.noCopy]
 */
export const NumberValue = (props) => {
  return (
    <div className="flex flex-col">
      <p className="text-[10px] text-[#777] font-[500]">{props.label}</p>
      <div className="border flex justify-between items-center border-[#DFDFDF] rounded-[4px] p-[8px]">
        <input
          type="text"
          className="text-[12px] text-[#000] font-bold outline-none flex-1"
          value={props.value}
          readOnly
        />
        {!props.noCopy && (
          <button onClick={() => copyText(props.value)}>
            <img src={copyImg} alt="Copy" />
          </button>
        )}
      </div>
    </div>
  )
}
