import type { NextApiRequest, NextApiResponse } from 'next'
import cache from 'memory-cache'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { session } = req.query

  let verification = {}
  try {
    verification = cache.get(session)
  } finally {
    res.status(200).json(verification)
  }
}
