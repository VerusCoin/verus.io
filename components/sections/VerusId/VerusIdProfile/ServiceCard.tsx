import { useState, useEffect, useContext } from 'react'
import * as FontAwesome from 'react-icons/fa'
// import useSWR from 'swr'
import { AccountObjects } from '@/lib/VerusIdProfile/ProfileTypes'
import {
  StyledServiceCard,
  StyledAccountContainer,
  // TooltipBox,
  // TooltipBoxContainer,
} from './ProfileStyles'
import { ObjectFinder, capitalizeFirstLetter } from './Helper'
import { VerusIDContext } from '@/lib/Contexts'
import ServiceCardDropDown from './ServiceCardDropDown'
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
  const dataFetch = {
    user: verusUser,
    ...serviceAccount,
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
  }

  const [show, setShow] = useState(false)
  let shortUrl: string | string[] =
    serviceAccount.i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw.toString()
  try {
    let domain: URL | string = new URL(shortUrl)
    domain = domain.hostname
    shortUrl = domain.toString()
    shortUrl = shortUrl.split('.')
    shortUrl =
      '(' +
      shortUrl[shortUrl.length - 2] +
      '.' +
      shortUrl[shortUrl.length - 1] +
      ')'
  } catch {
    shortUrl = ''
  }

  return (
    <StyledAccountContainer>
      <StyledServiceCard status={data?.valid} onClick={() => setShow(!show)}>
        <Icon size="1.5em" className="logo" />
        <p>
          <>
            {serviceAccount.accountname ||
              serviceAccount.accountid ||
              serviceAccount.name}{' '}
            {shortUrl}
          </>
        </p>
        <StatusIcon className="status" />
        {/* <TooltipBoxContainer>
        <TooltipBox classname="tooltip">test</TooltipBox>
      </TooltipBoxContainer> */}
      </StyledServiceCard>
      <ServiceCardDropDown
        show={show}
        data={{ ...data, ...serviceAccount, type: type }}
      />
    </StyledAccountContainer>
  )
}

export default ServiceCard
