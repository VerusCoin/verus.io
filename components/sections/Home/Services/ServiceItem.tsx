import React from 'react'
import styled from 'styled-components'
import { Col, media } from 'styled-bootstrap-grid'
import { IServiceItem } from 'types/homepage'
import { DefaultHeader, DefaultText, SVGs } from '@/components/elements'

const StyledServiceItem = styled.div`
  margin-bottom: ${(props: any) => props.theme.spaces.xl};
  text-align: center;
  padding: 0 ${(props) => props.theme.spaces.lg};

  ${media.desktop`
      padding: 0 20px 0 0;
      margin-bottom: ${(props: any) => props.theme.spaces.lg};
      text-align: left;
      
      p {
        height: 170px;
      }
  `}
`

const StyledSVG = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spaces.sm};
  justify-content: center;

  ${media.desktop`
    justify-content: flex-start;
  `}

  svg {
    width: 64px;
    height: 64px;
  }
`

const ServiceItem: React.FC<IServiceItem> = ({ text, title, svg }) => {
  return (
    <Col col={12} md={6} lg={4}>
      <StyledServiceItem>
        <StyledSVG>{svg && <SVGs name={svg} />}</StyledSVG>

        <DefaultHeader as="h4">{title}</DefaultHeader>
        <DefaultText customColor="#878787">{text}</DefaultText>
      </StyledServiceItem>
    </Col>
  )
}

export default ServiceItem
