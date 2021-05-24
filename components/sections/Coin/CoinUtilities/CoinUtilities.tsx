import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { ICoinUtilities } from '@/types/coinpage'
import { Row, Col, Container } from 'styled-bootstrap-grid'
import CoinUtilityItem from './CoinUtilityItem'
import DefaultHeader from '@/components/elements/DefaultHeader/DefaultHeader'
import { spacer } from '@/styles/helpers'

const StyledCoinUtilities = styled.div`
  ${spacer('xxl')}
  background-color: ${(props) => props.theme.colors.grey.quinary};
  padding-top: 118px;
  padding-bottom: ${(props) => props.theme.spaces.xxl};
  h2 {
    margin-bottom: 113px;
  }
`

const CoinUtilities: React.FC<ICoinUtilities> = ({ title, data }) => {
  return (
    <StyledCoinUtilities>
      <Container>
        <Row justifyContent="center">
          <Col col={12}>
            <DefaultHeader align="center">{parse(title)}</DefaultHeader>
          </Col>
          <Row justifyContent="center">
            {data.map((item, index) => {
              return <CoinUtilityItem key={`utility_${index}`} {...item} />
            })}
          </Row>
        </Row>
      </Container>
    </StyledCoinUtilities>
  )
}

export default CoinUtilities
