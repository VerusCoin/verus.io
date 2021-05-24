import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './HamburgerMenu'
import { IHamburgerSubMenu } from '@/types/molecules'

const StyledSubMenu = styled.ul<{ openSubMenu: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.openSubMenu ? '300px' : '0')};
  height: ${(props) => (props.openSubMenu ? 'auto' : '0')};
  transition: max-height ${(props) => props.theme.transitions.fast};
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledNavigationMenuSubItem = styled.li`
  padding-top: ${(props) => props.theme.spaces.sm};
  padding-left: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.grey.primary};
`

const HamburgerSubMenu: React.FC<IHamburgerSubMenu> = ({
  openSubMenu,
  menu,
}) => {
  return (
    <StyledSubMenu openSubMenu={openSubMenu}>
      {menu.map((subitem, index) => (
        <StyledNavigationMenuSubItem key={`subnav_${subitem.link}_${index}`}>
          <StyledLink
            as={subitem.href ? 'a' : 'span'}
            href={subitem.href && subitem.href}
          >
            {subitem.link}
          </StyledLink>
        </StyledNavigationMenuSubItem>
      ))}
    </StyledSubMenu>
  )
}

export default HamburgerSubMenu
