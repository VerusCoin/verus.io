import type { NextApiRequest, NextApiResponse } from 'next'
import Arweave from 'arweave'
import {
  BuildVdxfid,
  CreateProfile,
  FetchVerusId,
  FetchArweaveProfile,
  reverseHex,
} from '@/helpers/VerusIdProfile'
import { PublicProfileProps } from '@/helpers/VerusIdProfile/ProfileTypes'

const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
}
const arweave = Arweave.init(arConfig)

interface Query {
  [key: string]: string | string[]
}

interface Result {
  result: Record<string, any> | null
  error: Record<string, any> | null
  profileJSON?: PublicProfileProps
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const IDVariable: Query = req.query
  if (IDVariable.id.slice(-1) != '@') {
    IDVariable.id = IDVariable.id + '@'
  }

  const result = await FetchVerusId(IDVariable)
  let data: Result = { ...result }

  if (result.result) {
    //data has returned with an identity check
    const contentMap = result.result.identity.contentmap
    const VdxfidList = await BuildVdxfid()

    if (VdxfidList) {
      //check for arweave
      const arweaveVdxfid = VdxfidList.arweave.hash160result
      const arweaveTxId = await FetchArweaveProfile(
        contentMap[arweaveVdxfid] || contentMap[reverseHex(arweaveVdxfid)],
        VdxfidList.profilePublic.vdxfid
      )

      if (arweaveTxId) {
        const arweaveJSON = await arweave.transactions
          .getData(arweaveTxId, { decode: true, string: true })
          .then((res) => JSON.parse(res.toString()))
        if (arweaveJSON) {
          //we have profile json lets organize it so it can be presented.
          const profileJSON: PublicProfileProps = await CreateProfile(
            arweaveJSON[VdxfidList.profilePublic.vdxfid],
            VdxfidList
          )
          data = { ...data, profileJSON: profileJSON }
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
