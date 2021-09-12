import type { NextApiRequest, NextApiResponse } from 'next'
interface Query {
  [key: string]: string | string[]
}
const fetchID = async (query: Query) => {
  const url = encodeURI(
    `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getid/?id=${query.id}`
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
  const result = await fetchID(IDvariable)
  if (!result.error) {
    res.statusCode = 200
    res.json(result)
  } else {
    res.statusCode = 200
    res.json(result)
  }
}
