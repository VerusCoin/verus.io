interface CardProps {
  cardText: string
  cards: Cards[]
}

interface Cards {
  svg?: string
  card: string
  buttonHref?: string
}

export const CardsJSON: Cards = [
  {
    svg: 'blockchainCreation',
    card: 'pbaasCard',
  },
  {
    svg: 'identity',
    card: 'verusCard',
  },
  {
    svg: 'finance',
    card: 'defiCard',
  },
  {
    svg: 'privacy',
    card: 'privCard',
  },
  {
    svg: 'interoperability',
    card: 'interopCard',
  },
  {
    svg: 'data',
    card: 'dataCard',
  },
  {
    svg: 'payment',
    card: 'paymentCard',
  },
]
