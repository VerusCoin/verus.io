import { HexToBase64, isBase64url } from './Validators.js'

const endpoint = 'https://arweave.net/graphql'

const FetchArweaveProfile = async (tag: string, publicVdxfid: string) => {
  const address = HexToBase64(tag)

  if (isBase64url(address)) {
    const queryStr = `query {
      transactions(
        first: 1
        sort: HEIGHT_DESC
        owners: ["${address}"]
        tags: { name: "${publicVdxfid}", values: ["1"] }
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
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: queryStr }),
    }).then((res) => res.json())

    if (result?.data?.transactions?.edges[0]?.node?.id) {
      const txId = result.data.transactions.edges[0].node.id
      return txId
    } else {
      return false
    }
  } else {
    return false
  }
}

export default FetchArweaveProfile
