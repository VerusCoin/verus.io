import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'
import AccordionHeader from './AccordionHeader'
import AccordionPanel from './AccordionPanel'

const StyledAccordionContent = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0.5rem 0;
`

interface IContent {
  title: string
  children: ReactNode
  eventKey: number
}

const AccordionContent = forwardRef<HTMLDivElement, IContent>((props, ref) => {
  const { children, title, eventKey, ...rest } = props
  return (
    <StyledAccordionContent ref={ref} {...rest}>
      <AccordionHeader eventKey={eventKey} title={title} />
      <AccordionPanel eventKey={eventKey}>{children}</AccordionPanel>
    </StyledAccordionContent>
  )
})

export default AccordionContent
