import React from 'react'
import styled from 'styled-components'
import { ISocialCTA } from '@/types/molecules'
import { DefaultText, DefaultHeader, SVGs } from '@/components/elements'
import { media } from 'styled-bootstrap-grid'
import { fontSize } from '@/styles/helpers'

const StyledLabel = styled.span<any>`
  background-color: ${(props) =>
    props.customColor === 'green' && `${props.theme.colors.green}`};

  color: ${(props) => props.theme.colors.white};
  padding: 2px 8px;
  border-radius: 2px;
  font-family: ${(props) => props.theme.typo.primary.family};
  ${fontSize('menuXs')}
  font-weight: bold;
  margin-top: ${(props: any) => props.theme.spaces.xxs};

  ${media.desktop`
    margin-top: 0;
    margin-left: ${(props: any) => props.theme.spaces.xxs};
  `}
`

const StyledHeader = styled.div`
  line-height: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props: any) => props.theme.spaces.xxs};

  ${media.desktop`
    flex-direction: row;
    align-items: flex-end;
  `}
`

const StyledSVG = styled.span`
  margin-right: ${(props: any) => props.theme.spaces.xs};
`

const StyledSocialCTA = styled.a<any>`
  display: flex;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.colors.grey.secondary};
  border-radius: ${(props) => props.theme.borders.sm};
  padding: ${(props: any) => props.theme.spaces.xs};
  margin-bottom: ${(props) => props.theme.spaces.sm};
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: background-color ${(props) => props.theme.transitions.fast};

  ${media.desktop`margin-bottom: 0;`}

  &:hover {
    background-color: ${(props) => props.theme.colors.white};

    h5,
    p {
      color: ${(props) => props.theme.colors.black.primary};
    }
  }

  &:hover ${StyledSVG} {
    > svg {
      fill: ${(props) => props.theme.colors.black.primary};
    }
  }
`

const SocialCTA: React.FC<ISocialCTA> = ({ href, svg, title, text, label }) => {
  return (
    <StyledSocialCTA href={href}>
      <StyledSVG>{svg && <SVGs name={svg} />}</StyledSVG>

      <div>
        <StyledHeader>
          <DefaultHeader as="h5" customColor="white">
            {title}
          </DefaultHeader>
          {label && (
            <StyledLabel customColor={label.color}>{label.text}</StyledLabel>
          )}
        </StyledHeader>

        <DefaultText customColor="#FFFFFF">{text}</DefaultText>
      </div>
    </StyledSocialCTA>
  )
}

export default SocialCTA
