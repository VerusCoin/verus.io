import React from 'react'
import styled from 'styled-components'
import { fontSize, fontColor } from '@/styles/helpers'
import parse from 'html-react-parser'

const StyledText = styled.p<any>`
  margin: ${(props) => props.margin || '16px 0 0 0'};
  font-family: ${(props) =>
    props.book
      ? props.theme.typo.header.family
      : props.theme.typo.primary.family};

  ${(props) => props.customColor && fontColor(props.customColor)};
  ${(props) => (props.fontSz ? fontSize(props.fontSz) : fontSize('sm'))};
  ${(props) => `text-align: ${props.align};`}
  ${(props) => props?.styles}
`

export interface CardTextProps {
  color?: string
  text: string
  book?: boolean
  align?: string
  fontSz?: string
  margin?: string
  styles?: string
  className?: string
  odometer?: boolean
}

const CardText = ({
  color = 'black',
  book,
  text,
  align = 'center',
  fontSz,
  margin,
  styles,
  className,
}: CardTextProps) => {
  return (
    <StyledText
      book={book}
      align={align}
      customColor={color}
      fontSz={fontSz}
      margin={margin}
      styles={styles}
      className={className}
    >
      {parse(text)}
    </StyledText>
  )
}

export default CardText
