import React from 'react'
import styled from 'styled-components'
import { IDefaultText } from '@/types/elements'

const StyledDefaultText = styled.p<any>`
  font-family: ${(props) => props.theme.typo.primary.family};
  width: 100%;
  line-height: 1.6;
  margin: 0;

  ${(props) => props?.customColor && `color: ${props.customColor};`}
`

const DefaultText: React.FC<IDefaultText> = ({ customColor, children }) => {
  return (
    <StyledDefaultText customColor={customColor}>{children}</StyledDefaultText>
  )
}

export default DefaultText
