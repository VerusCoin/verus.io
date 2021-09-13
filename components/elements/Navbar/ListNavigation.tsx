import React from 'react'
import styled from 'styled-components'
import { IListNavigation } from '@/types/molecules'
import { Button } from '@/components/elements'
import LinkCard from './LinkCard'
import useTranslation from 'next-translate/useTranslation'

const StyledNavigationMenu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${(props) => props.theme.typo.header.family};
  color: ${(props) => props.theme.colors.grey.secondary};
  padding: 0;
`

const StyledSubMenuArea = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  padding: 20px;
  left: 50%;
  bottom: 0;
  width: 450px;
  transform: translateY(100%) translateX(-50%);
`

const StyledLink = styled.a<any>`
  color: ${(props) => props.theme.colors.grey.secondary};
  text-decoration: none;
  cursor: ${(props) => props.as === 'span' && `default`};
  transition: color ${(props) => props.theme.transitions.regular};

  &:hover {
    color: ${(props) => props.theme.colors.black.primary};
  }
`

const StyledNavigationMenuItem = styled.li`
  position: relative;

  &:nth-child(n + 2) {
    margin-left: ${(props) => props.theme.spaces.sm};
  }

  &:hover ${StyledLink} {
    color: ${(props) => props.theme.colors.black.primary};
  }

  &:hover ${StyledSubMenuArea} {
    display: block;
  }
`

const StyledSubMenu = styled.ul`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.typo.header.family};
  color: ${(props) => props.theme.colors.grey.secondary};
  padding: ${(props) => props.theme.spaces.xs};
  border-radius: ${(props) => props.theme.borders.sm};
  box-shadow: 2px 2px 58px 4px rgba(0, 0, 0, 0.09);
  list-style: none;

  li {
    margin-left: 0;
  }
`

const ListNavigation: React.FC<IListNavigation> = ({ menu, target }) => {
  const { t } = useTranslation('navigation')

  return (
    <StyledNavigationMenu>
      {menu.map((item, index) => {
        return (
          <StyledNavigationMenuItem key={`nav_${item.category}_${index}`}>
            {item.button ? (
              <Button
                as={item.href ? 'a' : 'span'}
                href={item.href && item.href}
                fontSize="menu"
              >
                {t(`${item.category}.title`)}
              </Button>
            ) : (
              <StyledLink
                as={item.href ? 'a' : 'span'}
                href={item.href && item.href}
                target={target}
              >
                {t(`${item.category}.title`)}
              </StyledLink>
            )}

            {item.submenu && (
              <StyledSubMenuArea>
                <StyledSubMenu>
                  {item.submenu.map((subitem, index) => (
                    <LinkCard
                      key={`nav_${subitem.link}_${index}`}
                      {...subitem}
                      category={item.category}
                    />
                  ))}
                </StyledSubMenu>
              </StyledSubMenuArea>
            )}
          </StyledNavigationMenuItem>
        )
      })}
    </StyledNavigationMenu>
  )
}

export default ListNavigation
