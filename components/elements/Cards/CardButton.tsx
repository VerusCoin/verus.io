import React, { ReactNode } from 'react'
import { Button } from '@/components/elements'

interface CardButtonProps {
  href: string
  children: ReactNode
}

const CardButton: React.FC<CardButtonProps> = ({
  href,
  children,
}): ReactNode => {
  return (
    <Button small as="a" href={href}>
      {children}
    </Button>
  )
}

export default CardButton
