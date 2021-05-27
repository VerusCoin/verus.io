import React from 'react'
import styled from 'styled-components'
import { IDefaultHeader } from '@/types/elements'
import { fontSize } from '@/styles/helpers'

const StyledTextContainer = styled.div`
  color: ${(props) => props.theme.colors.black.primary};

  h2 {
    font-weight: normal;
    line-height: 1.3;
    margin: 0;
  }
  h3 {
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
  }

  h4 {
    font-weight: normal;
    margin: 0 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h5 {
    font-weight: normal;
    margin: 0;
  }
`

const StyledTextHeader = styled.h2<any>`
  font-family: ${(props) => props.theme.typo.header.family};
  color: ${(props) =>
    props.customColor === 'white' && props.theme.colors.white};
  ${(props) => fontSize(props.fS)}
  ${(props) => props.align && `text-align: ${props.align};`}
`
const CardHeader: React.FC<IDefaultHeader> = ({
  customColor,
  align,
  as,
  children,
  fS = 'xxl',
}) => {
  return (
    <StyledTextContainer>
      <StyledTextHeader as={as} align={align} customColor={customColor} fS={fS}>
        {children}
      </StyledTextHeader>
    </StyledTextContainer>
  )
}

export default CardHeader
