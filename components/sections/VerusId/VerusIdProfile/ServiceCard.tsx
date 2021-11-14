import { useState, useContext } from 'react'
import * as FontAwesome from 'react-icons/fa'
import useSWR from 'swr'
import { AccountObjects } from '@/lib/VerusIdProfile/ProfileTypes'
import {
  StyledServiceCard,
  // ServiceCardDropDown,
  // ServiceCardDropDownArea,
  // TooltipBox,
  // TooltipBoxContainer,
} from './ProfileStyles'
import { ObjectFinder, capitalizeFirstLetter } from './Helper'
import { VerusIDContext } from '@/lib/Contexts'
// import { DropDownContainer } from './ProfileStyles'

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json())
// TODO: work on proof card

const ServiceCard = ({
  type,
  serviceAccount,
}: {
  type: string
  serviceAccount: AccountObjects
}) => {
  //TODO: bring in user using useContext
  let Icon: any
  let StatusIcon = FontAwesome['FaCog']
  if (type === 'website') {
    Icon = FontAwesome['FaGlobeAmericas']
  } else {
    Icon = ObjectFinder(`Fa${capitalizeFirstLetter(type)}`)(FontAwesome)
  }

  const context = useContext(VerusIDContext)
  const verusUser = context.id

  const { data } = useSWR(
    `/api/verificationCheck?query=${JSON.stringify({
      user: verusUser,
      ...serviceAccount,
    })}`,
    fetcher
  )
  if (data) {
    // console.log('data', data)
    switch (data?.valid) {
      case 'true':
        StatusIcon = FontAwesome['FaUserCheck']
        break
      case 'false':
        StatusIcon = FontAwesome['FaExclamationTriangle']
        break
      default:
        StatusIcon = FontAwesome['FaCog']
    }
    // console.log(StatusIcon)
  }

  const [show, setShow] = useState(false)

  return (
    <StyledServiceCard status={data?.valid} onClick={() => setShow(!show)}>
      <Icon size="1.5em" className="logo" />
      {serviceAccount.accountname ||
        serviceAccount.accountid ||
        serviceAccount.name}
      <StatusIcon className="status" />
      {/* <TooltipBoxContainer>
        <TooltipBox classname="tooltip">test</TooltipBox>
      </TooltipBoxContainer> */}
      {/* <DropDownContainer>
        <ServiceCardDropDown show={show}>
          <ServiceCardDropDownArea>test</ServiceCardDropDownArea>
        </ServiceCardDropDown>
      </DropDownContainer> */}
    </StyledServiceCard>
  )
}

export default ServiceCard
