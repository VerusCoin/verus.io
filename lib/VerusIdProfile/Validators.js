import CryptoJS from 'crypto-js'
const he = require('he')
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
  if (hex) {
    const hexDecoded = CryptoJS.enc.Hex.parse(hex)
    const base64 = CryptoJS.enc.Base64.stringify(hexDecoded)
    const base64url = base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+/g, '')
    return base64url
  } else {
    return false
  }
}

export const isValidUrl = (url) => {
  try {
    new URL(url)
  } catch {
    return false
  }
  return true
}

const htmlStripRegex = /<[^>]+>/g
const verusProofMsgRegex =
  /(i[A-Za-z0-9]+) ([0-9]+): controller of ([^:]+) controls ([^:]+):([A-Za-z0-9/+=]+):?([A-Za-z0-9/+=]+)?/gim
// old: /(^|['"\n>;])i[A-Za-z0-9]+ [0-9]+: controller of VerusID .* controls .*:[A-Za-z0-9/+=:]+(\1|[<&\n])/g
// new: /(i[A-Za-z0-9]+) ([0-9]+): controller of ([^:]+) controls ([^:]+):([A-Za-z0-9/+=]+):?([A-Za-z0-9/+=]+)?/gim
const cleanupProofMsg = (msg) => {
  // unescape quotes
  msg = msg.replace(/\\"/g, '"').replace(/\\'/g, "'")
  // trim off extra start chars
  msg = msg.replace(/^['"\n ;>]/, '')
  // trim off extra end chars
  msg = msg.replace(/['"\n &<]$/, '')
  return msg
}

export const verusProof = (content) => {
  const proofs = content.match(verusProofMsgRegex)
  // console.log(proofs)
  if (proofs && Array.isArray(proofs)) {
    //filter out bad content
    // console.log(proofs)
    // let proof = proofs.filter((str) => {
    //   return str.indexOf('&quot;') === -1
    // })
    let proof = proofs[proofs.length - 1]
    proof = he.decode(cleanupProofMsg(proof.replace(htmlStripRegex, '')))
    const s = proof.split(':')
    let message = ''
    let signature = ''
    if (s.length > 2) {
      message = s[0] + ':' + s[1]
      signature = s[2]
    }

    const result = { Message: message, Signature: signature }
    return result
  }
  return false
}
