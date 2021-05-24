import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ITopNavigation } from '@/types/layouts'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { ListNavigation } from '@/components/elements/Navbar'
import { fontSize } from '@/styles/helpers'
import { useWindowScroll } from 'react-use'

const StyledLanguage = styled.span`
  color: ${(props) => props.theme.colors.grey.secondary};
  font-family: ${(props) => props.theme.typo.header.family};
`

const StyledTopNavigation = styled.nav<any>`
  ${fontSize('xs')}

  padding: 16px 0;
  margin-bottom: ${(props) => props.theme.spaces.sm};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.primary};
  display: none;
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.white};
  transition: transform ${(props) => props.theme.transitions.fast};

  &.hideTopNav {
    transform: translateY(-50px);
  }

  ${media.desktop`
    display: block;
  `};
`

const TopNavigation: React.FC<ITopNavigation> = ({ language, menu }) => {
  const { y } = useWindowScroll()
  const threshold = y >= 50

  const [hideTopNav, setHideTopNav] = useState(false)

  useEffect(() => {
    hideTopNav !== threshold && setHideTopNav(threshold)
  }, [y])

  return (
    <StyledTopNavigation className={hideTopNav && 'hideTopNav'}>
      <Container>
        <Row>
          <Col col={8}>
            <StyledLanguage>{language === 'en-US' && 'English'}</StyledLanguage>
          </Col>
          <Col col={4} hiddenMdDown>
            <ListNavigation menu={menu} />
          </Col>
        </Row>
      </Container>
    </StyledTopNavigation>
  )
}

export default TopNavigation
