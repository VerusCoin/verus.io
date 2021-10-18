// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string
}
const FetchHash = async (query: Query) => {
  const endpoint = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verify`
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hash: query.Hash,
        signer: query.Identity,
        signature: query.Signature,
      }),
    }).then((res) => res.json())

    return result
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
