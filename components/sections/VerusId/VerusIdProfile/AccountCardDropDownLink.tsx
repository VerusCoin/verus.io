import { DropDownLinkText } from './ProfileStyles'
import { DefaultText } from '@/components/elements'
import * as FontAwesome from 'react-icons/fa'
import { capitalizeFirstLetter } from './Helper'

const LinkIcon = FontAwesome['FaLink']
const AccountCardDropDownLink = ({ data }: { data: any }) => {
  let href = ''
  let linkString = ''
  let type: any
  let location: any
  if (data) {
    type = data.qualifiedname.split('.')
    location = type[type.length - 2]
    type = type[type.length - 1]
  }

  if (type !== 'address') {
    linkString = 'VerusID'
    href = `/verusid-lookup/${data.address}`
  } else {
    linkString = capitalizeFirstLetter(type) + ' on '
    switch (location) {
      case 'vrsc':
        linkString = linkString + 'Verus Explorer'
        href = `https://explorer.verus.io/address/${data.address}`
        break
      case 'eth':
        linkString = linkString + 'Ethereum Explorer'
        href = `https://etherscan.io/address/${data.address}`
        break
      case 'btc':
        linkString = linkString + 'Bitcoin Explorer'
        href = `https://www.blockchain.com/btc/address/${data.address}`
        break
      default:
        linkString
    }
  }
  return (
    <DropDownLinkText href={href} target="_blank" rel="noreferrer">
      <LinkIcon />
      <DefaultText>View {linkString}</DefaultText>
    </DropDownLinkText>
  )
}

export default AccountCardDropDownLink
