/**
 * @param {number | string} num 
 * @param {number} zeros 
 * @returns {string} 
 */
export const zeroPad = (num, zeros) => {
	let numStr = typeof(num) === "string" ? num : num.toString()
	let len = numStr.length
	for (let i = 0; i < zeros - len; i++) {
		numStr = `0${numStr}`
	}
	return numStr
}

/**
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const minMax = (num, min, max) => {
	if (num < min) return min;
	if (num > max) return max;
	return num
}

const minDecimalPlaces = 0
const maxDecimalPrecision = 8

/**
 * @param {string | number} numStr 
 * @param {number} [minDecimals]
 * @returns {string}
 */
export const removeTrailingZeros = (numStr, minDecimals = minDecimalPlaces) => {
	numStr = numStr.toString()
	const numSplit = numStr.split(".")
	if (numSplit.length < 2) return numStr
	const integerStr = numSplit[0]
	const decimalStr = numSplit[1]
	if (decimalStr.length <= minDecimals) return ""
	const trailingZerosMatch = decimalStr.match(/0*$/)
	if (!trailingZerosMatch) return "";
	let trailingZerosStr = trailingZerosMatch[0]
	const precisionDecimalStr = decimalStr.substring(0, trailingZerosMatch.index)
	trailingZerosStr = trailingZerosStr.substring(0, minDecimals - (decimalStr.length - trailingZerosStr.length))
	return `${integerStr}.${precisionDecimalStr}${trailingZerosStr}`
}

/**
 * @param {number} num 
 * @param {number} [minDecimals ]
 * @param {number} [maxPrecision]
 * @returns {string}
 */
export const formatPrecision = (num, minDecimals = minDecimalPlaces, maxPrecision = maxDecimalPrecision) => {
	num = Math.floor(num * Math.pow(10, maxDecimalPrecision) + 0.5) / Math.pow(10, maxDecimalPrecision)
	
	let numStr = removeTrailingZeros(new Intl.NumberFormat("en-GB", {
		useGrouping: false,
		minimumSignificantDigits: 3,
		minimumFractionDigits: 3,
		compactDisplay: "long",
	}).format(num))
	let decimals = 0
	if (numStr.includes(".")) {
		decimals = numStr.split(".")[1].length
	}
	if (decimals < minDecimals) {
		if (decimals === 0) numStr = numStr + "."
		for (var i = decimals; i < minDecimals; i++) {
			numStr = numStr + "0"
		}
	}
	if (decimals > 0) {
		const numSplit = numStr.split(".")
		const integerStr = numSplit[0]
		const decimalStr = numSplit[1]
		let nonZeroDecimals = (decimalStr.match(/[1-9][0-9]*/) || [""])[0]
		const nonZeroDecimalCount = nonZeroDecimals.length
		let zeroDecimals = (decimalStr.match(/0*/) || [""])[0]
		let decimals = zeroDecimals + nonZeroDecimals
		if (integerStr !== "0" && decimals.length > maxPrecision) {
			decimals = decimals.substring(0, maxPrecision)
			numStr = `${integerStr}.${removeTrailingZeros(decimals, minDecimals)}`
		} else if (nonZeroDecimalCount > maxPrecision) {
			nonZeroDecimals = nonZeroDecimals.substring(0, maxPrecision)
			numStr = `${integerStr}.${zeroDecimals}${removeTrailingZeros(nonZeroDecimals, minDecimals)}`
		}
	}

	return numStr
}

/**
 * @param {number | string} num 
 * @returns {string}
 */
export const addCommas = (num) => {
	const str = num.toString()
	const split = str.split(".")
	const decimals = split[1]
	const int = split[0]
	return int
		.split('')
		.reverse()
		.map((char, i) => i % 3 === 2 ? `,${char}` : char)
		.reverse()
		.join('')
		.replace(/(,$)|(^,)/, '') + (decimals ? "." + decimals : "")
}

/**
 * @param {number | string} num 
 * @param {boolean} [addSymbol]
 * @param {number} [minDp]
 * @param {number} [maxDp]
 * @returns {string}
 */
export const formatDollar = (num, addSymbol = true, minDp = 2, maxDp = 2) => {
	if (typeof num === "string") num = Number.parseFloat(num)
	const original = num
	num = Math.abs(num)
	let str = addCommas(formatPrecision(num, minDp, maxDp))
	if (addSymbol) str = `${original < 0 ? "-" : ""}$${str}`
	return str
}

/**
 * @param {number} num 
 * @param {number} [minDP]
 * @param {number} [maxDP]
 * @returns {string}
 */
export const formatNumber = (num, minDP, maxDP) => {
	return addCommas(formatPrecision(num, minDP, maxDP))
}

const letterMap = {
	"K": 1000,
	"M": 1000000,
	"B": 1000000000,
	"T": 1000000000000,
	"Q": 1000000000000000,
}

/**
 * @param {number} num 
 * @param {number} [precisionCutoff]
 * @param {number} [minDP]
 * @param {number} [maxDP]
 * @returns {string}
 */
export const formatLargeNumber = (num, precisionCutoff = 1000, minDP = 2, maxDP = 2) => {
	if (num < precisionCutoff) return formatNumber(num, minDP, maxDP)
	num = Math.floor(num);
	let newNum = num;
	let suffix = ""
	Object.entries(letterMap).forEach(([letter, divisor]) => {
		if (num / divisor < 1000 && num / divisor >= 1) {
			suffix = letter
			newNum = num / divisor;
		}
	})
	return `${roundToDP(newNum, maxDP < 2 ? maxDP : 2)}${suffix}`
}

/**
 * @param {number} num
 * @param {number} decimalPlaces
 * @returns {number}
 */
export const roundToDP = (num, decimalPlaces) => {
	return (Math.floor(num * 10**decimalPlaces) / 10**decimalPlaces)
}

/**
 * @param {number} num
 * @param {number} decimalPlaces
 * @returns {number}
 */
export const actualRoundToDP = (num, decimalPlaces) => {
	return (Math.round(num * 10**decimalPlaces) / 10**decimalPlaces)
}


/**
 * @param {number} num
 * @param {number} decimalPlaces
 * @returns {number}
 */
export const ceilToDP = (num, decimalPlaces) => {
	return (Math.ceil(num * 10**decimalPlaces) / 10**decimalPlaces)
}

/**
 * @param {number | string | undefined | null} num 
 * @returns {number}
 */
export const parseNum = (num) => {
	if (typeof(num) === "number") return num
	return Number.parseFloat(num || "0")
}