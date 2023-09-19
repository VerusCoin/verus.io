// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string
}

// import { VerusRPC } from '@/lib/VerusIdLogin/LoginConsentRequest'
//TODO: use VerusRPC not api

export const FetchMessage = async (query: Query) => {
  const endpoint = `${process.env.VERUS_API}`
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method: 'verifymessage',
        params: [query.Identity, query.Signature, query.Message],
      }),
    }).then((res) => res.json())

    return { valid: result?.result.toString() }
  } catch (error) {
    return {
      error: -5,
      error_text: 'Currently having network issue. Try again later',
    }
  }
  //test info
  // query.Id = 'jbsci@'
  // query.sig =
  //   'AXFhFAABQR9zKHrqydslEYVBAJnFh+7SCL5M1Df6as3zIJXjFUaAnRnYmg2EiQEiQcv/JN6OIBKgJZpXsWwA4c0pd87wdNwJ'
  // query.msg = 'This is the VerusVerifyAPI'

  // try {
  //   const result = await VerusRPC.verifyMessage(
  //     query.Identity,
  //     query.Signature,
  //     query.Message
  //   )
  //   console.log(query)
  //   console.log(result)
  //   return { valid: result }
  //   // return {
  //   //   error: -5,
  //   //   error_text: 'Currently having network issue. Try again later',
  //   // }
  // } catch (error) {
  //   return {
  //     error: -5,
  //     error_text: 'Currently having network issue. Try again later',
  //   }
  // }
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
