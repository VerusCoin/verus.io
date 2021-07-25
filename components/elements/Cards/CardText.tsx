import React from 'react'
import styled from 'styled-components'
import { fontSize, fontColor } from '@/styles/helpers'
import parse from 'html-react-parser'

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
  ${(props) => props?.styles}
`

const CardText: React.FC<{
  color?: string
  text: string
  regular?: boolean
  book?: boolean
  fontSz?: string
  margin?: string
  styles?: string
}> = ({ color = 'black', regular, book, text, fontSz, margin, styles }) => {
  return (
    <StyledText
      regular={regular}
      book={book}
      align="center"
      customColor={color}
      fontSz={fontSz}
      margin={margin}
      styles={styles}
    >
      {parse(text)}
    </StyledText>
  )
}

export default CardText
