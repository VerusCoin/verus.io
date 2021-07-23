import React from 'react'
import styled from 'styled-components'
import { IDefaultText } from '@/types/elements'
import { fontFam } from '@/styles/helpers'

const StyledDefaultText = styled.p<any>`
  ${(props) => fontFam(props.fam)}
  width: 100%;
  margin: 0;
  text-align: ${(props) => props.align || 'left'};
  ${(props) => props?.customColor && `color: ${props.customColor};`}
  ${(props: any) => props?.width && `max-width: ${props.width}px;`}
`

const DefaultText: React.FC<IDefaultText> = ({
  width,
  customColor,
  children,
  align,
  fam,
}) => {
  return (
    <StyledDefaultText
      width={width}
      customColor={customColor}
      align={align}
      fam={fam}
    >
      {children}
    </StyledDefaultText>
  )
}

export default DefaultText
