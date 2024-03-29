import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchVerusId, FetchVerusProfile } from '@/lib/VerusIdProfile'
import { VerusResult } from '@/lib/VerusIdProfile/ProfileTypes'
import { IdQuery } from '@/types/general'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const IDVariable = req.query as IdQuery
  if (IDVariable.id.slice(-1) != '@') {
    IDVariable.id = IDVariable.id + '@'
  }

  const result = await FetchVerusId(IDVariable)
  let data: VerusResult = { ...result }

  if (result.result) {
    //data has returned with an identity check
    const contentMap = result.result.identity.contentmap
    const profileJSON = await FetchVerusProfile(contentMap)
    if (profileJSON) {
      data = { ...data, profileJSON: profileJSON }
    }
  }

  if (!data.error) {
    res.statusCode = 200
    res.json(data)
  } else {
    res.statusCode = 200
    res.json(data)
  }
}
