import { GetStaticProps } from 'next'
import { MainLayout, Section } from '@/components/layouts'
import { DefaultHeader } from '@/components/elements'
import styled from 'styled-components'
import { spacer } from '@/styles/helpers'

const StyledHeader = styled.div`
  ${spacer('xxl')}
`

const Bridges = () => {
  return (
    <MainLayout>
      <StyledHeader>
        <DefaultHeader as="h2" align="center">
          Bridges
        </DefaultHeader>
      </StyledHeader>
      <Section>Map of Bridges</Section>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: null,
    },
  }
}

export default Bridges
