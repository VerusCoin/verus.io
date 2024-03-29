import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ITopNavigation } from '@/types/layouts'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { ListNavigation } from '@/components/elements/Navbar'
import { fontSize } from '@/styles/helpers'
import { useWindowScroll } from 'react-use'
// import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'
// import i18nConfig from 'i18n.js'
// import Link from 'next/link'
import I18nProvider from 'next-translate/I18nProvider'

import languages from './languages.json'
import { useNotifyContext } from '@/lib/Contexts'

// const { locales } = i18nConfig

const StyledLanguage = styled.span`
  color: ${(props) => props.theme.colors.grey.secondary};
  font-family: ${(props) => props.theme.typo.header.family};
`

const StyledTopNavigation = styled.nav<any>`
  ${fontSize('menuXs')}

  padding: 16px 0;
  margin-bottom: ${(props) => props.theme.spaces.sm};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.primary};
  display: none;
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  top: ${(props) => (props.notify ? '42px' : 0)};
  z-index: 8999;
  background-color: ${(props) => props.theme.colors.white};
  transition: transform ${(props) => props.theme.transitions.fast};

  &.hideTopNav {
    transform: translateY(-50px);
  }

  ${media.desktop`
    display: block;
  `};
`

const LanguageMenu = () => {
  return <StyledLanguage>English</StyledLanguage>
}

const TopNavigation: React.FC<ITopNavigation> = ({ menu }) => {
  const { y } = useWindowScroll()
  const threshold = y >= 50

  const [hideTopNav, setHideTopNav] = useState(false)

  useEffect(() => {
    hideTopNav !== threshold && setHideTopNav(threshold)
  }, [y])

  const { lang } = useTranslation()
  const { notify } = useNotifyContext()
  return (
    <StyledTopNavigation className={hideTopNav && 'hideTopNav'} notify={notify}>
      <Container>
        <Row>
          <Col col={8}>
            <I18nProvider lang={lang} namespaces={{ languages }}>
              <LanguageMenu />
            </I18nProvider>
          </Col>
          <Col col={4} hiddenMdDown>
            <ListNavigation menu={menu} target="_blank" />
          </Col>
        </Row>
      </Container>
    </StyledTopNavigation>
  )
}

export default TopNavigation
