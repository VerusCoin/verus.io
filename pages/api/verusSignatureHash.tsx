// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string
}
const FetchHash = async (query: Query) => {
  const signer = encodeURI(query.Identity)
  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verifyhash/?hash=${query['Hash']}&signer=${signer}&signature=${query['Signature']}`
  try {
    const result = await fetch(url)
    const data = await result.json()
    return data
  } catch (error) {
    return {
      error: -5,
      error_text: 'Currently having network issue. Try again later',
    }
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await FetchHash(req.body)
  if (!result.error) {
    res.json(result)
  } else {
    res.statusCode = 200
    res.json(result)
  }
}
