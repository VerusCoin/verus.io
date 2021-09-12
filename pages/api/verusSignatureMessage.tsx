// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string
}
const FetchMessage = async (query: Query) => {
  const message = encodeURI(query.Message)
  const signer = encodeURI(query.Identity)
  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verifymessage/?message=${message}&signer=${signer}&signature=${query.Signature}`
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
  const result = await FetchMessage(req.body)

  if (!result.error) {
    res.json(result)
  } else {
    res.statusCode = 200
    res.json(result)
  }
}
