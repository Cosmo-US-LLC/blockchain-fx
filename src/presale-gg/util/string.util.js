/**
 * @param {string} str
 * @param {number} numChars
 * @returns {string}
 */
export const truncateString = (str, numChars) => {
  if (str.length <= numChars) return str
  const charsLeft = Math.ceil((numChars - 3) / 2)
  const charsRight = Math.floor((numChars - 3) / 2)
  return str.substring(0, charsLeft) + "..." + str.substring(str.length - charsRight)
}