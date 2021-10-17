import React from 'react'
import styled from 'styled-components'
import { IDefaultText } from '@/types/elements'
import { fontFam, fontSize } from '@/styles/helpers'

const StyledDefaultText = styled.p<any>`
  ${(props) => fontFam(props.fam)}
  width: 100%;
  margin: ${(props) => props.customMargin || 0};
  text-align: ${(props) => props.align || 'left'};
  ${(props) => props?.customColor && `color: ${props.customColor};`}
  ${(props: any) => props?.width && `max-width: ${props.width}px;`}
  ${(props) => props.fontSz && fontSize(props.fontSz)}
`

const DefaultText: React.FC<IDefaultText> = ({
  width,
  customColor,
  customMargin,
  children,
  align,
  fam,
  fontSz,
  className,
  as,
}) => {
  return (
    <StyledDefaultText
      as={as}
      width={width}
      customColor={customColor}
      customMargin={customMargin}
      align={align}
      fam={fam}
      fontSz={fontSz}
      className={className}
    >
      {children}
    </StyledDefaultText>
  )
}

export default DefaultText
