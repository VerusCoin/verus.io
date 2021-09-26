import React from 'react'
import styled from 'styled-components'
import { IDefaultLink } from '@/types/elements'

const StyledDefaultLink = styled.a<any>`
  text-decoration: none;
  font-family: ${(props) => props.theme.typo.primary.family};
  transition: color ${(props) => props.theme.transitions.regular};

  color: ${(props) =>
    props.customColor === 'grey'
      ? props.theme.colors.grey.tertiary
      : props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`

const DefaultLink: React.FC<IDefaultLink> = ({
  customColor,
  href,
  external,
  children,
}) => {
  return (
    <StyledDefaultLink
      customColor={customColor}
      href={href}
      target={external && '_blank'}
      rel={external && 'noreferrer'}
    >
      {children}
    </StyledDefaultLink>
  )
}

export default DefaultLink
