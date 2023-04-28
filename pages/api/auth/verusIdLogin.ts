import LoginConsentRequest from '@/lib/VerusIdLogin/LoginConsentRequest'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await LoginConsentRequest(
    req.query as { callback: string; session: string }
  )
  res.json(data)
}
