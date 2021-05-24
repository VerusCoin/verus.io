import { fontSize } from '@/styles/helpers'
import React from 'react'
import styled from 'styled-components'
import { IMenuSubItem } from 'types/general'
import { SVGs } from '@/components/elements/SVGs/SVGs'

const StyledLink = styled.a`
  text-decoration: none;
`

const StyledContent = styled.div`
  strong {
    display: block;
    font-weight: 300;
    color: ${(props) => props.theme.colors.black.primary};
    margin-bottom: 4px;
  }

  span {
    margin-top: 5px;
    font-family: ${(props) => props.theme.typo.primary.family};
    color: ${(props) => props.theme.colors.black.primary};
    ${fontSize('xs')}
  }
`

const StyledSVG = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${(props) => props.theme.spaces.xs};

  svg {
    width: 26px;
    height: 26px;
  }
`

const StyledLinkSVG = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.blue.primary};
  flex: 1;
  transition: opacity ${(props) => props.theme.transitions.regular};
`

const StyledLinkCard = styled.li`
  display: flex;

  text-decoration: none;
  border-radius: ${(props) => props.theme.borders.sm};
  width: 100%;
  padding: ${(props) => props.theme.spaces.xs};
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transitions.regular};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue.tertiary};

    strong {
      color: ${(props) => props.theme.colors.blue.primary};
    }
  }

  &:hover ${StyledLinkSVG} {
    opacity: 1;
  }
`

const LinkCard: React.FC<IMenuSubItem> = ({
  external,
  href,
  svg,
  link,
  description,
}) => {
  return (
    <StyledLinkCard>
      {svg && (
        <StyledSVG>
          <SVGs name={svg} />
        </StyledSVG>
      )}

      <StyledContent>
        <StyledLink href={href}>
          <strong>{link}</strong>
          {description && <span>{description}</span>}
        </StyledLink>
      </StyledContent>

      <StyledLinkSVG>
        {external ? <SVGs name="tab" /> : <SVGs name="arrow" />}
      </StyledLinkSVG>
    </StyledLinkCard>
  )
}

export default LinkCard
