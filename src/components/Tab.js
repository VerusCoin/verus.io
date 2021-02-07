import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useMemo,
  forwardRef,
  useEffect,
} from 'react'
import cn from 'classnames'

const TabContext = createContext(null)

const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('Tab must be contain content')
  }
  return context
}

const useEventKey = (eventKey, onToggle) => {
  const [activeEventKey, setActiveEventKey] = useState(eventKey)
  useEffect(() => {
    setActiveEventKey(eventKey)
  }, [eventKey, onToggle])
  return [activeEventKey, setActiveEventKey]
}

export const Tab = forwardRef((props, ref) => {
  const { activeEventKey, onToggle, children, ...rest } = props
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
      <div className="hidden md:block" ref={ref} {...rest}>
        {children}
      </div>
    </TabContext.Provider>
  )
})

export const TabItems = forwardRef((props, ref) => {
  const { classnames, children, ...rest } = props
  return (
    <div
      className={cn('flex flex-row justify-center', classnames)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
})

const useTabAccordClick = (eventKey, onClick) => {
  const { onToggle } = useTabContext()

  return (event) => {
    onToggle(eventKey)
    if (onClick) {
      onClick(event)
    }
  }
}

export const TabToggle = forwardRef((props, ref) => {
  const { eventKey, onClick, children, ...rest } = props
  const tabAccordClick = useTabAccordClick(eventKey, onClick)
  const { activeEventKey } = useTabContext()
  const tabClassName = cn(
    'p-1 px-5 text-lg text-center border-2 border-t-0 border-l-0 border-r-0 border-solid',
    {
      'text-tablink-active border-tablink-active': activeEventKey === eventKey,
      'text-tablink-default border-tablink-default':
        activeEventKey !== eventKey,
    }
  )
  return (
    <a className={tabClassName} ref={ref} {...rest} onClick={tabAccordClick}>
      {children}
    </a>
  )
})

export const TabPanel = forwardRef((props, ref) => {
  const { eventKey, children, ...rest } = props
  const { activeEventKey } = useTabContext()
  return activeEventKey === eventKey ? (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ) : null
})
