import { useState } from "react"
import Modal from "./Modal"
import toast from "react-hot-toast"
import { api } from "../../../presale-gg/api"
import { useAccount } from "../../../presale-gg/web3"

/**
 * @param {import("./Modal").ModalProps} props 
 * @returns 
 */
const ContactModal = (props) => {
	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ phoneNumber, setPhoneNumber ] = useState("")
	const [ loading, setLoading ] = useState(false)
	const account = useAccount()

	const submit = async () => {
		if (loading) return
		setLoading(true)
		try {
			await api.postLeads({
				email,
				mobile: phoneNumber,
				wallet_address: account.address
			})
			toast.success("Successfully sent details")
			props.onClose?.()
		} catch (err) {
			toast.error(api.getApiErrorMessage(err, "Error submitting details"))
		}
		setLoading(false)
	}

	return (
		<Modal {...props} title="Stay in touch" innerClassName="flex flex-col gap-4">
			<p className="text-[#2F2F2F] text-[12.888px] mt-2 leading-[1.4]">Fill in your details to get the latest updates and offers from the team.</p>
			<div className="flex flex-col gap-1">
				<p className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">Name*</p>
				<input
					className="border h-[30.612px] border-[#454545] p-1 h-[17.281px] w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
					email={name}
					placeholder="John Smith"
					onChange={(e) => setName(e.currentTarget.value)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">Email*</p>
				<input
					className="border h-[30.612px] border-[#454545] p-1 h-[17.281px] w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
					email={email}
					placeholder="john-smith@gmail.com"
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-[#2F2F2F] text-[8.888px] font-[700] leading-[8.888px]">Phone Number</p>
				<input
					className="border h-[30.612px] border-[#454545] p-1 h-[17.281px] w-[100%] text-[11.85px] font-[700] outline-none bg-[transparent] placeholder:text-[#000] placeholder:opacity-50"
					email={phoneNumber}
					placeholder="+1-212-456-7890"
					onChange={(e) => setPhoneNumber(e.currentTarget.value)}
				/>
			</div>

			<button
				onClick={submit}
				className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]"
			>
				{loading ? "Loading..." : "Submit"}
			</button>
		</Modal>
	)
}

export default ContactModal