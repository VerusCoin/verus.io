import { useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useForm, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { Img } from '@/components/elements'
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
  const router = useRouter()
  const title = t('seo:page.lookup.title')
  const description = t('seo:page.lookup.description')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (query) => {
    // console.log('query', query)
    if (query) {
      // if (query.verusID.match('/:*?"<>|')) {
      //   console.log(query)
      //   //quick test for inproper verusID content, whould add @ however, that would be at the end.
      //   setVerusID({ error: 'Invalid VerusID' })
      // } else {
      query.verusID = escape(query.verusID)
      const url = `/api/verusIDcheck?id=${query.verusID}`
      const result = await fetch(url)
      const data = await result.json()
      // console.log(query)
      // console.log(data)
      if (data.result) {
        // console.log(data.result)
        setVerusID(result)
        router.push(`/verusid-lookup/${data.result.id}`)
        // router.push({
        //   pathname: '/verusid-lookup/[verusID]',
        //   query: { verusID: escape(data.result.id) },
        // })
        // router.push({
        //   pathname: '/verusid-lookup/[id]',
        //   query: { id: data.result.id },
        // })
        // } else {
        //   setVerusID({ error: data.error.message })
        // }
      }
    }
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <StyledContainer>
            <Img name="VerusID_Search_Icon" height={132} />

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

            {!isSubmitting && verusID.error && (
              <StyledResultError>
                {t('resultError')} <pre>{verusID.error}</pre>
              </StyledResultError>
            )}
          </StyledContainer>
        </Grid>
      </MainLayout>
    </>
  )
}

export default VerusidLookup
