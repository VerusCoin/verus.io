import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { useForm, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { Img, TypedJS } from '@/components/elements'
import {
  Profile,
  ProfileHeader,
  VerusIdResults,
  VerusIDContext,
} from '@/components/sections/VerusId'
import {
  StyledContainer,
  StyledForm,
  StyledFormRow,
  StyledError,
  StyledResultError,
  StyledInput,
  StyledSubmitButton,
} from '@/components/sections/VerusId/Styles'

type Inputs = {
  verusID: string
}

const VerusidLookup = () => {
  const { t } = useTranslation('verusid')
  const [verusID, setVerusID] = useState<any>({})
  const [verus, setVerus] = useState<boolean>(false)

  const title = t('seo:page.lookup.title')
  const description = t('seo:page.lookup.description')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (query) => {
    // console.log(query)
    if (query) {
      const url = `/api/verusIdProfile?id=${query.verusID}`
      const result = await fetch(url)
      const data = await result.json()

      if (data.result) {
        setVerusID(data)
        setVerus(!verus)
      } else {
        setVerusID({ error: 'error.message' })
      }
    }
  }

  const _handleReset = () => {
    setVerusID({})
    setVerus(!verus)
    window.scrollTo(0, 0)
    reset()
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <StyledContainer verus={verus}>
            {isSubmitSuccessful && verusID.result ? (
              <ProfileHeader
                profileHeader={verusID.profileJSON?.public}
                verusId={verusID.result.identity.name}
              />
            ) : (
              <Img name="VerusID_Search_Icon" height={132} />
            )}
            {isSubmitting && (
              <div>
                <TypedJS strings={['Fetching', 'VerusID']} />
              </div>
            )}
            {!isSubmitting && !verusID.result && (
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
            {!isSubmitting && verusID.error && (
              <StyledResultError>
                {t('resultError')} <pre>{verusID.error}</pre>
              </StyledResultError>
            )}
            {isSubmitSuccessful && verusID.result && (
              <VerusIDContext.Provider value={verusID}>
                <Profile />

                <VerusIdResults onClick={() => _handleReset()} />
              </VerusIDContext.Provider>
            )}
          </StyledContainer>
        </Grid>
        {/* <pre>{JSON.stringify(verusID, null, 2)}</pre> */}
      </MainLayout>
    </>
  )
}

export default VerusidLookup
