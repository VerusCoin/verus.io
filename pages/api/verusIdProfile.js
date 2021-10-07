// import type { NextApiRequest, NextApiResponse } from 'next'
import {
  BuildVdxfidCache,
  CreateProfileJSON,
  FetchVerusId,
  reverseHex,
} from '@/helpers/VerusIdProfile'
import ArweaveLookup from '@/helpers/VerusIdProfile/ArweaveLookup'
// TODO: need to see if can be converted to Typescript
export default async (req, res) => {
  const IDVariable = req.query
  if (IDVariable.id.slice(-1) != '@') {
    IDVariable.id = IDVariable.id + '@'
  }
  const result = await FetchVerusId(IDVariable)
  let data = { result: null, error: null }
  //data has returned with an identity check
  if (result.result) {
    const contentMap = result.result.identity.contentmap
    const VdxfidList = await BuildVdxfidCache()
    data = { ...result }

    if (VdxfidList) {
      //check for arweave
      const arweave = VdxfidList.profilesFrom.arweave.hash160result
      let profileJSON = false
      if (contentMap[arweave] || contentMap[reverseHex(arweave)]) {
        profileJSON = await ArweaveLookup(
          contentMap[arweave] || contentMap[reverseHex(arweave)]
        )
      }
      if (profileJSON) {
        //we have profile json lets organize it so it can be presented.
        profileJSON = CreateProfileJSON(
          profileJSON[VdxfidList?.profile?.public?.vdxfid],
          VdxfidList
        )
        data = {
          ...result,
          profileJSON: profileJSON,
          vdxfidList: VdxfidList,
        }
      }
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
