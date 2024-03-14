import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Grid } from '@/components/layouts'
import { TokenCard, VerusCard } from '@/components/sections/VerusIdPage'

const VerusId = () => {
  const { t } = useTranslation('verusIdPage')
  const title = t('seo:page.verusid.title')
  const description = t('seo:page.verusid.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          <TokenCard />
          <VerusCard />
        </Grid>
      </MainLayout>
    </>
  )
}

export default VerusId
