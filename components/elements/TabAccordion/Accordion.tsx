import React, { useCallback, useMemo, forwardRef, ReactNode } from 'react'

import { AccordContext, useEventKey } from './Hooks'

interface IAccordion {
  activeEventKey?: number | string
  onToggle?: any
  children: ReactNode
}

const Accordion = forwardRef<HTMLDivElement, IAccordion>((props, ref) => {
  const { activeEventKey, onToggle, children, ...rest } = props
  const [eventKey = '0', setEventKey] = useEventKey(activeEventKey, onToggle)
  const handleToggle = useCallback(
    (eventKey: number) => {
      if (activeEventKey !== undefined) {
        onToggle(eventKey)
        return
      }
      setEventKey(eventKey)
    },
    [activeEventKey, onToggle, setEventKey]
  )
  const context = useMemo(() => {
    return { activeEventKey: eventKey, onToggle: handleToggle }
  }, [eventKey, handleToggle])

  return (
    <AccordContext.Provider value={context}>
      <div {...rest} ref={ref}>
        {children}
      </div>
    </AccordContext.Provider>
  )
})

export default Accordion
