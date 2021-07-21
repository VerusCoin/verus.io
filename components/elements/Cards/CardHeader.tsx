import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { DefaultHeader } from '@/components/elements'
import parse from 'html-react-parser'

const StyledTextHeader = styled.div`
  vertical-align: middle;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  ${(props) => props.width && `width: ${props.width}`}
`

interface HeaderProps {
  color?: string
  as?: string
  width?: string
  children: ReactNode
}

const CardHeader: React.FC<HeaderProps> = ({ as, color, width, text }) => {
  return (
    <StyledTextHeader width={width}>
      <DefaultHeader align="center" customColor={color} as={as}>
        {parse(text)}
      </DefaultHeader>
    </StyledTextHeader>
  )
}

export default CardHeader
