import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'styled-bootstrap-grid'
import { Card, CardHeader, CardText } from '@/components/elements/Card'
import { SVGs } from '@/components/elements'
import { MainLayout, Section } from '@/components/layouts'

const StyledSVG = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`

const CreateVerus2 = (): void => {
  return (
    <MainLayout>
      <Section>
        <Row>
          <Col col={12}>
            <Card>
              <Row justifyContent="center" alignItems="center">
                <Col col={12} md={6}>
                  <CardHeader customColor="white">
                    Blockchain or currency. Start on your terms.
                  </CardHeader>
                  <CardText fS="md2" customColor="white">
                    Use the Verus rent-free, decentralized and permissionless
                    public infrastructure
                  </CardText>
                </Col>
                <Col col={12} md={6}>
                  <StyledSVG>
                    <SVGs name="usp" />
                  </StyledSVG>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col col={12} md={6}>
            <Card bGcolor="#fff">
              <CardHeader align="center">Interoperable blockchains.</CardHeader>
              <CardText fS="md2">
                Independent and customizable. The network takes card of the
                rest.
              </CardText>
            </Card>
          </Col>
          <Col col={12} md={6}>
            <Card bGcolor="blue">
              <CardHeader align="center" customColor="white">
                Tailored token currencies.
              </CardHeader>
              <CardText align="center" customColor="white" fS="md2">
                Tailor a token currency for your needs.
              </CardText>
            </Card>
          </Col>
          <Col col={12}>
            <Card bGcolor="black">
              <StyledSVG>
                <SVGs name="usp" />
              </StyledSVG>
              <CardHeader customColor="white">
                Instant liquidity for your project.
              </CardHeader>
              <CardText customColor="white">
                Verus DeFi facilitates you and your users. Advanced kickstarter
                options. No front-running. Low fees.
              </CardText>
            </Card>
          </Col>
          <Col col={6}>
            <Card></Card>
          </Col>
          <Col col={6}>
            <Card></Card>
          </Col>
        </Row>
      </Section>
    </MainLayout>
  )
}

export default CreateVerus2
