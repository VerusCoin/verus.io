import React from 'react'
import styled from 'styled-components'
import { ISovereign } from '@/types/createpage'
import { Col, media } from 'styled-bootstrap-grid'
import { DefaultHeader, DefaultText, SVGs, NetTag } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import SovereignItem from './SovereignItem'
import { NarrowSection } from '@/components/layouts'

const StyledHeader = styled.div`
  ${spacer('xxl')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`
const StyledNetTagText = styled.span`
  color: #838383;
  font-weight: ${(props) => props.theme.typo.primary.weight.bold};
`
const StyledHeaderSVG = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.custom.narrowSection};
`

const StyledSingleData = styled.div`
  ${spacer('xxl')}
  border-top: solid 1px ${(props) => props.theme.colors.grey.senary};
  border-bottom: solid 1px ${(props) => props.theme.colors.grey.senary};
  text-align: center;
  align-items: center;
  padding: ${(props) => props.theme.spaces.lg};
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      margin: 11px;
    }
    margin-bottom: 12px;
    ${media.desktop`
    flex-direction: inherit;
    justify-content: center;  
  `}
  }
`
const StyledCloseContainer = styled.div`
  p {
    color: #838383;
    text-align: center;
    padding: ${(props) => props.theme.spaces.sm};
    font-size: 18px;
    font-weight: bold;
  }

  ${media.desktop`
    p {
      padding: 0 ${(props: any) => props.theme.spaces.xxl};
    }
  `}
`

const Sovereign: React.FC<ISovereign> = ({
  color,
  header,
  singleData,
  data,
  closing,
}) => {
  return (
    <NarrowSection colorBG={color}>
      <Col col={12}>
        <StyledHeader>
          <StyledHeaderSVG>
            <SVGs name={header.svg} />
          </StyledHeaderSVG>
          <NetTag net={header.net}>
            <StyledNetTagText>{header.netID}</StyledNetTagText>
          </NetTag>

          <DefaultHeader>{header.title}</DefaultHeader>
        </StyledHeader>
      </Col>

      <Col col={12}>
        <StyledSingleData>
          <DefaultHeader as="h3">
            <SVGs name={singleData.svg} /> {singleData.title}
          </DefaultHeader>
          {singleData.text && <DefaultText>{singleData.text}</DefaultText>}
        </StyledSingleData>
      </Col>

      {data.map((item, index) => (
        <Col col={12} lg={6} key={index}>
          <SovereignItem {...item} />
        </Col>
      ))}

      {closing && (
        <Col col={12}>
          <StyledCloseContainer>
            <DefaultText>{closing}</DefaultText>
          </StyledCloseContainer>
        </Col>
      )}
    </NarrowSection>
  )
}

export default Sovereign
