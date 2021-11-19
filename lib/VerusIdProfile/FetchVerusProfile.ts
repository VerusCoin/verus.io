import Arweave from 'arweave'
import {
  CreateProfile,
  FetchArweaveProfile,
  reverseHex,
} from '@/lib/VerusIdProfile'
import { PublicProfileProps } from './ProfileTypes'
import { CollectionsJSON, IdentityJSON } from '@/data/vdxfid'

const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
}
const arweave = Arweave.init(arConfig)

const FetchVerusProfile = async (content: Record<string, any>) => {
  //check for arweave
  const arweaveVdxfid = CollectionsJSON.arweave.hash160result
  const arweaveTxId = await FetchArweaveProfile(
    content[arweaveVdxfid] || content[reverseHex(arweaveVdxfid)],
    IdentityJSON.public.vdxfid
  )
  if (arweaveTxId) {
    const arweaveJSON = await arweave.transactions
      .getData(arweaveTxId, { decode: true, string: true })
      .then((res) => JSON.parse(res.toString()))

    if (arweaveJSON) {
      //we have profile json lets organize it so it can be presented.

      const profileJSON: PublicProfileProps = await CreateProfile(
        arweaveJSON[IdentityJSON.public.vdxfid]
      )

      return profileJSON
    }
  } else {
    return null
  }
}

export default FetchVerusProfile
