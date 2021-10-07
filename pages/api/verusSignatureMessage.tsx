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

  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_BACKUP}/verifymessage/?message=${message}&signer=${signer}&signature=${query.Signature}`
  // const url1 = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/verify`
  try {
    const result = await fetch(url)
    const data = await result.json()

    // result = await fetch(url1, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     message: query.Message,
    //     signer: query.Identity,
    //     signature: query.Signature,
    //   }),
    // }).then((res) => res.json())
    // console.log('url1', result)
    // console.log(data)
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
