import React from 'react'
import styled from 'styled-components'
import { DefaultHeader } from '@/components/elements'
import parse from 'html-react-parser'

const StyledTextHeader = styled.div<{ width?: string }>`
  vertical-align: middle;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  ${(props) => props.width && `width: ${props.width}`}
`

interface HeaderProps {
  color?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  width?: string
  text: string
}

const CardHeader: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    HeaderProps
> = ({ as = 'h2', color, width, text }) => {
  return (
    <StyledTextHeader width={width}>
      <DefaultHeader align="center" customColor={color} as={as}>
        {parse(text)}
      </DefaultHeader>
    </StyledTextHeader>
  )
}

export default CardHeader
