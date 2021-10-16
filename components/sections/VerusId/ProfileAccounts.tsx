import styled from 'styled-components'
import { Img } from '@/components/elements'
import { fontFam, bgColor } from '@/styles/helpers'
import { AccountObjects } from '@/helpers/VerusIdProfile/ProfileTypes'
import * as FontAwesome from 'react-icons/fa'

const StyledContainer = styled.div`
  margin: 12px 0;
  padding: 0 32px;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
`
// const StyledLabel = styled.div`
//   width: 100%;
//   padding: 0 0 8px;
// `

const StyledSocial = styled.div<any>`
  ${bgColor('#F3F3F3')}
  border: solid 1px;
  margin: 5px 10px;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${fontFam('')}
  font-size:16px;
  p {
    ${fontFam('')}
    padding: 0;
    font-weight: bold;
    margin: 0;
  }
  svg {
    fill: ${(props) => props.theme.colors.blue.primary};
    margin-right: 10px;
  }
  img {
    height: 25px;
    margin-right: 10px;
  }
`

const ObjectFinder =
  (key: string) =>
  (obj: Record<string, unknown>): any =>
    obj[key]

function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1)
}
//TODO: need to clean up code
const ProfileAccounts = ({
  profileAccounts,
}: {
  profileAccounts: Record<string, AccountObjects>
}) => {
  return (
    <>
      <StyledContainer>
        {/* <StyledLabel>
          <DefaultHeader as="h5" align="left">
            Service Accounts
          </DefaultHeader>
        </StyledLabel> */}
        {Object.keys(profileAccounts.online).map(
          (element: string, index: number) => {
            const Icon = ObjectFinder(`Fa${capitalizeFirstLetter(element)}`)(
              FontAwesome
            )

            let accountName: any = ObjectFinder(element)(profileAccounts.online)
            if (accountName.accountname) {
              accountName = accountName.accountname
            } else {
              accountName = accountName.accountid
            }

            return (
              <StyledSocial key={index}>
                <Icon size="1.5em" />
                <p>{accountName}</p>
              </StyledSocial>
            )
          }
        )}
      </StyledContainer>
      <StyledContainer>
        {/* <StyledLabel>
          <DefaultHeader as="h5" align="left">
            Blockchain Accounts
          </DefaultHeader>
        </StyledLabel> */}
        {Object.keys(profileAccounts.crypto.identities).map(
          (element, index) => {
            return (
              <StyledSocial key={index}>
                {element === 'vrsc' && <Img name="verus-logo" />}
                <p>
                  {
                    ObjectFinder(element)(profileAccounts.crypto.identities)
                      .address
                  }
                </p>
              </StyledSocial>
            )
          }
        )}
        {Object.keys(profileAccounts.crypto.addresses).map((element, index) => {
          let image
          switch (element) {
            case 'vrsc':
              image = 'verus-logo'
              break
            case 'eth':
              image = 'ethereum-logo'
              break
            case 'btc':
              image = 'bitcoin-logo'
              break
            default:
              image = element
          }

          return (
            <StyledSocial key={index}>
              <Img name={image} />
              <p>
                {
                  ObjectFinder(element)(profileAccounts.crypto.addresses)
                    .address
                }
              </p>
            </StyledSocial>
          )
        })}
      </StyledContainer>
    </>
  )
}

export default ProfileAccounts
