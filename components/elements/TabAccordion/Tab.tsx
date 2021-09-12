import React, { useCallback, useMemo, forwardRef, ReactNode } from 'react'
import { TabContext, useEventKey } from './Hooks'
import TabMenu from './TabMenu'

interface ITab {
  activeEventKey: number | string
  onToggle?: any
  children: ReactNode
  tabItems: string[]
}

const Tab = forwardRef<HTMLDivElement, ITab>((props, ref) => {
  const { activeEventKey, onToggle, children, tabItems, ...rest } = props
  const [eventKey = '0', setEventKey] = useEventKey(activeEventKey, onToggle)
  const handleToggle = useCallback(
    (eventKey) => {
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
    <TabContext.Provider value={context}>
      <div ref={ref} {...rest}>
        <TabMenu tabItems={tabItems} />
        {children}
      </div>
    </TabContext.Provider>
  )
})

export default Tab
