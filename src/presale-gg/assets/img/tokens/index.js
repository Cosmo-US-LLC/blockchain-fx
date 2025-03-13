import ada from "./ada.svg"
import avax from "./avax.svg"
import bch from "./bch.svg"
import bnb from "./bnb.svg"
import btc from "./btc.svg"
import busd from "./busd.svg"
import cro from "./cro.svg"
import doge from "./doge.svg"
import etc from "./etc.svg"
import eth from "./eth.svg"
import fil from "./fil.svg"
import ltc from "./ltc.svg"
import matic from "./matic.svg"
import pepe from "./pepe.svg"
import shib from "./shib.svg"
import sol from "./sol.svg"
import ton from "./ton.svg"
import trx from "./trx.svg"
import usdc from "./usdc.svg"
import usdt from "./usdt.svg"
import xlm from "./xlm.svg"
import xrp from "./xrp.svg"

/** @type {Record<string, string | undefined>} */
export const tokenImageMap = {
  ada, avax, bch, bnb, btc, busd,
  cro, doge, etc, eth, fil, ltc,
  matic, pepe, shib, sol, ton, trx,
  usdc, usdt, xlm, xrp
}

/** @type {Record<string, string | undefined>} */
export const tokenNameMap = {
	tether: usdt, bnb, ethereum: eth, solana: sol, ripple: xrp,
	dogecoin: doge, toncoin: ton, avalanche: avax, "bitcoin cash": bch,
	tron: trx, litecoin: ltc, "ethereum classic": etc, "shiba inu": shib,
	pepe, cardano: ada, bitcoin: btc, busd: busd
}

/** @type {Record<string, string | undefined>} */
export const chainImgMap = {
	"ERC-20": tokenImageMap["eth"],
	"BEP-20": tokenImageMap["bnb"],
	"TRC-20": tokenImageMap["trx"],
	"BITCOIN": tokenImageMap["btc"],
	"TON CHAIN": tokenImageMap["ton"],
	"AVALANCHE": tokenImageMap["avax"],
	"XRP": tokenImageMap["xrp"],
	"SOLANA": tokenImageMap["sol"],
	"DOGECOIN": tokenImageMap["doge"],
	"CARDANO": tokenImageMap["ada"],
	"LITECOIN": tokenImageMap["ltc"],
	"ETC": tokenImageMap["etc"],
	"BCH": tokenImageMap["bch"]
}