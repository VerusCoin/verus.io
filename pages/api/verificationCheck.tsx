import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchMessage } from './verusSignatureMessage'
import {
  isValidUrl,
  verusWebProof,
  verusBlockchainProof,
} from '@/lib/VerusIdProfile/Validators'
import { ProofsJSON } from '@/data/vdxfid'
import Web3 from 'web3'
import bitcoinMessage from 'bitcoinjs-message'
// https://docs.linkpool.io/docs/public_rpc
const web3 = new Web3(
  Web3.givenProvider || 'https://main-light.eth.linkpool.io/'
)

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
      let verifiedData: any
      if (verifyKey.match('reddit')) {
        //different function for reddit
        verifiedData = await fetch(verifyKey + '.json')
          .then((res) => res.json())
          .then((data) => data[1].data.children[0].data.body)
      } else {
        verifiedData = await fetch(verifyKey).then((res) => res.text())
      }
      if (verifiedData) {
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
        result.valid = 'error'
      }
      
    } else if (data.type === 'blockchain') {
      const proofChecks: any = verusBlockchainProof(verifyKey)
      //we have two keys to check: 1) against address; and 2) against profile
      let validate = await FetchMessage({
        ...proofChecks.key1,
        Identity: user,
      })

      proofChecks.key1 = validate
      //need to check which blockchain
      const chain = data.qualifiedname.split('.')[2]

      let valid: string | boolean | undefined = undefined
      switch (chain) {
        case 'vrsc':
          validate = await FetchMessage({
            ...proofChecks.key2,
            Identity: data.address,
          })

          break
        case 'eth':
          valid
          if (web3) {
            try {
              valid = web3.eth.accounts.recover(
                proofChecks.key2.Message,
                proofChecks.key2.Signature
              )
            } catch {
              valid = undefined
            }
            if (valid === data.address) {
              validate = { valid: 'true' }
            } else {
              validate = { valid: 'false' }
            }
          } else {
            validate = { valid: 'error' }
          }

          valid = undefined
          break
        case 'btc':
          try {
            valid = bitcoinMessage.verify(
              proofChecks.key2.Message,
              data.address,
              proofChecks.key2.Signature,
              undefined,
              true
            )

            if (valid) {
              validate = { valid: 'true' }
            } else {
              validate = { valid: 'false' }
            }
          } catch {
            validate = { valid: 'error' }
          }
          valid = undefined
          break
        default:
          validate = { valid: 'error' }
      }

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
    } else {
      result.valid = 'error'
    }
  }

  res.json(result)
}
