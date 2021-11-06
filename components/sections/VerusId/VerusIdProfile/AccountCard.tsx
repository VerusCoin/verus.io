import { AccountObjects } from '@/helpers/VerusIdProfile/ProfileTypes'
import { StyledServiceCard } from './ProfileStyles'
import { Img } from '@/components/elements'

const AccountCard = ({
  type,
  account,
}: {
  type: string
  account: AccountObjects
}) => {
  //TODO: bring in useContext for user info
  // console.log('type', type)
  // console.log('user', verusUser)
  // console.log('account', account)
  //TODO: get full list of icons for images
  let image: string | null
  switch (type) {
    case 'identity':
    case 'vrsc':
      image = 'verus-logo'
      break
    case 'btc':
      image = 'bitcoin-logo'
      break
    case 'eth':
      image = 'ethereum-logo'
      break
    default:
      image = null
  }

  return (
    <StyledServiceCard>
      {image && <Img name={image} className="logo" />} {account.address}
    </StyledServiceCard>
  )
}

export default AccountCard
