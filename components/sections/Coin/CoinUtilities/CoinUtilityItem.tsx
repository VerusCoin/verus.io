import React from 'react'
import styled from 'styled-components'
import { Col, media } from 'styled-bootstrap-grid'
import { ICoinUtilityItem } from '@/types/coinpage'
import { DefaultHeader, DefaultText, NetTag, SVGs } from '@/components/elements'

const StyledCoinUtilityItem = styled.div`
  margin-bottom: ${(props: any) => props.theme.spaces.xl};
  text-align: center;
  padding: 0 ${(props) => props.theme.spaces.lg};

  ${media.desktop`
      padding: 10px 0;
      margin-bottom: ${(props: any) => props.theme.spaces.lg};
      text-align: left;
      
  `}
`
const StyledLink = styled.a`
  display: inline-flex;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  font-family: ${(props) => props.theme.typo.primary.family};
  color: ${(props) => props.theme.colors.blue.primary};
  align-items: center;
  margin-top: ${(props) => props.theme.spaces.xs};
`

const CoinUtilityItem: React.FC<ICoinUtilityItem> = ({
  text,
  title,
  net,
  link,
}) => {
  return (
    <Col col={12} md={6} lg={4}>
      <StyledCoinUtilityItem>
        <NetTag net={net} />

        <DefaultHeader as="h4">{title}</DefaultHeader>
        <DefaultText customColor="#272727">{text}</DefaultText>
        {link && (
          <StyledLink>
            {link.text}
            {link?.external && <SVGs name="tab" />}
          </StyledLink>
        )}
      </StyledCoinUtilityItem>
    </Col>
  )
}

export default CoinUtilityItem
