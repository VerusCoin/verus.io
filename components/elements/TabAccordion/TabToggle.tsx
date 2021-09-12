import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { fontFam, fontSize } from '@/styles/helpers'
import { useTabContext, useTabClick } from './Hooks'

const StyledList = styled.li`
  list-style: none;
  margin: 0 0.5rem;
`

const StyledTabToggle = styled.button<any>`
  ${fontFam('geoHead')}
  ${fontSize('sm')}
  padding: .25rem 1.25rem;
  border-bottom: 2px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  cursor: pointer;
  ${(props: any) =>
    props.eventKey === props.activeEventKey
      ? `
        border-color: ${props.theme.buttons.primary.bg};
        color: ${props.theme.buttons.primary.bg};
        `
      : `
        border-color: #616161;
        color: #616161;
        
        `}
`

interface IToggle {
  eventKey: number
  onClick?: () => void
  text: string
}

const TabToggle = forwardRef<HTMLLIElement, IToggle>((props, ref) => {
  const { eventKey, onClick, text, ...rest } = props
  const tabClick = useTabClick(eventKey, onClick)
  const { activeEventKey } = useTabContext()
  return (
    <StyledList ref={ref} {...rest}>
      <StyledTabToggle
        activeEventKey={activeEventKey}
        eventKey={eventKey}
        onClick={tabClick}
      >
        {text}
      </StyledTabToggle>
    </StyledList>
  )
})

export default TabToggle
