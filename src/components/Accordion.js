import {
  useState,
  useCallback,
  useContext,
  useMemo,
  forwardRef,
  useEffect,
  createContext,
} from 'react'
import cn from 'classnames'
import s from '@src/styles/accordion.module.css'
const AccordContext = createContext(null)

const useAccordContext = () => {
  const context = useContext(AccordContext)
  if (!context) {
    throw new Error('useAccordContext must be used within Accordion')
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

// To use Accordion as default on everyview you need to declare className in calling
// with className="block"
export const Accordion = forwardRef((props, ref) => {
  const {
    activeEventKey,
    onToggle,
    children,
    className = s.root,
    ...rest
  } = props
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
    <AccordContext.Provider value={context}>
      <div className={className} {...rest} ref={ref}>
        {children}
      </div>
    </AccordContext.Provider>
  )
})

const useToggleClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordContext()
  return (event) => {
    onToggle(eventKey === activeEventKey ? null : eventKey)
    if (onClick) {
      onClick(event)
    }
  }
}

export const AccordionToggle = forwardRef((props, ref) => {
  const { eventKey, onClick, children, ...rest } = props
  const toggleClick = useToggleClick(eventKey, onClick)
  const { activeEventKey } = useAccordContext()

  const toggleClassName = cn(
    s.toggle,
    {
      'border-bluebutton-default': activeEventKey === eventKey,
      'border-tablink-default': activeEventKey !== eventKey,
    },
    activeEventKey === eventKey ? s.toggleActive : null
  )

  return (
    <div className={toggleClassName} ref={ref} {...rest} onClick={toggleClick}>
      {children}
    </div>
  )
})

export const AccordionCollapse = forwardRef((props, ref) => {
  const { eventKey, children, ...rest } = props
  const { activeEventKey } = useAccordContext()
  return activeEventKey === eventKey ? (
    <div className={s.collapse} ref={ref} {...rest}>
      {children}
    </div>
  ) : null
})

export const AccordionContent = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <div className={s.accordionContent} ref={ref} {...rest}>
      {children}
    </div>
  )
})
