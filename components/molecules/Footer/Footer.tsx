import React from 'react'
import styled from 'styled-components'

import { IFooter } from '@/types/layouts'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import {
  CategoryNavigation,
  SocialCTA,
  Copyright,
} from '@/components/molecules'

const SocialCTAContainter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.black.secondary};
  padding: ${(props) => props.theme.spaces.xl} 0;

  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  ${media.desktop`
    padding-top: ${(props: any) => props.theme.spaces.xxl};
  `}
`

const Footer: React.FC<IFooter> = ({ copyright, social, links }) => {
  return (
    <StyledFooter>
      <Container>
        <Row justifyContent="center">
          <Col col={10} md={11} xl={9}>
            <Row>
              {social.map((item, index) => {
                return (
                  <Col col={12} lg={6} key={`social_${index}`}>
                    <SocialCTAContainter>
                      <SocialCTA {...item} />
                    </SocialCTAContainter>
                  </Col>
                )
              })}
            </Row>
          </Col>

          <Col col={10} md={12}>
            <Row>
              {links.map((item, index) => {
                return (
                  <Col col={6} lg={3} key={`links_${index}`}>
                    <CategoryNavigation
                      key={`categoryNavigation_${index}`}
                      {...item}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>

          <Col col={12}>
            <Row>
              <Copyright {...copyright} />
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
