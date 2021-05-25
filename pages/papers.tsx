import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { IPapersProps } from '@/types/paperspage'
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
}: IPapersProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <MainLayout>
      <StyledHeader>
        <DefaultHeader as="h2" align="center">
          {data.PapersJSON.title}
        </DefaultHeader>
      </StyledHeader>
      <Section width={720}>
        {data.PapersJSON.data.map((paper, index) => (
          <PaperList {...paper} key={index} />
        ))}
      </Section>
    </MainLayout>
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
