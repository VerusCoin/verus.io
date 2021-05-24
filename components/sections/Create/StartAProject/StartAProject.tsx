import React from 'react'
import styled from 'styled-components'
import { IStartAProject } from '@/types/createpage'
import { Col } from 'styled-bootstrap-grid'
import { Button, DefaultHeader, DefaultText, SVGs } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import StartAProjectItem from './StartAProjectItem'
import { NarrowSection } from '@/components/layouts'

const StyledSVGHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spaces.xl} 0;

  color: ${(props) => props.theme.colors.white};
`

const StyledSVG = styled.div`
  margin: 10px 45px;
`

const StyledTitleContainer = styled.div`
  ${spacer('xxl')}
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    margin-bottom: ${(props) => props.theme.spaces.xs};
  }

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-size: 18px;
  }
`
const StyledCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    margin-bottom: ${(props) => props.theme.spaces.xs};
  }

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
  }
`

const StartAProject: React.FC<IStartAProject> = ({
  header,
  data,
  closing,
  button,
}) => {
  return (
    <NarrowSection cPadding={40}>
      <Col col={12}>
        <StyledSVGHeader>
          <StyledSVG>
            <SVGs name="blockchainCreation1" />
          </StyledSVG>
          <StyledSVG>
            <SVGs name="interoperability1" />
          </StyledSVG>
          <StyledSVG>
            <SVGs name="finance2" />
          </StyledSVG>
          <StyledSVG>
            <SVGs name="identity3" />
          </StyledSVG>
          <StyledSVG>
            <SVGs name="privacy2" />
          </StyledSVG>
        </StyledSVGHeader>
      </Col>

      <Col col={12} lg={7}>
        <StyledTitleContainer>
          <DefaultHeader>{header.title}</DefaultHeader>
          <DefaultText>{header.text}</DefaultText>
        </StyledTitleContainer>
      </Col>

      {data.map((item, index) => (
        <StartAProjectItem {...item} key={index} />
      ))}

      <Col col={12} lg={9}>
        <StyledCloseContainer>
          <DefaultHeader as="h3" customColor="white">
            {closing.header}
          </DefaultHeader>
          <DefaultText>{closing.text}</DefaultText>
          {button && (
            <Button
              primary
              wide
              as="a"
              href={button.href}
              svg={{ type: 'tab' }}
            >
              {button.text}
            </Button>
          )}
        </StyledCloseContainer>
      </Col>
    </NarrowSection>
  )
}

export default StartAProject
