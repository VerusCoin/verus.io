import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string | string[]
}
const fetchID = async (query: Query) => {
  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getidentity`

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identity: query.id }),
    })
    const data = await result.json()

    if (data.identity) {
      return { result: data, error: null }
    } else {
      return {
        result: null,
        error: { error: data.error, message: data.error_detail },
      }
    }

    return { result: data, error: null }
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }
}
const fetchID_Backup = async (query: Query) => {
  const url = encodeURI(
    `${process.env.NEXT_PUBLIC_VERUSTOOL_BACKUP}/getid/?id=${query.id}`
  )
  try {
    const result = await fetch(url)
    const data = await result.json()
    return data
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check for vanity '@' before doing fetch
  const IDvariable = req.query

  if (IDvariable.id.slice(-1) != '@') {
    IDvariable.id = IDvariable.id + '@'
  }
  let result = await fetchID(IDvariable)

  if (result.error?.message === 'Invalid request') {
    result = await fetchID_Backup(IDvariable)
  }

  if (!result.error) {
    res.statusCode = 200
    res.json(result)
  } else {
    res.statusCode = 200
    res.json(result)
  }
}
