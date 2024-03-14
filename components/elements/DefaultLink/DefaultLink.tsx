import React from 'react'
import styled from 'styled-components'

import { IDefaultLink } from '@/types/elements'
import Link from 'next/link'

const StyledDefaultLink = styled.a<any>`
  text-decoration: none;
  font-family: ${(props) => props.theme.typo.primary.family};
  transition: color ${(props) => props.theme.transitions.regular};

  color: ${(props) =>
    props.customColor === 'grey'
      ? props.theme.colors.grey.tertiary
      : props.customColor === 'blue'
      ? '#3165d4'
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
  if (external) {
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
  } else {
    return (
      <Link href={href} passHref>
        <StyledDefaultLink customColor={customColor}>
          {children}
        </StyledDefaultLink>
      </Link>
    )
  }
}

export default DefaultLink
