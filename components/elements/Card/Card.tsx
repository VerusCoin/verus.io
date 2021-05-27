import React from 'react'
import styled from 'styled-components'

import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div<any>`
  ${(props: any) => bgColor(props.bGcolor)}
  border-radius: 20px;
  padding: ${(props) => props.theme.spaces.sm};

  height: 95%;
`

interface ICard {
  children?: React.ReactNode
  bGcolor?: string
}

const Card: React.FC<ICard> = ({ bGcolor = '#04205c', children }) => {
  return <StyledCard bGcolor={bGcolor}>{children}</StyledCard>
}

export default Card
