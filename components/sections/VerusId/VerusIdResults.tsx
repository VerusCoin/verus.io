import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { Button, DefaultHeader } from '@/components/elements'
import { fontFam, fontSize } from '@/styles/helpers'
import { useContext } from 'react'
import { VerusIDContext } from '@/lib/Contexts'

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  ${fontFam('')}
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  div.row {
    border-bottom: solid 1px black;
  }
`
const StyledLabel = styled.div`
  border-top: solid 2px;
  border-bottom: solid 2px;
  width: 100%;
`

const StyledResultsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.spaces.xs};
  justify-content: space-between;
`
const StyledResultLeft = styled.div`
  ${fontSize('menu')}
  text-align: left;
  padding: 6px;
`
const StyledResultRight = styled.div`
  ${fontSize('xxs')}
  text-align: right;
  word-break: break-all;
  padding: 6px;
`

const VerusIdResults = ({ onClick }: { onClick: () => void }) => {
  const verusIDResults = useContext(VerusIDContext)
  const verusID = verusIDResults.result.identity
  const { t } = useTranslation('verusid')
  return (
    <StyledData>
      <Button onClick={onClick} color="#3165d4" margin="50px 0">
        {t('another')}
      </Button>
      <StyledLabel>
        <DefaultHeader as="h5">VerusID identity information</DefaultHeader>
      </StyledLabel>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('identity')}</StyledResultLeft>
        <StyledResultRight>{verusID.identityaddress}</StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('revocation')}</StyledResultLeft>
        <StyledResultRight>
          {verusID.revocationauthority === verusID.identityaddress
            ? t('self')
            : verusID.revocationauthority}
        </StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('recovery')}</StyledResultLeft>
        <StyledResultRight>
          {verusID.recoveryauthority === verusID.identityaddress
            ? t('self')
            : verusID.recoveryauthority}
        </StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('private')}</StyledResultLeft>
        <StyledResultRight>{verusID.privateaddress}</StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow>
        <StyledResultLeft>{t('primary')}</StyledResultLeft>
        <StyledResultRight>
          {verusID.primaryaddresses.map((address: string) => {
            return <p key={address}>{address}</p>
          })}
        </StyledResultRight>
      </StyledResultsRow>
    </StyledData>
  )
}

export default VerusIdResults
