import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MainLayout, Grid } from '@/components/layouts'

import { IExchangesPageProps } from '@/types/exchanges'
import { ExchangesJSON } from '@/data/exchanges'
import ExchangeCard from '@/components/sections/Exchanges/ExchangeCard'

const Exchanges = ({
  data,
}: IExchangesPageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('exchanges')
  const title = t('seo:page.exchanges.title')
  const description = t('seo:page.exchanges.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    width: 1000,
  }
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          <ExchangeCard exchanges={data.ExchangesJSON.exchanges} />
        </Grid>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: { ExchangesJSON },
    },
  }
}

export default Exchanges
