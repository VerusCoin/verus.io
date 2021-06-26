import React, { useState } from 'react'
import styled from 'styled-components'
import { IHamburgerMenu } from '@/types/molecules'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import { Button } from '@/components/elements'
import { fontSize } from '@/styles/helpers'
import HamburgerSubMenu from './HamburgerSubMenu'
import { SVGs } from '@/components/elements/SVGs/SVGs'

export const StyledLink = styled.a<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  transition: color ${(props) => props.theme.transitions.regular};
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: ${(props) => props.theme.spaces.xs};

  color: ${(props) =>
    props.openSubMenu
      ? props.theme.colors.black.primary
      : props.theme.colors.grey.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.black.primary};
  }
`

const StyledNavigationMenu = styled.ul`
  margin: 0;
  padding: 0 0 ${(props) => props.theme.spaces.md} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${(props) => props.theme.typo.header.family};

  ${fontSize('menu')}
`

const StyledLinkSVG = styled.div<{ openSubMenu: boolean }>`
  svg {
    fill: ${(props) => props.theme.colors.grey.secondary};
    width: 16px;
    height: 16px;
    transition: transform ${(props) => props.theme.transitions.regular};
    transform: ${(props) => (props.openSubMenu ? 'rotate(180deg)' : '0')};
  }
`

const StyledNavigationMenuItem = styled.li`
  padding-bottom: ${(props) => props.theme.spaces.md};
  width: 100%;

  &:last-child {
    padding-bottom: 0;
  }
`

export const StyledHamburgerMenu = styled.div<{ openMenu: boolean }>`
  display: flex;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.white};
  height: calc(100% - ${(props) => props.theme.spaces.custom.mobileMenu});
  top: ${(props) => props.theme.spaces.custom.mobileMenu};
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: ${(props) => props.theme.spaces.md}
    ${(props) => props.theme.spaces.xxs};
  transform: ${({ openMenu }) =>
    openMenu ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ${(props) => props.theme.transitions.fast};
`

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ menu, openMenu }) => {
  return (
    <StyledHamburgerMenu openMenu={openMenu}>
      <Container>
        <Row>
          <Col col={12}>
            <StyledNavigationMenu>
              {menu.map((item, index) => {
                const [openSubMenu, setOpenSubMenu] = useState(false)

                return (
                  <StyledNavigationMenuItem
                    key={`nav_${item.category}_${index}`}
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                  >
                    {item.button ? (
                      <Button
                        as={item.href ? 'a' : 'span'}
                        href={item.href && item.href}
                      >
                        {item.category}
                      </Button>
                    ) : (
                      <StyledLink
                        as={item.href ? 'a' : 'span'}
                        href={item.href && item.href}
                        openSubMenu={openSubMenu}
                      >
                        {item.category}

                        {item.submenu && (
                          <StyledLinkSVG openSubMenu={openSubMenu}>
                            <SVGs name="arrowDown" />
                          </StyledLinkSVG>
                        )}
                      </StyledLink>
                    )}

                    {item.submenu && (
                      <HamburgerSubMenu
                        openSubMenu={openSubMenu}
                        menu={item.submenu}
                      />
                    )}
                  </StyledNavigationMenuItem>
                )
              })}
            </StyledNavigationMenu>
          </Col>
        </Row>
      </Container>
    </StyledHamburgerMenu>
  )
}

export default HamburgerMenu
