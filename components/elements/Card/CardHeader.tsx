import React from 'react'
import styled from 'styled-components'
import { DefaultHeader } from '@/components/elements'
import parse from 'html-react-parser'

const StyledTextHeader = styled.div<{ margin?: string; width?: string }>`
  vertical-align: middle;
  display: flex;
  justify-content: center;
  ${(props) => props.width && `width: ${props.width};`}
  margin: ${(props) => (props.margin ? props.margin : '32px 0 0 0')}
`

export interface HeaderProps {
  color?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  width?: string
  text: string
  margin?: string
}

const CardHeader = ({ as = 'h2', color, width, text, margin }: HeaderProps) => {
  return (
    <StyledTextHeader width={width} margin={margin}>
      <DefaultHeader align="center" customColor={color} as={as}>
        {parse(text)}
      </DefaultHeader>
    </StyledTextHeader>
  )
}

export default CardHeader
