import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './HamburgerMenu'
import { IHamburgerSubMenu } from '@/types/molecules'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

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
  category,
}) => {
  const { t } = useTranslation('navigation')
  return (
    <StyledSubMenu openSubMenu={openSubMenu}>
      {menu.map((subitem, index) => (
        <StyledNavigationMenuSubItem key={`subnav_${subitem.link}_${index}`}>
          {subitem.href && !subitem.external ? (
            <Link href={subitem.href} passHref>
              <StyledLink as="a">
                {t(`${category}.${subitem.link}.title`)}
              </StyledLink>
            </Link>
          ) : (
            <StyledLink
              as={subitem.href ? 'a' : 'span'}
              href={subitem.href && subitem.href}
            >
              {t(`${category}.${subitem.link}.title`)}
            </StyledLink>
          )}
        </StyledNavigationMenuSubItem>
      ))}
    </StyledSubMenu>
  )
}

export default HamburgerSubMenu
