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
          href: '/economy',
        },
        {
          name: 'people',
          href: '/people',
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
          href: '/create',
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
          href: 'https://insight.verus.io/',
          external: true,
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
          external: true,
        },
        {
          name: 'facebook',
          href: 'https://www.facebook.com/VerusCoin',
          external: true,
        },
        {
          name: 'telegram',
          href: 'https://t.me/veruscommunity',
          external: true,
        },
        {
          name: 'youtube',
          href: 'https://www.youtube.com/channel/UC_-KCHBxaDwSgNMdE3LMThg',
          external: true,
        },
        {
          name: 'discord',
          href: 'https://discord.com/invite/VRKMP2S',
          external: true,
        },
        {
          name: 'reddit',
          href: 'https://reddit.com/r/veruscoin',
          external: true,
        },
        {
          name: 'medium',
          href: 'https://medium.com/veruscoin',
          external: true,
        },
        {
          name: 'qq',
          href: 'https://qm.qq.com/cgi-bin/qm/qr?k=giXYZCf2m7UpB_I5uVs8yaxCB2oRuw3L&authKey=IiivzBvhfNBk3Pd8LJB9sn+GyrL9o39RkLB7k83Z+nLfZ2hBi0c3jbh9G0HNHjrV&noverify=0',
          external: true,
        },
        {
          name: 'bitcointalk',
          href: 'https://bitcointalk.org/index.php?topic=4070404.0',
          external: true,
        },
        {
          name: 'keybase',
          href: 'https://keybase.io/team/veruscoin',
          external: true,
        },
      ],
    },
    {
      category: 'createWithUs',
      items: [
        {
          name: 'discord',
          href: 'https://discord.gg/VRKMP2S',
          external: true,
        },
        {
          name: 'github',
          href: 'https://github.com/VerusCoin',
          external: true,
        },
        {
          name: 'documentation',
          href: 'https://docs.verus.io',
          external: true,
        },
        {
          name: 'brand',
          href: 'https://github.com/VerusCoin/Media-Assets',
          external: true,
        },
        {
          name: 'contribute',
          href: '/contribute',
        },
      ],
    },
  ],
  copyright: {
    companyName: 'The Verus Project',
    links: [
      {
        href: '/privacy-policy',
        name: 'privacyPolicy',
      },
    ],
  },
}
