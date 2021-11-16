import { AccountDropDown, DropDownText } from './ProfileStyles'
import { DefaultText } from '@/components/elements'
import * as FontAwesome from 'react-icons/fa'
import AccountCardDropDownLink from './AccountCardDropDownLink'
const KeyImage = FontAwesome['FaKey']
const PassImage = FontAwesome['FaCheckCircle']
const FailImage = FontAwesome['FaExclamationCircle']

const DropDownTextArea = ({ text, valid }: { text: string; valid: string }) => {
  return (
    <DropDownText>
      <KeyImage className="key" /> <DefaultText>{text}:</DefaultText>
      {valid === 'true' ? (
        <>
          <PassImage className="pass" />
          <DefaultText className="pass">PASS</DefaultText>
        </>
      ) : valid === 'false' ? (
        <>
          <FailImage className="fail" />
          <DefaultText className="fail">FAIL</DefaultText>
        </>
      ) : null}
    </DropDownText>
  )
}

const AccountCardDropDown = ({ data, show }: { data: any; show: boolean }) => {
  return (
    <>
      <AccountDropDown show={show}>
        {data?.overall.valid === 'false' && (
          <DefaultText customColor="red">
            FAIL: Potential fraud / impersonation detected. The controller of
            this verus profile does not control the provided verus proof
            message.
          </DefaultText>
        )}
        <DropDownTextArea text="Signature 1" valid={data?.key1.valid} />
        <DropDownTextArea text="Signature 2" valid={data?.key2.valid} />

        {data && <AccountCardDropDownLink data={data} />}
      </AccountDropDown>
    </>
  )
}

export default AccountCardDropDown
