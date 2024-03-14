import { useState, createContext, useContext, useEffect } from 'react'

export const TabContext = createContext<any | null>(null)
export const AccordContext = createContext<any | null>(null)

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('Tab must contain content')
  }
  return context
}

export const useAccordContext = () => {
  const context = useContext(AccordContext)
  if (!context) {
    throw new Error('useAccordContext must be used within Accordion')
  }
  return context
}

export const useTabClick = (eventKey: number, onClick: any) => {
  const { onToggle } = useTabContext()

  return (event: any) => {
    onToggle(eventKey)
    if (onClick) {
      onClick(event)
    }
  }
}

export const useAccordClick = (eventKey: any, onClick: any) => {
  const { onToggle, activeEventKey } = useAccordContext()

  return (event: any) => {
    onToggle(eventKey === activeEventKey ? null : eventKey)
    if (onClick) {
      onClick(event)
    }
  }
}

export const useEventKey = (eventKey: any, onToggle: any) => {
  const [activeEventKey, setActiveEventKey] = useState(eventKey)
  useEffect(() => {
    setActiveEventKey(eventKey)
  }, [eventKey, onToggle])
  return [activeEventKey, setActiveEventKey]
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}
