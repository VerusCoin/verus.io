import { ReactNode } from 'react'
import { StyledButton } from '../../elements/FormFields/Form'
import styled from 'styled-components'
import DefaultText from '../../elements/DefaultText/DefaultText'
import useTranslation from 'next-translate/useTranslation'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.spaces.xs};
  margin-top: 24px;
  margin-bottom: 64px;
  background-color: #fafafa;
  border-radius: 8px;
  p {
    margin-bottom: 10px;
    &.break {
      word-break: break-all;
    }
    span.red {
      color: #dc2626;
    }
    span.green {
      color: ${(props) => props.theme.colors.green};
    }
  }
  button {
    margin-top: 24px;
  }
`

interface IVerifyResult {
  sigResult: Record<string, string> | undefined
  children: ReactNode
  resetCall: () => void
  title: string
  fileName?: Record<string, unknown> | string | string[]
  verusSignature: Record<string, string>
}

const VerifyResult = ({
  sigResult,
  verusSignature,
  children,
  resetCall,
  title,
  fileName,
}: IVerifyResult) => {
  const { t } = useTranslation('signatures')

  return (
    <StyledContainer>
      <DefaultText fam="geoHead" fontSz="md">
        {t('results.title')}
        {sigResult !== undefined ? (
          sigResult?.valid === 'true' ? (
            <span className="green">{t('results.valid')}</span>
          ) : sigResult?.valid === 'false' ? (
            <span className="red">{t('results.inValid')}</span>
          ) : sigResult?.error ? (
            <span className="red">{sigResult.error_text}</span>
          ) : (
            t('results.processing')
          )
        ) : (
          t('results.processing')
        )}
      </DefaultText>

      {fileName && (
        <>
          <DefaultText fam="geoHead">{t('results.file')}:</DefaultText>
          <DefaultText className="break">{fileName}</DefaultText>
        </>
      )}
      <DefaultText fam="geoHead">{title}</DefaultText>
      <DefaultText className="break">{children}</DefaultText>
      <DefaultText fam="geoHead">{t('formField.verusID.input')}:</DefaultText>
      <DefaultText className="break">{verusSignature.Identity}</DefaultText>
      <DefaultText fam="geoHead">{t('formField.verusID.input')}:</DefaultText>
      <DefaultText className="break">{verusSignature.Signature}</DefaultText>
      <StyledButton onClick={resetCall}>{t('results.button')}</StyledButton>
    </StyledContainer>
  )
}

export default VerifyResult
