import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { DefaultText, DefaultHeader, SVGs } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import { ISovereignItem } from '@/types/createpage'

const StyledContainer = styled.div`
  ${spacer('xxl')}
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  ${media.desktop`
    flex-direction: inherit;
    justify-content: center;  
    align-items: baseline;
  `}
`

const StyledSVG = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.md};
  color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.spaces.xs};

  ${media.desktop`
    margin-bottom: 0;
    margin-right: 11px;
  `};
`

const StyledText = styled.div`
  p {
    margin-top: 16px;
  }
`

const StyledDidYouKnow = styled.div`
  border: solid 1px ${(props) => props.theme.colors.green};
  border-radius: ${(props) => props.theme.borders.sm};
  padding: 14px;
  background-color: rgba(74, 166, 88, 0.06);
  color: '#0a5616';
  p {
    font-size: 14px;

    span {
      font-weight: bold;
    }
  }
  p:first-child {
    margin-bottom: 10px;
  }
`

const SovereignItem: React.FC<ISovereignItem> = ({
  svg,
  didYouKnow,
  title,
  text,
  text2,
}) => {
  return (
    <StyledContainer>
      {svg && (
        <StyledCard>
          <StyledSVG>
            <SVGs name={svg} />
          </StyledSVG>
          <StyledText>
            <DefaultHeader as="h3">{title}</DefaultHeader>
            <DefaultText>{text}</DefaultText>
          </StyledText>
        </StyledCard>
      )}
      {didYouKnow && (
        <StyledDidYouKnow>
          <DefaultText>
            <span>{title}? </span> {text}
          </DefaultText>

          <DefaultText>{text2}</DefaultText>
        </StyledDidYouKnow>
      )}
    </StyledContainer>
  )
}

export default SovereignItem
