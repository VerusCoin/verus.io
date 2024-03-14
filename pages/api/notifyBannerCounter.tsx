import type { NextApiRequest, NextApiResponse } from 'next'
import FetchCounter from '@/lib/FetchCounter'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result: any = req.query
  result = await FetchCounter()

  res.statusCode = 200
  res.json(result)
}
