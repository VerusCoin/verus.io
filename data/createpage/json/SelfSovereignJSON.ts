import { ISovereign } from '@/types/createpage'

export const SelfSovereignJSON: ISovereign = {
  color: 'grey',
  header: {
    svg: 'identity2',
    net: 'main',
    netID: 'VerusID',
    title:
      'VerusID is the self-sovereign and decentralized identity protocol for Verus. And so much more.',
  },
  singleData: {
    svg: 'plus',
    title: 'Inherit all VerusID functionality on your PBaaS-chain.',
    text: 'Set VerusID creation costs yourself on your PBaaS-chain.',
  },

  data: [
    {
      svg: 'checkmark',
      title: 'Self-Sovereign Identities',
      text:
        'Completely self-sovereign identity namespaces with no third party control. Fully revokable and recoverable. Use to create systems that empower individuals.',
    },
    {
      svg: 'checkmark',
      title: 'Non-Fungible Tokens (NFT+)',
      text:
        'Use as highly versatile non-fungible tokens. Create decentralized systems of ownership.',
    },
    {
      svg: 'checkmark',
      title: 'Exchange and Store Data',
      text:
        'Use the VerusID contentmap to store data. Use decentralized file systems (e.g. IPFS) for data exchange, including cross-chain communication.',
    },
    {
      svg: 'checkmark',
      title: 'Heightened Security',
      text:
        'Store cryptocurrencies in VerusID Vault for theft-proof workflows and vesting schedules. (Time)lock spend functions while still being able to stake and verify.',
    },
  ],
  closing:
    'And much more. Attach z-addresses. Send private messages. Multi-signature identities. Sign and verify data, messages and files.',
}
