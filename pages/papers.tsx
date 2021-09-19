import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { IPapersPageProps, IPaper } from '@/types/paperspage'
import { MainLayout, Section } from '@/components/layouts'
import PaperList from '@/components/sections/Papers/PaperList'
import { DefaultHeader } from '@/components/elements'
import { PapersJSON } from '@/data/paperspage'
import styled from 'styled-components'
import { spacer } from '@/styles/helpers'

const StyledHeader = styled.div`
  ${spacer('xxl')}
`

const Papers = ({
  data,
}: IPapersPageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const PaperListData = data.PapersJSON.data
  const { t } = useTranslation()
  const title = t('seo:page.papers.title')
  const description = t('seo.page.papers.description')
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <StyledHeader>
          <DefaultHeader as="h2" align="center">
            {data.PapersJSON.title}
          </DefaultHeader>
        </StyledHeader>
        <Section width={720}>
          {PaperListData.map((paper: IPaper, index: number) => (
            <PaperList key={index} {...paper} />
          ))}
        </Section>
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
