import React, { forwardRef } from 'react'

import styled from 'styled-components'

import TabToggle from './TabToggle'

const StyledTabItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  list-style: none;
`
interface ITabMenu {
  tabItems: string[]
}
const TabMenu = forwardRef<HTMLUListElement, ITabMenu>((props, ref) => {
  const { tabItems, ...rest } = props
  return (
    <StyledTabItems ref={ref} {...rest}>
      {tabItems.map((item, index) => (
        <TabToggle key={index} eventKey={index} text={item} />
      ))}
    </StyledTabItems>
  )
})

export default TabMenu
