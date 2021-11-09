import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchMessage } from './verusSignatureMessage'
import { isValidUrl, verusProof } from '@/lib/VerusIdProfile/Validators'
import { BuildVdxfid } from '@/lib/VerusIdProfile'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = req.query?.query

  let result: Record<string, boolean | string> = { valid: 'error' }
  if (data) {
    data = JSON.parse(data)
    let user = data.user
    user = user.toLowerCase()
    if (user.slice(-1) != '@') {
      user = user + '@'
    }
    // i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw
    const vdxfID = await BuildVdxfid()
    const verifyKey = data[vdxfID.controller.vdxfid]

    if (isValidUrl(verifyKey)) {
      let verifiedData: any = await fetch(verifyKey).then((res) => res.text())
      // console.log('check-user', user)
      verifiedData = verusProof(verifiedData)
      if (verifiedData) {
        //   Message: values?.message,
        // Identity: values?.verusId,
        // Signature: values?.signature,
        // console.log(user)
        const validate = await FetchMessage({
          ...verifiedData,
          Identity: user,
        })
        // console.log(verifiedData)
        // console.log(validate.valid)

        result = validate
      } else {
        result.valid = 'error'
      }
    }
  }

  res.json(result)
}
