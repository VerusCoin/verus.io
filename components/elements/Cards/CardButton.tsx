import React, { ReactNode } from 'react'
import { Button } from '@/components/elements'

interface Props {
  href: string
  children: ReactNode
}

const CardButton: React.FC<Props> = ({ href, children }) => {
  return (
    <Button small as="a" href={href}>
      {children}
    </Button>
  )
}

export default CardButton
