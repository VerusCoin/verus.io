import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchMessage } from './verusSignatureMessage'
import {
  isValidUrl,
  verusWebProof,
  verusBlockchainProof,
} from '@/lib/VerusIdProfile/Validators'
import { ProofsJSON } from '@/data/vdxfid'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = req.query?.query || req.body

  let result: any = { valid: 'error' }
  if (data) {
    data = JSON.parse(data)
    let user = data.user
    user = user.toLowerCase()
    if (user.slice(-1) != '@') {
      user = user + '@'
    }
    // i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw
    const verifyKey = data[ProofsJSON.controller.vdxfid]
    if (isValidUrl(verifyKey)) {
      let verifiedData: any = await fetch(verifyKey).then((res) => res.text())

      verifiedData = verusWebProof(verifiedData)

      if (verifiedData) {
        const validate = await FetchMessage({
          ...verifiedData,
          Identity: user,
        })

        result = validate
      } else {
        result.valid = 'error'
      }
    } else {
      const proofChecks: any = verusBlockchainProof(verifyKey)
      //we have two keys to check: 1) against address; and 2) against profile
      let validate = await FetchMessage({
        ...proofChecks.key1,
        Identity: user,
      })

      proofChecks.key1 = validate
      validate = await FetchMessage({
        ...proofChecks.key2,
        Identity: data.address,
      })
      proofChecks.key2 = validate
      if (
        proofChecks.key1.valid === 'true' &&
        proofChecks.key2.valid === 'true'
      ) {
        proofChecks.overall = { valid: 'true' }
      } else {
        proofChecks.overall = { valid: 'false' }
      }

      result = proofChecks
    }
  }

  res.json(result)
}
