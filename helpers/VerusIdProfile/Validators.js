import CryptoJS from 'crypto-js'

const hexCharsregex = /[0-9A-Fa-f]{6}/g
const base64urlregex = /^[A-Za-z0-9_-]+$/

export const isHex = (hex) => {
  const r = hexCharsregex.test(hex)
  hexCharsregex.lastIndex = 0
  return r
}

export const isBase64url = (str) => {
  const r = base64urlregex.test(str)
  base64urlregex.lastIndex = 0
  return r
}

export const reverseHex = (hex) => {
  return hex.match(/../g).reverse().join('')
}

export const HexToBase64 = (hex) => {
  if (isHex(hex)) {
    return CryptoJS.enc.Hex.parse(hex)
      .toString(CryptoJS.enc.Base64)
      .replace('+', '-')
      .replace('/', '_')
      .replace(/=+$/, '')
  }
}
