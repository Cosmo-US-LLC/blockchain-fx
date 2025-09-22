import clsx from 'clsx'
import Spinner from '../../Spinner'
import Modal from '../Modal'
import classes from './WalletTransferModal.module.css'

import { ReactComponent as CheckCircleIcon } from '../../../../assets/icons/check-circle.svg'
import { ReactComponent as ClockIcon } from '../../../../assets/icons/clock.svg'
import { ReactComponent as ErrorIcon } from '../../../../assets/icons/error.svg'
import { ReactComponent as CancelledIcon } from '../../../../assets/icons/x-circle.svg'
import { useMemo } from 'react'
import { copyText, formatNumber, parseNum } from '../../../../presale-gg/util'
import copyImg from "../../../../assets/navbar/wallet/copy-left.png";

/**
 * @typedef {import("../../../../presale-gg/api/api.types").API.TransactionHistoryItem} TransactionHistoryItem
 * @typedef {import("../../../../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * @typedef {object} BaseWalletTransferModalProps
 * @property {'sending' | 'confirming' | 'finalizing' | 'finished' | 'errored'} BaseWalletTransferModalProps.state
 * @property {TransactionHistoryItem | null} BaseWalletTransferModalProps.transaction
 * @property {string | null} BaseWalletTransferModalProps.transactionHash
 * @property {string} BaseWalletTransferModalProps.payAmount
 * @property {PaymentToken} payCurrency
 * 
 * @typedef {Omit<import("../Modal").ModalProps, 'title'> & BaseWalletTransferModalProps} WalletTransferModalProps
 */

/**
 * @param {WalletTransferModalProps} _props 
 */
const WalletTransferModal = ({ state, transaction, transactionHash, payAmount, payCurrency, ...others }) => {
  const statusBoxes = useMemo(() => {
    const boxes = []

    let sendStatus
    if (state === 'sending') sendStatus = 'in_progress'
    else if (state === 'errored') sendStatus = 'errored'
    else sendStatus = 'completed'

    let sendTitle = 'Transaction Sending'
    if (sendStatus === 'completed') sendTitle = 'Transaction Sent'
    else if (sendStatus === 'errored') sendTitle = 'Transaction Errored'

    boxes.push({ status: sendStatus, title: sendTitle })

    let confirmStatus
    if (state === 'confirming') confirmStatus = 'in_progress'
    else if (state === 'errored') confirmStatus = 'cancelled'
    else if (state === 'sending') confirmStatus = 'waiting'
    else confirmStatus = 'completed'

    let confirmTitle
    if (confirmStatus === 'completed') confirmTitle = 'Transaction Confirmed'
    else if (confirmStatus === 'cancelled') confirmTitle = 'Confirmation Cancelled'
    else if (confirmStatus === 'in_progress') confirmTitle = 'Confirming Transaction'
    else confirmTitle = 'Awaiting Confirmation'

    boxes.push({ status: confirmStatus, title: confirmTitle })

    let completeStatus
    if (state === 'confirming') completeStatus = 'waiting'
    else if (state === 'errored') completeStatus = 'cancelled'
    else if (state === 'sending') completeStatus = 'waiting'
    else if (state === 'finalizing') completeStatus = 'in_progress'
    else completeStatus = 'completed'

    let completeTitle
    if (completeStatus === 'completed') completeTitle = 'Transaction Complete'
    else if (completeStatus === 'cancelled') completeTitle = 'Transaction Cancelled'
    else if (completeStatus === 'in_progress') completeTitle = 'Finalizing Transaction'
    else completeTitle = 'Awaiting Completion'

    const completeBody =
      completeStatus === 'completed'
        ? `Received ${formatNumber(parseNum(transaction?.tokens_bought), 2, 4)} BFX`
        : undefined

    boxes.push({ status: completeStatus, title: completeTitle, body: completeBody })

    return boxes
  }, [state, transaction])

  return (
    <Modal {...others} title="Transaction" innerClassName={classes["modal"]}>
      <div className={classes['label-container']}>
        <p className={classes['label']}>Transaction Hash</p>
        <div className={classes['info-input']} style={{ '--padding-right': '0.375rem' }}>
          {transactionHash ? (
            <input className={classes['input']} value={transactionHash} readOnly size={1} />
          ) : (
            <div className={classes['info-value']}>
              <ValueLoader loading={!transactionHash && state !== 'errored'}>
                Error
              </ValueLoader>
            </div>
          )}
          <button
            onClick={() => copyText(transactionHash ?? '')}
            disabled={!transactionHash}
            color="secondary"
          >
            <img src={copyImg} alt="Copy" className={classes["copy-img"]} />
          </button>
        </div>
      </div>
      <div className={classes['info-container']}>
        <p className={classes['info-label']}>Transaction Summary</p>
        <div className={classes['summary-container']}>
          <div className={classes['summary-item']}>
            <p className={classes['summary-label']}>You Sent</p>
            <p className={classes['summary-value']}>
              {formatNumber(parseNum(payAmount))} {payCurrency.symbol.toUpperCase()}
            </p>
          </div>
          <div className={classes['summary-item']}>
            <p className={classes['summary-label']}>You Received</p>
            <div className={classes['summary-value']}>
              <ValueLoader
                loading={!transaction && state !== 'errored'}
                loadingText="Calculating"
              >
                {state === 'errored'
                  ? 'Error'
                  : `${formatNumber(parseNum(transaction?.tokens_bought), 2, 4)} BFX`}
              </ValueLoader>
            </div>
          </div>
          <div className={classes['summary-item']}>
            <p className={classes['summary-label']}>Rate</p>
            <div className={classes['summary-value']}>
              <ValueLoader
                loading={!transaction && state !== 'errored'}
                loadingText="Calculating"
              >
                {state === 'errored'
                  ? 'Error'
                  : `1 ${payCurrency.symbol.toUpperCase()} = ${formatNumber(parseNum(transaction?.tokens_bought) / parseNum(payAmount), 2, 4)} BFX`}
              </ValueLoader>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(classes['info-container'], classes['status-container'])}>
        {statusBoxes.map((box) => (
          <StatusBox {...box} />
        ))}
      </div>
    </Modal>
  )
}

