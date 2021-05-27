import React from 'react'

interface CardButtonProps {
  text?: string
}

const CardButton: React.FC<CardButtonProps> = ({ text }) => {
  return <div>Enter{text}</div>
}

export default CardButton
