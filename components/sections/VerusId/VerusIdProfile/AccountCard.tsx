import { useState, useEffect, useContext } from 'react'
import { AccountObjects } from '@/lib/VerusIdProfile/ProfileTypes'
import {
  StyledServiceCard,
  StyledAccountContainer,
  // TooltipBox,
  // TooltipBoxContainer,
} from './ProfileStyles'
import { Img } from '@/components/elements'
import { VerusIDContext } from '@/lib/Contexts'
import * as FontAwesome from 'react-icons/fa'
import AccountCardDropDown from './AccountCardDropDown'

const AccountCard = ({
  type,
  account,
}: {
  type: string
  account: AccountObjects
}) => {
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
  let StatusIcon = FontAwesome['FaCog']
  const context = useContext(VerusIDContext)
  const verusUser = context.id
  const dataFetch = {
    user: verusUser,
    type: 'blockchain',
    ...account,
  }
  const [data, setData] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    fetch('/api/verificationCheck', {
      method: 'POST',
      body: JSON.stringify(dataFetch),
    })
      .then((res) => res.json())
      .then((result) => setData(result))
    return () => {
      setData(null)
    }
  }, [])

  if (data) {
    switch (data?.overall.valid) {
      case 'true':
        StatusIcon = FontAwesome['FaUserCheck']
        break
      case 'false':
        StatusIcon = FontAwesome['FaExclamationTriangle']
        break
      default:
        StatusIcon = FontAwesome['FaCog']
    }
  }
  const [show, setShow] = useState(false)
  return (
    <StyledAccountContainer>
      <StyledServiceCard
        status={data?.overall.valid}
        onClick={() => setShow(!show)}
      >
        {image && <Img name={image} className="logo" />}{' '}
        <p>{account.address}</p>
        <StatusIcon className="status" />
        {/* <TooltipBoxContainer>
        <TooltipBox classname="tooltip">test</TooltipBox>
      </TooltipBoxContainer> */}
      </StyledServiceCard>
      {data && (
        <AccountCardDropDown data={{ ...account, ...data }} show={show} />
      )}
    </StyledAccountContainer>
  )
}

export default AccountCard
