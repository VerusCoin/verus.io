import React from 'react'
import styled from 'styled-components'
import { fontSize, fontColor } from '@/styles/helpers'

const StyledText = styled.p<any>`
  margin: ${(props) => props.margin || '16px 0 0 0'};
  font-family: ${(props) =>
    props.regular
      ? props.theme.typo.secondary.family
      : props.book
      ? props.theme.typo.header.family
      : props.theme.typo.primary.family};

  ${(props) => props.customColor && fontColor(props.customColor)};
  ${(props) => (props.fontSz ? fontSize(props.fontSz) : fontSize('sm'))};
  ${(props) => `text-align: ${props.align};`}
`

const CardText: React.FC<
  DetailedHTMLFactory<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > & {
    color: string
    text: string
    regular?: boolean
    book?: boolean
    fontSz?: string
    margin?: string
  }
> = ({ color = 'black', regular, book, text, fontSz, margin }) => {
  return (
    <StyledText
      regular={regular}
      book={book}
      align="center"
      customColor={color}
      fontSz={fontSz}
      margin={margin}
    >
      {text}
    </StyledText>
  )
}

export default CardText
