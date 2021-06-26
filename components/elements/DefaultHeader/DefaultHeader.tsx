import React from 'react'
import styled from 'styled-components'
import { IDefaultHeader } from '@/types/elements'
import { fontSize, fontColor } from '@/styles/helpers'

const StyledTextContainer = styled.div<any>`
  color: ${(props) => props.theme.colors.black.primary};

  h1 {
    ${fontSize('xxl')}
    font-weight: ${(props: any) => (props.fontNormal ? 'normal' : 'bold')};
  }

  h2 {
    ${fontSize('xl')}
    font-weight: normal;
    margin: 0;
  }

  h3 {
    ${fontSize('lg')}
    font-weight: normal;
    margin: 0;
  }

  h4 {
    ${fontSize('md')}
    font-weight: normal;
    margin: 0 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h5 {
    ${fontSize('sm')}
    font-weight: normal;
    margin: 0;
  }
`

const StyledTextHeader = styled.h2<any>`
  font-family: ${(props) => props.theme.typo.header.family};
  ${(props) => props.customColor && fontColor(props.customColor)};

  ${(props) => props.align && `text-align: ${props.align}`}
`

const DefaultHeader: React.FC<IDefaultHeader> = ({
  customColor,
  align,
  as,
  fontNormal,
  children,
}) => {
  return (
    <StyledTextContainer fontNormal={fontNormal}>
      <StyledTextHeader align={align} as={as} customColor={customColor}>
        {children}
      </StyledTextHeader>
    </StyledTextContainer>
  )
}

export default DefaultHeader
