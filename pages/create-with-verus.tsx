import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { CreateWithVerusProps } from 'types/createpage'
import styled from 'styled-components'
import { DefaultHeader, DefaultText, Button } from '@/components/elements'
import { MainLayout, Section } from '@/components/layouts'

import { StartAProject, SelfSovereign } from '@/components/sections/Create'
import { JumbotronJSON } from '@/data/createpage/json/JumbotronJSON'
import {
  StartAProjectJSON,
  SelfSovereignJSON,
  DefiSovereignJSON,
} from '@/data/createpage'

const StyledTextSection = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spaces.xs};
  p {
    font-size: 18px;
  }
`

const CreateWithVerus = ({
  data,
}: CreateWithVerusProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <MainLayout jumbotronData={data.JumbotronJSON}>
      <StartAProject {...data.StartAProjectJSON} />
      <Section width={710}>
        <StyledTextSection>
          <DefaultText>Did you know?</DefaultText>
        </StyledTextSection>
        <DefaultHeader as="h2" align="center">
          A secure and scalable system with the most important functions at the
          protocol level.
          <div>
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="#"
              as="a"
            >
              Read more about our strong foundations
            </Button>
          </div>
        </DefaultHeader>
      </Section>
      <SelfSovereign {...data.SelfSovereignJSON} />
      <SelfSovereign {...data.DefiSovereignJSON} />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        JumbotronJSON,
        StartAProjectJSON,
        SelfSovereignJSON,
        DefiSovereignJSON,
      },
    },
  }
}

export default CreateWithVerus
