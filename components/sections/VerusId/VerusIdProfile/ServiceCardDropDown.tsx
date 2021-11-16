import {
  ServiceDropDown,
  DropDownText,
  DropDownLinkText,
} from './ProfileStyles'
import { DefaultText } from '@/components/elements'
import * as FontAwesome from 'react-icons/fa'

const KeyImage = FontAwesome['FaKey']
const PassImage = FontAwesome['FaCheckCircle']
const FailImage = FontAwesome['FaExclamationCircle']
const LinkIcon = FontAwesome['FaLink']
const ErrorIcon = FontAwesome['FaExclamationTriangle']
const ServiceCardDropDown = ({ data, show }: { data: any; show: boolean }) => {
  return (
    <>
      <ServiceDropDown show={show}>
        <DropDownText>
          <KeyImage className="key" /> <DefaultText>Signature:</DefaultText>
          {data?.valid === 'true' ? (
            <>
              <PassImage className="pass" />
              <DefaultText className="pass">PASS</DefaultText>
            </>
          ) : data.valid === 'false' ? (
            <>
              <FailImage className="fail" />
              <DefaultText className="fail">FAIL</DefaultText>
            </>
          ) : (
            <>
              <ErrorIcon className="error" />
              <DefaultText className="error">ERROR</DefaultText>
            </>
          )}
        </DropDownText>
        <DropDownLinkText
          href={data?.i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw}
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon />
          <DefaultText>
            {data?.type === 'website' ? 'Go to Website' : 'View Proof'}
          </DefaultText>
        </DropDownLinkText>
      </ServiceDropDown>
    </>
  )
}

export default ServiceCardDropDown
