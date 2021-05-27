import { GetStaticProps } from 'next'
import { MainLayout, Section } from '@/components/layouts'
import { DefaultHeader } from '@/components/elements'
import styled from 'styled-components'
import { spacer } from '@/styles/helpers'

const StyledHeader = styled.div`
  ${spacer('xxl')}
`

const Exchanges = () => {
  return (
    <MainLayout>
      <StyledHeader>
        <DefaultHeader as="h2" align="center">
          Exchanges
        </DefaultHeader>
      </StyledHeader>
      <Section>Map of Exchanges</Section>
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

export default Exchanges
