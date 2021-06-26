import React from 'react'
import styled from 'styled-components'
import { IDefaultHeader } from '@/types/elements'
// import { fontSize } from '@/styles/helpers'
import { DefaultHeader } from '@/components/elements'

const StyledTextHeader = styled.div`
  vertical-align: middle;
  margin-top: 32px;
  display: flex;
`
const CardHeader: React.FC<IDefaultHeader> = ({
  as,
  children,
  color,
  align = 'center',
}) => {
  return (
    <StyledTextHeader>
      <DefaultHeader as={as} align={align} customColor={color}>
        {children}
      </DefaultHeader>
    </StyledTextHeader>
  )
}

export default CardHeader
