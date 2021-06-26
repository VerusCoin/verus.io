import React from 'react'
import styled from 'styled-components'
import { IDefaultHeader } from '@/types/elements'
import { fontSize, fontColor } from '@/styles/helpers'

const StyledTextContainer = styled.div`
  color: ${(props) => props.theme.colors.black.primary};
  margin-top: 16px;
`

const StyledText = styled.p<any>`
  font-family: ${(props) => props.theme.typo.secondary.family};
  ${(props) => props.customColor && fontColor(props.customColor)};
  ${fontSize('sm')};
  ${(props) => `text-align: ${props.align};`}
`
const CardText: React.FC<IDefaultHeader> = ({
  color,
  align = 'center',
  children,
}) => {
  return (
    <StyledTextContainer>
      <StyledText align={align} customColor={color}>
        {children}
      </StyledText>
    </StyledTextContainer>
  )
}

export default CardText
