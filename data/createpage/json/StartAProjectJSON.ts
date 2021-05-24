import { IStartAProject } from '@/types/createpage'

export const StartAProjectJSON: IStartAProject = {
  header: {
    title: 'Start your project with Verus. Nothing can hold you back.',
    text:
      'Get started with a blockchain or currency on our rent-free, decentralized and permissionless public infrastructure.',
  },
  data: [
    {
      svgName: 'placeHolder',
      net: 'test',
      service: 'Public-Blockchains-as-a-Service (PBaaS)',
      header: 'Create secure and scalable blockchains out of the box.',
      text:
        'Create any number of blockchains, secured and serviced by the Verus network. Your PBaaS-chain inherits all Verus technology: privacy, interoperability, VerusID, Verus DeFi suite and more. PBaaS-chains are secured against 51% hash attacks and highly customizable.',
      question:
        '<span>Did you know?</span>  You can create PBaaS-chains on top of PBaaS-chains. This way we create an unlimited scalable ecosystem.',
    },
    {
      svgName: 'placeHolder',
      net: 'test',
      service: 'Currencies',
      header: 'Create multi-purpose currencies.',
      text:
        'Create currencies on top of Verus or any PBaaS-chain. Create currencies from PBaaS-chains on Verus or other PBaaS-chains. Use a variety of launch parameters and take advantage of the Verus DeFi suite.',
    },
  ],
  closing: {
    header: 'Launch blockchains and currencies to your standard.',
    text:
      'Kickstarter-like project launches. Minimum and maximum raised amounts. Pre-conversion discounts. Defined pre-mines. And much more.',
  },
  button: {
    href: '#',
    text: 'See documentation',
  },
}