export default WalletTransferModal

/**
 * @param {object} props 
 * @param {boolean} props.loading
 * @param {string} [props.loadingText]
 */
const ValueLoader = (props) => {
  return (
    <>
      {props.loading && <>
        {props.loadingText ?? 'Loading'} <Spinner size={3} />
      </>}
      {!props.loading && props.children}
    </>
  )
}

/**
 * @typedef {object} StatusBoxProps
 * @property {string} StatusBoxProps.title
 * @property {'in_progress' | 'completed' | 'waiting' | 'errored' | 'cancelled'} StatusBoxProps.status
 * @property {string} [StatusBoxProps.body]
 */

/**
 * @param {StatusBoxProps} props 
 * @returns 
 */
const StatusBox = (props) => {
  return (
    <div className={clsx(classes['status-box'], classes[`status-${props.status.replace('_', '-')}`])}>
      <div className={classes['status-icon-container']}>
        {props.status === 'in_progress' && <Spinner size={5} />}
        {props.status === 'completed' && <CheckCircleIcon />}
        {props.status === 'waiting' && <ClockIcon />}
        {props.status === 'errored' && <ErrorIcon />}
        {props.status === 'cancelled' && <CancelledIcon />}
      </div>
      <div className={classes['status-text-container']}>
        <p className={classes['status-title']}>{props.title}</p>
        <p className={classes['status-status']}>
          {props.status === 'in_progress' && 'In Progress...'}
          {props.status === 'waiting' && 'Waiting'}
          {props.status === 'completed' && 'Completed'}
          {props.status === 'cancelled' && 'Cancelled'}
          {props.status === 'errored' && 'Error'}
        </p>
        {props.body && <p className={classes['status-body']}>{props.body}</p>}
      </div>
    </div>
  )
}
