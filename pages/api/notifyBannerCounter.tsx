import type { NextApiRequest, NextApiResponse } from 'next'
import FetchCounter from '@/lib/FetchCounter'
// import { getVerusStats } from './verusNetworkStats'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query
  result = await FetchCounter()
  // console.log('result', result)

  res.statusCode = 200
  res.json(result)
}
