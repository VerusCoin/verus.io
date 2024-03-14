// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// import { VerusRPC } from '@/lib/VerusIdLogin/LoginConsentRequest'


import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string
}
const FetchHash = async (query: Query) => {
  const endpoint = `${process.env.VERUS_API}`
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method: 'verifyhash',
        params: [query.Identity, query.Signature, query.Hash],
      }),
    }).then((res) => res.json())

    return { valid: result?.result.toString() }
  } catch (error) {
    return {
      error: -5,
      error_text: 'Currently having network issue. Try again later',
    }
  }
  //test data
  // "hash" : "2b7fcb26fc38f34e1fd77e581716c1cd8b4eee1f0f01627dfd2ef56170a8e2f4"
  // "signature" : "AdZEGQABQSCMoIi7MwgJwB2fXqry1Q2jMu8rIQUiRq+zRezdyhomTGwO1aVZN048dPAJR7dTIDUoA+osY2mx1Kfw33S8D5R7"
  // "signer" : "Verus Coin Foundation Releases@"
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
