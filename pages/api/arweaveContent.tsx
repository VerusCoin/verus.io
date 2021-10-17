import type { NextApiRequest, NextApiResponse } from 'next'
import Arweave from 'arweave'
import { serialize } from 'next-mdx-remote/serialize'

// interface Query {
//   [key: string]: string | string[]
// }
const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
  logging: false, //disable logging
}
const arweave = Arweave.init(arConfig)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, type } = req.query
  try {
    const data = await arweave.transactions.getData(id.toString(), {
      decode: true,
      string: true,
    })
    if (type === 'post') {
      const result = await serialize(data.toString())
      res.statusCode = 200
      res.json(result)
    } else {
      res.statusCode = 200
      return data
    }
  } catch (error) {
    return error
  }
}
