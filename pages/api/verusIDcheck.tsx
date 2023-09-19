import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchVerusId } from '@/lib/VerusIdProfile'
import { IdQuery } from '@/types/general'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check for vanity '@' before doing fetch

  const IDvariable = req.query as IdQuery
  if (IDvariable.id.slice(-1) != '@') {
    IDvariable.id = IDvariable.id + '@'
  }
  
  let result = await FetchVerusId(IDvariable)
  if (result.result) {
    result = { result: IDvariable, error: null }
  }

  res.statusCode = 200
  res.json(result)
}
