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
import { isValidUrl, verusWebProof } from '@/lib/VerusIdProfile/Validators'
import { ProofsJSON } from '@/data/vdxfid'

// TODO: work on proof card
type DataFetch = {
  user: string
} & AccountObjects
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
  const dataFetch: DataFetch = {
    user: verusUser,
    ...serviceAccount,
  }

  const [data, setData] = useState<Record<string, any> | null>(null)
  useEffect(() => {
    const verifyKey = dataFetch[ProofsJSON.controller.vdxfid]

    const validateService = async (verifyKey: string) => {
      let result: any = { valid: 'error' }
      let verifiedData: any
      if (verifyKey.match('reddit')) {
        //reddit specific
        try {
          verifiedData = await fetch(verifyKey + '.json')
            .then((res) => res.json())
            .then((data) => data[1].data.children[0].data.body)
        } catch (error) {
          setData(result)
          verifiedData = undefined
        }
      } else if (verifyKey.match('twitter')) {
        try {
          verifiedData = await fetch(verifyKey).then((res) => res.text())
        } catch (error) {
          setData(result)
          verifiedData = undefined
        }
      } else {
        fetch('/api/verificationCheck', {
          method: 'POST',
          body: JSON.stringify(dataFetch),
        })
          .then((res) => res.json())
          .then((result) => setData(result))
        return
      }

      if (verifiedData) {
        verifiedData = verusWebProof(verifiedData)
        if (verifiedData) {
          const validate = await fetch('/api/verusSignatureMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...verifiedData, Identity: dataFetch.user }),
          }).then((res) => res.json())

          result = validate
        } else {
          result.valid = 'error'
        }
      } else {
        result.valid = 'error'
      }

      setData(result)
    }
    if (isValidUrl(verifyKey)) {
      //we can force verifyKey is a string
      validateService(verifyKey as unknown as string)
    }
    return () => {
      setData(null)
    }
  }, [])

  // useEffect(;() => {

  //   // fetch('/api/verificationCheck', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(dataFetch),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((result) => setData(result))
  //   // return () => {
  //   //   setData(null)
  //   // }
  // }, [])
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
  let shortUrl: string | string[]
  if (serviceAccount.i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw) {
    shortUrl = serviceAccount?.i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw.toString()
  } else {
    shortUrl = ''
  }

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
