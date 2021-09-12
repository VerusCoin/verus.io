import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { fontFam, fontSize } from '@/styles/helpers'
import { useAccordContext, useAccordClick } from './Hooks'

const StyledAccordionHeader = styled.h2<any>`
  ${fontFam('geoHead')}
  ${fontSize('sm')}
  
  display: block;
  width: 100%;
`
const StyledAccordionToggle = styled.button<any>`
  margin: 0 !important;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  padding: 1.25rem;
  text-align: left;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  &::after {
    background-image: url('/svg/arrow-down.svg');
    display: block;
    float: right;
    text-align: center;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    content: '';
    background-repeat: no-repeat;
    background-size: 1.25rem;
    background-position: center center;
    transition: transform 0.2s ease-in-out;

    justify-content: center;
  }
  ${(props: any) =>
    props.eventKey === props.activeEventKey
      ? `
        border-color: ${props.theme.buttons.primary.bg};
        color: ${props.theme.buttons.primary.bg};
        &::after{
          transform: rotateX(180deg);
        }
        `
      : `
        border-color: #b1b1b1;
        `}
`
interface IHeader {
  eventKey: number | string
  onClick?: () => void
  title: string
}
const AccordionHeader = forwardRef<HTMLHeadingElement, IHeader>(
  (props, ref) => {
    const { eventKey, onClick, title, ...rest } = props
    const toggleClick = useAccordClick(eventKey, onClick)
    const { activeEventKey } = useAccordContext()

    return (
      <StyledAccordionHeader
        ref={ref}
        {...rest}
        eventKey={eventKey}
        activeEventKey={activeEventKey}
      >
        <StyledAccordionToggle
          onClick={toggleClick}
          eventKey={eventKey}
          activeEventKey={activeEventKey}
        >
          {title}
        </StyledAccordionToggle>
      </StyledAccordionHeader>
    )
  }
)

export default AccordionHeader
