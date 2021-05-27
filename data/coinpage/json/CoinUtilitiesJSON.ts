import { ICoinUtilities } from '@/types/coinpage'

export const CoinUtilitiesJSON: ICoinUtilities = {
  title: '$VRSC is a coin full of energy and utility.',
  data: [
    {
      net: 'main',
      title: 'Payments',
      text: 'The $VRSC coin serves as the essential payment primitive for the whole Verus ecosystem.',
    },
    {
      net: 'main',
      title: 'Staking',
      text: 'Anyone who has $VRSC can start staking. No minimum amounts required.',
      link: {
        text: 'More on our Open Economy',
        href: '#',
      },
    },
    {
      net: 'main',
      title: 'VerusID',
      text: 'Pay $VRSC to the protocol to create a VerusID.',
      link: {
        text: 'More on VerusID',
        href: '',
        external: true,
      },
    },
    {
      net: 'test',
      title: 'Currencies',
      text: 'Pay $VRSC to the protocol to create currencies.',
      link: {
        text: 'Earn in our Open Economy',
        href: '#',
        external: true,
      },
    },
    {
      net: 'test',
      title: 'Blockchains',
      text: 'Pay $VRSC to the protocol to create blockchains.',
      link: {
        text: 'Build with PBaaS-chains',
        href: '#',
        external: true,
      },
    },
    {
      net: 'test',
      title: 'DeFi',
      text: 'All DeFi currencies on the Verus blockchain must have $VRSC in its reserve.',
      link: {
        text: 'More on decentralized finance',
        href: '#',
        external: true,
      },
    },
  ],
}
