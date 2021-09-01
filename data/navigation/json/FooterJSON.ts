import { IFooter } from '@/types/layouts'

export const FooterJSON: IFooter = {
  social: [
    {
      svg: 'discord',
      title: 'discord',
      href: '#',
      text: 'Discuss everything Verus',
      label: {
        color: 'green',
        text: 'over 5,200 members!',
      },
    },
    {
      svg: 'telegram',
      title: 'telegram',
      href: '#',
      text: 'Join the community channel',
    },
  ],
  links: [
    {
      category: 'general',
      items: [
        {
          name: 'openEconomy',
          href: '/Economy',
        },
        {
          name: 'community',
          href: '/community',
        },
        {
          name: 'faq',
          href: '/coin/#FAQ',
        },
        {
          name: 'exchanges',
          href: '/exchanges',
        },
      ],
    },
    {
      category: 'technology',
      items: [
        {
          name: 'create',
          href: '/create-with-verus',
        },
        {
          name: 'foundation',
          href: '/foundations',
        },
        {
          name: 'coin',
          href: '/coin',
        },
        {
          name: 'global',
          href: '/global-network',
        },
        {
          name: 'paper',
          href: '/papers',
        },
        {
          name: 'explorer',
          href: '#',
        },
        {
          name: 'verusID',
          href: '#',
        },
        {
          name: 'verusSig',
          href: '#',
        },
      ],
    },
    {
      category: 'socials',
      items: [
        {
          name: 'twitter',
          href: '#',
        },
        {
          name: 'facebook',
          href: '#',
        },
        {
          name: 'telegram',
          href: '#',
        },
        {
          name: 'youtube',
          href: '#',
        },
        {
          name: 'discord',
          href: '#',
        },
        {
          name: 'reddit',
          href: '#',
        },
        {
          name: 'medium',
          href: '#',
        },
        {
          name: 'qq',
          href: '#',
        },
        {
          name: 'bitcointalk',
          href: '#',
        },
        {
          name: 'keybase',
          href: '#',
        },
      ],
    },
    {
      category: 'createWithUs',
      items: [
        {
          name: 'discord',
          href: '#',
        },
        {
          name: 'github',
          href: '#',
        },
        {
          name: 'documentation',
          href: '#',
        },
        {
          name: 'brand',
          href: '#',
        },
      ],
    },
  ],
  copyright: {
    companyName: 'The Verus Project',
    links: [
      {
        href: '#',
        name: 'Privacy Policy',
      },
    ],
  },
}
