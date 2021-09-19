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
          href: '/faq',
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
          href: 'https://explorer.verus.io/',
        },
        {
          name: 'verusID',
          href: '/verusid-lookup',
        },
        {
          name: 'verusSig',
          href: '/signatures',
        },
      ],
    },
    {
      category: 'socials',
      items: [
        {
          name: 'twitter',
          href: 'https://twitter.com/veruscoin',
        },
        {
          name: 'facebook',
          href: 'https://www.facebook.com/VerusCoin',
        },
        {
          name: 'telegram',
          href: 'https://t.me/veruscommunity',
        },
        {
          name: 'youtube',
          href: 'https://www.youtube.com/channel/UC_-KCHBxaDwSgNMdE3LMThg',
        },
        {
          name: 'discord',
          href: 'https://discord.com/invite/VRKMP2S',
        },
        {
          name: 'reddit',
          href: 'https://reddit.com/r/veruscoin',
        },
        {
          name: 'medium',
          href: 'https://medium.com/veruscoin',
        },
        {
          name: 'qq',
          href: 'https://qm.qq.com/cgi-bin/qm/qr?k=giXYZCf2m7UpB_I5uVs8yaxCB2oRuw3L&authKey=IiivzBvhfNBk3Pd8LJB9sn+GyrL9o39RkLB7k83Z+nLfZ2hBi0c3jbh9G0HNHjrV&noverify=0',
        },
        {
          name: 'bitcointalk',
          href: 'https://bitcointalk.org/index.php?topic=4070404.0',
        },
        {
          name: 'keybase',
          href: 'https://keybase.io/team/veruscoin',
        },
      ],
    },
    {
      category: 'createWithUs',
      items: [
        {
          name: 'discord',
          href: 'https://discord.gg/VRKMP2S',
        },
        {
          name: 'github',
          href: 'https://github.com/VerusCoin',
        },
        {
          name: 'documentation',
          href: 'https://docs.verus.io',
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
