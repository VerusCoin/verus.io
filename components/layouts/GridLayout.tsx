import React from 'react'
import styled from 'styled-components'

import { media } from 'styled-bootstrap-grid'
import { spacer } from '@/styles/helpers'
// grid-row-gap: 12px;
const StyledContainer = styled.div<any>`
  ${spacer('xxl')}
  justify-content: center;
  grid-auto-rows: auto;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
  
  `}

  ${media.giant`
    padding: 0;
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
