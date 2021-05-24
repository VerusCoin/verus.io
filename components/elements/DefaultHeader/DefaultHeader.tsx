import React from 'react'
import styled from 'styled-components'
import { IDefaultHeader } from '@/types/elements'
import { fontSize } from '@/styles/helpers'

const StyledTextContainer = styled.div`
  color: ${(props) => props.theme.colors.black.primary};

  h1 {
    ${fontSize('xxl')}
  }

  h2 {
    ${fontSize('xl')}
    font-weight: normal;
    line-height: 1.3;
    margin: 0;
  }

  h3 {
    ${fontSize('md')}
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
  }

  h4 {
    ${fontSize('lg')}
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
  color: ${(props) =>
    props.customColor === 'white' && props.theme.colors.white};

  ${(props) => props.align && `text-align: ${props.align}`}
`

const DefaultHeader: React.FC<IDefaultHeader> = ({
  customColor,
  align,
  as,
  children,
}) => {
  return (
    <StyledTextContainer>
      <StyledTextHeader align={align} as={as} customColor={customColor}>
        {children}
      </StyledTextHeader>
    </StyledTextContainer>
  )
}

export default DefaultHeader
