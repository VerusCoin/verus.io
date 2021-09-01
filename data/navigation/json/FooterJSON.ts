import { IFooter } from '@/types/layouts'

export const FooterJSON: IFooter = {
  social: [
    {
      svg: 'discordIcon',
      title: 'discord',
      href: 'https://discord.com/invite/VRKMP2S',

      label: {
        color: 'green',
      },
    },
    {
      svg: 'telegramIcon',
      title: 'telegram',
      href: 'https://t.me/veruscommunity',
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
          href: 'https://t.me/veruscommunity',
        },
        {
          name: 'youtube',
          href: '#',
        },
        {
          name: 'discord',
          href: 'https://discord.com/invite/VRKMP2S',
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
        name: 'privacyPolicy',
      },
    ],
  },
}
