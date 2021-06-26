import React from 'react'
import styled from 'styled-components'

import { media } from 'styled-bootstrap-grid'
import { spacer } from '@/styles/helpers'

const StyledContainer = styled.div<any>`
  ${spacer('xxl')}
  justify-content: center;
  grid-auto-rows: auto;
  padding: 0 12px;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 16px;

  ${media.tablet`
display: grid;
padding: 0;
// grid-auto-rows: minmax(560px, auto);
grid-column-gap: 12px;
// grid-template-columns: repeat(2, minmax(0, 1fr));
grid-template-columns: 1fr 1fr;
grid-auto-columns: 1fr;
max-width: 812px
`}
  ${media.desktop`
grid-column-gap: 20px;
//grid-auto-rows: minmax(740px, auto);

max-width: 1140px;
`}
`

interface IGridLayout {
  children: React.ReactNode
}

const GridLayout: React.FC<IGridLayout> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default GridLayout
