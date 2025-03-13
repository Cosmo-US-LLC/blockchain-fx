export namespace API {
	export type Res<T> = Omit<Response, "body"> & {body: T}

	export interface Stage {
		id: number
		stage_name: string
		total_tokens: string
		total_tokens_sold: string
		tokens_available: string
		token_price: string
		cumulative_usd_raised: string | null,
		cumulative_tokens_sold: string,
		next_stage_target_usd: string,
		next_stage_target_tokens: string,
		next_stage_price: string
	}

	export interface Info {
		holders: string,
		transactions: string,
		main_payment_wallet_address: string
	}

	export interface PaymentToken {
		id: number,
		name: string,
		symbol: string,
		price: string,
		chain: string,
		nowpayments_id: string | null,
		nowpayments_minimum: string | null
	}

	export type TransactionHistoryItem = {
		id: number,
		project: string,
		stage_name: string | null,
		wallet_address: string,
		transaction_hash: string,
		payment_token_name: string,
		payment_token_amount: string,
		payment_usd_amount: string,
		tokens_bought: string | null,
		type: string,
		status: "pending" | "processing" | "completed" | "failed" | "expired" | "refunded",
		created_at: string
	}

	export type SweResponse = {
		message: string
	}

	export interface Token {
		token: string,
		expires: string
	}

	export interface User {
		wallet_address: string,
		total_tokens: string
		referral_code: string | null,
		referral_count: number
		referred_by: string | null,
		total_referral_usd_rewards: string
	}
	
	export interface LeaderboardEntry {
		rank: string,
		wallet_address: string,
		referral_count: string,
		total_earned: string
	}

	export interface PriceChartEntry {
		time: string,
		average_price: string
	}

	export interface Transaction {
		amount_received: number,
		burning_percent: number | null,
		created_at: string,
		expiration_estimate_date: string,
		ipn_callback_url: string,
		is_fee_paid_by_user: boolean,
		is_fixed_rate: false,
		network: string,
		network_precision: number | null,
		order_description: string,
		order_id: string,
		pay_address: string,
		pay_amount: number,
		pay_currency: string,
		payin_extra_id: string | null,
		payment_id: string,
		payment_status: "waiting" | string,
		price_amount: number,
		price_currency: string,
		product: string,
		purchase_ud: string,
		smart_contract: null,
		time_limit: null,
		type: string,
		updated_at: string,
		valid_until: string
	}

	export type StakeData = {
		total_staked: string
	}

	export type UserStakeData = {
		daily_interest: string,
		total_staked: string,
		total_earnings: string,
		total_can_stake: string
	}

	export type Poll = {
		id: number,
		options: {
			id: string,
			title: string,
			votes: string
		}[],
		project_id: string,
		title: string,
		end_date: string
	}

	export type PollVote = {
		poll_id: number,
		option_id: string,
		votes: string
	}
	
	export type BonusCode = {
		percentage: number
	}

	export type UserRankData = {
		can_level_up: boolean
		current_level: number
		current_rank: Rank | null
		usd_to_next_level: number
		usd_to_next_rank: number | null
		ranks: Rank[]
	}
	export type Rank = {
		level: number
		rank: string
		reward: string,
		bonus_percentage: number
	}

	export type ReferralBonuses = {
		is_referred: boolean
		referral_token_bonus_percentage: number
		referral_payout_percentage: number
		min_referral_spend: number
	}
}