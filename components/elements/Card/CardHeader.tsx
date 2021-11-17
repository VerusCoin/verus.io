import React from 'react'
import styled from 'styled-components'
import { DefaultHeader } from '@/components/elements'
import parse from 'html-react-parser'

const StyledTextHeader = styled.div<{ margin?: string; width?: string }>`
  vertical-align: middle;
  display: flex;
  justify-content: center;

  ${(props) => props.width && `max-width: ${props.width};`}
  margin: ${(props) => (props.margin ? props.margin : '32px 0 0 0')}
`

export interface HeaderProps {
  color?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  width?: string
  text?: string
  children?: React.ReactNode
  margin?: string
  align?: 'center' | 'left'
}

const CardHeader = ({
  as = 'h2',
  color,
  width,
  text,
  children,
  margin,
  align = 'center',
}: HeaderProps) => {
  return (
    <StyledTextHeader width={width} margin={margin}>
      <DefaultHeader align={align} customColor={color} as={as}>
        {text && parse(text)}
        {children && children}
      </DefaultHeader>
    </StyledTextHeader>
  )
}

export default CardHeader
