import React, { forwardRef, ReactNode } from 'react'

import { useTabContext } from './Hooks'

interface ITabPanel {
  children: ReactNode
  eventKey: number
}

const TabPanel = forwardRef<HTMLDivElement, ITabPanel>((props, ref) => {
  const { eventKey, children, ...rest } = props
  const { activeEventKey } = useTabContext()
  return activeEventKey === eventKey ? (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ) : null
})

export default TabPanel
