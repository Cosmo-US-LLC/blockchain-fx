import Modal from "./Modal"

/**
 * @param {import("./Modal").ModalProps & {onContinue?: () => void}} props
 */
const DisclaimerModal = ({ onContinue, ...others }) => {
	return (
		<Modal {...others} title="Disclaimer" className="text-[12px] max-w-[18rem]">
			By proceeding, you acknowledge that you are purchasing $BFX tokens. Please note that your
			tokens will not be immediately deposited into your wallet. Instead, they will be distributed
			via an airdrop on a date that will be announced later. Once the airdrop is completed, the
			tokens will be deposited directly into your wallet.
			<button
				className="mt-2 text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]"
				onClick={onContinue}
			>
				Continue
			</button>
		</Modal>
	)
}

export default DisclaimerModal