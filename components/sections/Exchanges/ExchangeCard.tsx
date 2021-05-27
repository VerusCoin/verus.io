import React from 'react'
import { IExchange } from '@/types/exchanges'

const ExchangeCard: React.FC<IExchange> = ({ logo, url, name }) => {
  return (
    <>
      <div>Exchange Here</div>
      <div>{logo}</div>
      <div>{url}</div>
      <div>{name}</div>
    </>
  )
}

export default ExchangeCard
