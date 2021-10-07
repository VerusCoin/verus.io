import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { Button, DefaultHeader } from '@/components/elements'
import { fontFam, fontSize } from '@/styles/helpers'

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

const VerusIdResults = ({
  verusIDresults,
  onClick,
}: {
  verusIDresults: any
  onClick: () => void
}) => {
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
        <StyledResultRight>{verusIDresults.identityaddress}</StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('revocation')}</StyledResultLeft>
        <StyledResultRight>
          {verusIDresults.revocationauthority === verusIDresults.identityaddress
            ? t('self')
            : verusIDresults.revocationauthority}
        </StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('recovery')}</StyledResultLeft>
        <StyledResultRight>
          {verusIDresults.recoveryauthority === verusIDresults.identityaddress
            ? t('self')
            : verusIDresults.recoveryauthority}
        </StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow className="row">
        <StyledResultLeft>{t('private')}</StyledResultLeft>
        <StyledResultRight>{verusIDresults.privateaddress}</StyledResultRight>
      </StyledResultsRow>
      <StyledResultsRow>
        <StyledResultLeft>{t('primary')}</StyledResultLeft>
        <StyledResultRight>
          {verusIDresults.primaryaddresses.map((address: string) => {
            return <p key={address}>{address}</p>
          })}
        </StyledResultRight>
      </StyledResultsRow>
    </StyledData>
  )
}

export default VerusIdResults
