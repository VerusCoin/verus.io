import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { IPapersPageProps, IPaper } from '@/types/paperspage'
import { MainLayout, Grid } from '@/components/layouts'
// import PaperList from '@/components/sections/Papers/PaperList'

import { PapersJSON } from '@/data/paperspage'
import PaperCards from '../components/sections/Papers/PaperCards'

const Papers = ({
  data,
}: IPapersPageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const PaperListData = data.PapersJSON.data
  const { t } = useTranslation('papers')
  const title = t('seo:page.papers.title')
  const description = t('seo:page.papers.description')
  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    width: 1000,
  }

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout jumbotronData={JumbotronJSON}>
        <Grid>
          {PaperListData.map((paper: IPaper, index: number) => (
            <PaperCards paper={paper} key={index} />
          ))}
        </Grid>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: { PapersJSON },
    },
  }
}

export default Papers
