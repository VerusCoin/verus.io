import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchMessage } from './verusSignatureMessage'
import { isValidUrl, verusProof } from '@/lib/VerusIdProfile/Validators'
import { BuildVdxfid } from '@/lib/VerusIdProfile'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = req.query?.query
  const result: Record<string, boolean | string> = { valid: false }
  if (data) {
    data = JSON.parse(data)
    let user = data.user
    user = user.toLowerCase()
    user = user + '@'
    // i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw
    const vdxfID = await BuildVdxfid()
    const verifyKey = data[vdxfID.controller.vdxfid]

    if (isValidUrl(verifyKey)) {
      try {
        let verifiedData: any = await fetch(verifyKey).then((res) => res.text())

        verifiedData = verusProof(verifiedData)
        if (verifiedData) {
          //   Message: values?.message,
          // Identity: values?.verusId,
          // Signature: values?.signature,

          const validate = await FetchMessage({
            ...verifiedData,
            Identity: user,
          })

          if (validate.valid) {
            result.valid = 'valid'
          } else {
            result.valid = 'invalid'
          }
        } else {
          result.valid = 'error'
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
  res.statusCode = 200
  res.json(result)
}
