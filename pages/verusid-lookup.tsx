import { useState } from 'react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { Button, Img } from '@/components/elements'
import { media } from 'styled-bootstrap-grid'
import { fontFam, fontSize } from '@/styles/helpers'

const StyledContainer = styled.div`
  grid-column: span 2;
  max-width: 750px;
  width: 100%;
  padding: ${(props) => props.theme.spaces.xs};
  margin: auto;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  justify-content: center;
  ${fontFam('geoReg')}
  ${media.tablet`
    flex-direction: row;
  `}
`

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.tablet`
    width: 470px;
  `}
`

const StyledError = styled.span`
  ${fontSize('xxs')}
  color: rgba(185, 28, 28);
  margin-bottom: ${(props) => props.theme.spaces.xs};
  margin-top: 10px;
`

const StyledResultError = styled.div`
  ${fontSize('button')}
  color: rgba(185, 28, 28);
  margin-bottom: ${(props) => props.theme.spaces.xs};
  margin-top: 10px;
`

const StyledInput = styled.input`
  color: ${(props) => props.theme.colors.blue.primary};
  padding: 20px 40px;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  border: 1px solid ${(props) => props.theme.colors.blue.primary};
  outline: none;

  &:focus {
    background-color: #e8f0fe;
    color: ${(props) => props.theme.colors.blue.quinary};
  }
`

const StyledSubmitButton = styled.input`
  ${fontSize('xs')}
  color: white;
  padding: 20px 40px;
  border: none;
  background-color: #3165d4;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
  ${media.tablet`
    margin-top: 0;
    margin-left: -106px;
    max-height: 60px;  
  `}
`

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  ${fontFam('')}

  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  div.row {
    border-bottom: solid 1px black;
  }
  button:hover {
    text-decoration: underline;
  }
`
const StyledInputValue = styled.p`
  ${fontFam('geoHead')}
  ${fontSize('button')}
  color: ${(props) => props.theme.colors.blue.primary};
  padding: 20px 40px;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  width: 100%;
  background-color: white;
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
type Inputs = {
  verusID: string
}

const VerusidLookup = () => {
  const { t } = useTranslation('verusid')
  const [verusID, setVerusID] = useState<any>({})
  const title = t('seo:page.lookup.title')
  const description = t('seo.page.lookup.description')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (query) => {
    if (query) {
      const url = `/api/verusIDcheck?id=${query.verusID}`
      const result = await fetch(url)
      const data = await result.json()

      if (data.result) {
        setVerusID(data)
      } else {
        setVerusID({ error: data.error.message })
      }
    }
  }

  const _handleReset = () => {
    setVerusID({})
    reset()
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <StyledContainer>
            <Img name="VerusID_Search_Icon" height={132} />
            {!verusID.result && (
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledFormRow>
                  <StyledInput
                    type="text"
                    placeholder={t('placeholder')}
                    {...register('verusID', { required: true })}
                  />
                  {errors.verusID && <StyledError>{t('error')}</StyledError>}
                </StyledFormRow>
                <StyledSubmitButton type="submit" value={t('lookup')} />
              </StyledForm>
            )}
            {verusID.error && (
              <StyledResultError>
                {t('resultError')} <pre>{verusID.error}</pre>
              </StyledResultError>
            )}
            {verusID.result && (
              <StyledData>
                <StyledInputValue>
                  {verusID.result.identity.name}
                </StyledInputValue>
                <StyledResultsRow className="row">
                  <StyledResultLeft>{t('identity')}</StyledResultLeft>
                  <StyledResultRight>
                    {verusID.result.identity.identityaddress}
                  </StyledResultRight>
                </StyledResultsRow>
                <StyledResultsRow className="row">
                  <StyledResultLeft>{t('revocation')}</StyledResultLeft>
                  <StyledResultRight>
                    {verusID.result.identity.revocationauthority ===
                    verusID.result.identity.identityaddress
                      ? t('self')
                      : verusID.result.identity.revocationauthority}
                  </StyledResultRight>
                </StyledResultsRow>
                <StyledResultsRow className="row">
                  <StyledResultLeft>{t('recovery')}</StyledResultLeft>
                  <StyledResultRight>
                    {verusID.result.identity.recoveryauthority ===
                    verusID.result.identity.identityaddress
                      ? t('self')
                      : verusID.result.identity.recoveryauthority}
                  </StyledResultRight>
                </StyledResultsRow>
                <StyledResultsRow className="row">
                  <StyledResultLeft>{t('private')}</StyledResultLeft>
                  <StyledResultRight>
                    {verusID.result.identity.privateaddress}
                  </StyledResultRight>
                </StyledResultsRow>
                <StyledResultsRow>
                  <StyledResultLeft>{t('primary')}</StyledResultLeft>
                  <StyledResultRight>
                    {verusID.result.identity.primaryaddresses.map(
                      (address: string) => {
                        return <p key={address}>{address}</p>
                      }
                    )}
                  </StyledResultRight>
                </StyledResultsRow>
                <Button
                  onClick={() => _handleReset()}
                  transparent
                  color="#3165d4"
                  margin="50px 0"
                >
                  {t('another')}
                </Button>
              </StyledData>
            )}
          </StyledContainer>
        </Grid>
      </MainLayout>
    </>
  )
}

export default VerusidLookup
