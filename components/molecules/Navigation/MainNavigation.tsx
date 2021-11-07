import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { IMainNavigation } from '@/types/layouts'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'

import {
  Hamburger,
  HamburgerMenu,
  ListNavigation,
} from '@/components/elements/Navbar'
import { useWindowScroll } from 'react-use'
import { DefaultText, SVGs } from '@/components/elements'

const StyledMainNavigation = styled.nav<any>`
  position: fixed;
  top: ${(props: any) => (props.notify ? '42px' : 0)};
  width: 100%;
  z-index: 15;
  background: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.primary};
  padding-bottom: ${(props) => props.theme.spaces.custom.gutter};
  padding-top: ${(props) => props.theme.spaces.custom.gutter};
  height: ${(props) => props.theme.spaces.custom.mobileMenu};
  transition: transform ${(props) => props.theme.transitions.fast};

  ${media.desktop`
    top: ${(props: any) => (props.notify && '92px') || '50px'};
    right: 0;
    left: 0;
    padding: 20px 0;
    height: 90px;
    border: 0;
    div.tagline {
      display: none;
    }
    &.showBorder {
      border-bottom: 1px solid ${(props: any) =>
        props.theme.colors.grey.primary};
    }
    
    &.showMainNav {
      transform: translateY(-50px);
    }
    
    &.hideMainNav {
      transform: translateY(-140px);
    }
    
  `}
  ${media.giant`
    div.tagline {
      display: block;
    }
  `}
`

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  p {
    color: #676767;
    margin-left: 0;
  }
  ${media.giant`
    p{
      margin-left:16px;
    }
  `}
`

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 15;
  position: relative;
  text-decoration: none;

  > svg {
    fill: ${(props) => props.theme.colors.blue.primary};
  }
`

const usePreviousValue = (value: any) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current ?? 0
}

const MainNavigation: React.FC<IMainNavigation> = ({ menu, notify }) => {
  const { y } = useWindowScroll()
  const previousY = usePreviousValue(y)
  const direction = previousY > y ? 'up' : 'down'

  const [openMenu, setOpenMenu] = useState(false)
  const [mainMenuClasses, setMainMenuClasses] = useState('')

  // has window object & y-position
  useEffect(() => {
    toggleMenuClasses()
  }, [y])

  // no double renders
  const setMenuClasses = (myClass: string) => {
    mainMenuClasses !== myClass && setMainMenuClasses(myClass)
  }

  const toggleMenuClasses = () => {
    if (y < 50) {
      setMenuClasses('')
    } else if (y >= 50 && y < 140) {
      setMenuClasses('showMainNav')
    } else if (y >= 140 && direction === 'up') {
      setMenuClasses('showMainNav showBorder')
    } else if (y >= 140 && direction === 'down') {
      setMenuClasses('hideMainNav')
    }
  }

  return (
    <StyledMainNavigation className={mainMenuClasses} notify={notify}>
      <Container>
        <Row>
          <Col col={4} lg={2}>
            <StyledLogo href="/">
              <SVGs name="logo" />
            </StyledLogo>
          </Col>
          <Col col={4} lg={2} className="tagline">
            <StyledBanner>
              <DefaultText align="left" fontSz="xs" fam="geoReg">
                Truth and Privacy for All
              </DefaultText>
            </StyledBanner>
          </Col>

          <Col col={10} hiddenLgDown xl={8}>
            <ListNavigation menu={menu} />
          </Col>

          <Col col={4} hiddenLgUp>
            <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <HamburgerMenu openMenu={openMenu} menu={menu} />
          </Col>
        </Row>
      </Container>
    </StyledMainNavigation>
  )
}

export default MainNavigation

{
  /* <StyledBanner> */
}
{
  /* <DefaultText>test</DefaultText>
            </StyledBanner> */
}
