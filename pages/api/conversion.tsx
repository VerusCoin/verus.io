import type { NextApiRequest, NextApiResponse } from 'next'
import FetchConversion from '@/lib/fetchCoversion'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query
  result = await FetchConversion()

  res.statusCode = 200
  res.json(result)
}
