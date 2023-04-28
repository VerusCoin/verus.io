// import LoginConsentRequest from '@/lib/VerusIdLogin/LoginConsentRequest'
import LoginConsentResponse from '@/lib/VerusIdLogin/LoginConsentResponse'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as {
    session: string
    i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe: string
  }
  const verification = await LoginConsentResponse(
    query.i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe
  )
  res.json(verification)
}
