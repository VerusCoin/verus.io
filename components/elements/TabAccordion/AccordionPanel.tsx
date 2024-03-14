import React, { forwardRef, ReactNode } from 'react'

import styled from 'styled-components'

import { useAccordContext } from './Hooks'

const StyledCollapse = styled.div`
  max-height: 100vh;
  transition: max-height 0.35s;
`
interface IPanel {
  eventKey: number
  children: ReactNode
}
const AccordionPanel = forwardRef<HTMLDivElement, IPanel>((props, ref) => {
  const { eventKey, children, ...rest } = props
  const { activeEventKey } = useAccordContext()
  return activeEventKey === eventKey ? (
    <StyledCollapse ref={ref} {...rest}>
      {children}
    </StyledCollapse>
  ) : null
})

export default AccordionPanel
