import React from 'react'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
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
  width: 100%;
  flex-direction: row;
  margin-bottom: ${(props: any) => props.theme.spaces.xxs};
  align-items: center;
  h5 {
    ${fontSize('mdlg')}
  }
`

const StyledSVG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  svg {
    height: 32px;
  }
`

const StyledSocialCTA = styled.a<any>`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.grey.secondary};
  border-radius: ${(props) => props.theme.borders.sm};
  padding: ${(props: any) => props.theme.spaces.sm};
  margin-bottom: ${(props) => props.theme.spaces.sm};
  width: 100%;
  justify-content: center;
  align-items: center;

  transition: background-color ${(props) => props.theme.transitions.fast},
    border-color ${(props) => props.theme.transitions.fast};

  ${media.desktop`margin-bottom: 0;`}

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.051);
    border-color: white;
  }
  p {
    opacity: 0.5;
  }
`

const SocialCTA: React.FC<ISocialCTA> = ({ href, svg, title, label }) => {
  const { t } = useTranslation('footer')
  return (
    <StyledSocialCTA href={href}>
      <StyledSVG>
        <SVGs name={svg} />{' '}
        {label && (
          <StyledLabel customColor={label.color}>
            {t(`socialCard.${title}.label`)}
          </StyledLabel>
        )}
      </StyledSVG>

      <StyledHeader>
        <DefaultHeader as="h5" align="left" customColor="white">
          {t(`socialCard.${title}.title`)}
        </DefaultHeader>
      </StyledHeader>

      <DefaultText customColor="#FFFFFF">
        {t(`socialCard.${title}.text`)}
      </DefaultText>
    </StyledSocialCTA>
  )
}

export default SocialCTA
