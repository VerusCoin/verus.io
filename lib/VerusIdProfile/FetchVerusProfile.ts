import Arweave from 'arweave'
import {
  BuildVdxfid,
  CreateProfile,
  FetchArweaveProfile,
  reverseHex,
} from '@/lib/verusIdProfile'
import { PublicProfileProps } from './ProfileTypes'

const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
}
const arweave = Arweave.init(arConfig)

const FetchVerusProfile = async (content: Record<string, any>) => {
  const VdxfidList = await BuildVdxfid()
  if (VdxfidList) {
    //check for arweave
    const arweaveVdxfid = VdxfidList.arweave.hash160result
    const arweaveTxId = await FetchArweaveProfile(
      content[arweaveVdxfid] || content[reverseHex(arweaveVdxfid)],
      VdxfidList.profilePublic.vdxfid
    )
    if (arweaveTxId) {
      const arweaveJSON = await arweave.transactions
        .getData(arweaveTxId, { decode: true, string: true })
        .then((res) => JSON.parse(res.toString()))
      // console.log(arweaveJSON)
      if (arweaveJSON) {
        //we have profile json lets organize it so it can be presented.
        const profileJSON: PublicProfileProps = await CreateProfile(
          arweaveJSON[VdxfidList.profilePublic.vdxfid],
          VdxfidList
        )
        // console.log(profileJSON)
        return profileJSON
      }
    } else {
      return null
    }
  }
}

export default FetchVerusProfile
