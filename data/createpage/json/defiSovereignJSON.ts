import { ISovereign } from '@/types/createpage'

export const DefiSovereignJSON: ISovereign = {
  color: 'trans',
  header: {
    svg: 'finance',
    net: 'test',
    netID: 'Decentralized Finance',
    title: 'DeFi solutions for the world. Flexible, low fees and safe.',
  },
  singleData: {
    svg: 'plus',
    title: 'Inherit the full DeFi suite on your PBaaS-chain.',
  },

  data: [
    {
      svg: 'checkmark',
      title: 'DeFi Currencies',
      text:
        'Create DeFi currencies that are backed by other currencies. Our DeFi currencies function as automated market makers with liquidity pools attached to them.',
    },
    {
      svg: 'checkmark',
      title: 'Low Fee Conversions',
      text:
        'Currency conversions cost as high as 0.05% or as low as 0.025%. These extremely low fees go toward the protocol.',
    },
    {
      svg: 'checkmark',
      title: 'Kickstart Your Project',
      text:
        'Launch currencies on your blockchain or on Verus in a variety of ways.',
    },
    {
      didYouKnow: true,
      title: 'Did you know',
      text:
        'Front-running is eliminated due to the fact that all transactions in a block are solved simultaneously.',
      text2:
        'Interacting with the Verus DeFi system is safe. There are no risks of losing funds due to vulnerable smart contracts.',
    },
  ],
}
