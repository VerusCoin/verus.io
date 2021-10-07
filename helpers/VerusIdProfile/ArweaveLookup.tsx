import Arweave from 'arweave'
import CryptoJS from 'crypto-js'
import cache from 'memory-cache'
import { cacheProfiles } from './ProfileTypes'

import { isHex, isBase64url } from './TypeTests'
const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
}

export const arweave = Arweave.init(arConfig)

const ArweaveLookup = async (address: string) => {
  if (isHex(address)) {
    address = CryptoJS.enc.Hex.parse(address)
      .toString(CryptoJS.enc.Base64)
      .replace('+', '-')
      .replace('/', '_')
      .replace(/=+$/, '')
    if (isBase64url(address)) {
      const publicProfileVdxfid = cache.get(cacheProfiles).profile.public.vdxfid

      const queryStr = `query {
        transactions(
          first: 1
          sort: HEIGHT_DESC
          owners: ["${address}"]
          tags: { name: "${publicProfileVdxfid}", values: ["1"] }
        ) {
          edges {
            node {
              id
              tags {
                name
                value
              }
            }
          }
        }
      }`
      const result = await fetch('https://arweave.net/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ query: queryStr }),
      }).then((res) => res.json())
      if (result?.data?.transactions?.edges[0]?.node?.id) {
        const txId = result.data.transactions.edges[0].node.id
        // let data = await arweave.transactions
        //   .getData(txId, { decode: true, string: true })
        //   .then((res) => JSON.parse(res))
        let data: any = await arweave.transactions.getData(txId, {
          decode: true,
          string: true,
        })

        data = JSON.parse(data)

        if (data) {
          return data
        } else {
          return false
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

// export const ArweaveData = async (txId) => {
//   const result = await arweave.transactions.getData(txId, {
//     decode: true,
//     string: true,
//   })
//   // result = await serialize(result)

//   return result
// }

export default ArweaveLookup
