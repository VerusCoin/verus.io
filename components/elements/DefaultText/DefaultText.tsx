import React from 'react'
import styled from 'styled-components'
import { IDefaultText } from '@/types/elements'

const StyledDefaultText = styled.p<any>`
  font-family: ${(props) => props.theme.typo.primary.family};
  width: 100%;
  line-height: 1.6;
  margin: 0;

  ${(props) => props?.customColor && `color: ${props.customColor};`}
  ${(props: any) => props?.width && 'max-width: ${props.width}px;'}
`

const DefaultText: React.FC<IDefaultText> = ({
  width,
  customColor,
  children,
}) => {
  return (
    <StyledDefaultText width={width} customColor={customColor}>
      {children}
    </StyledDefaultText>
  )
}

export default DefaultText
