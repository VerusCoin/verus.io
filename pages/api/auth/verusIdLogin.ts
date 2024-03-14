import LoginConsentRequest from '@/lib/VerusIdLogin/LoginConsentRequest'

import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidV4 } from 'uuid'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { redir, hook } = req.query
  const session = uuidV4()
  const redirectLogin = await LoginConsentRequest({
    callback: redir as string,
    session,
  })
  const webhookLogin = await LoginConsentRequest({
    callback: hook as string,
    session,
    type: 'WEBHOOK',
  })
  // const data = await LoginConsentRequest(callback)
  // res.json({ data, session })
  res.status(200).json({ redir: redirectLogin, hook: webhookLogin })
}
