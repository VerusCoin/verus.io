import { IMainNavigation } from '@/types/layouts'

export const MainNavigationJSON: IMainNavigation = {
  menu: [
    {
      category: 'technology',
      submenu: [
        {
          svg: 'build',
          link: 'createPage',
          href: '/create',
          description: true,
        },
        {
          svg: 'verusid',
          link: 'verusID',
          href: '/verusid',
          description: true,
        },
        {
          svg: 'foundations',
          link: 'foundationPage',
          href: '/foundations',
          description: true,
        },
        {
          svg: 'coin',
          link: 'coinPage',
          href: '/coin',
          description: true,
        },
        {
          svg: 'bridge',
          link: 'globalPage',
          href: '/global-network',
          description: true,
        },
      ],
    },
    { category: 'economy', href: '/economy' },
    {
      category: 'community',
      submenu: [
        {
          svg: 'people',
          link: 'peoplePage',
          href: '/people',
          description: true,
        },
        {
          svg: 'contribute',
          link: 'contributePage',
          href: '/contribute',
          description: true,
        },
      ],
    },
    {
      category: 'resources',
      submenu: [
        {
          svg: 'explorer',
          link: 'explorerPage',
          href: 'https://insight.verus.io/',
          description: true,
          external: true,
        },
        {
          svg: 'verusBridge',
          link: 'verusBridge',
          href: '/eth-bridge',
          description: true,
        },
        {
          svg: 'verusIdLookup',
          link: 'lookupPage',
          href: '/verusid-lookup',
          description: true,
        },
        {
          svg: 'verusSignatures',
          link: 'signaturePage',
          href: '/signatures',
          description: true,
        },
        {
          svg: 'papers',
          link: 'papersPage',
          href: '/papers',
          description: true,
        },
        {
          svg: 'exchanges',
          link: 'exchangesPage',
          href: '/exchanges',
          description: true,
        },

        {
          link: 'loginDemo',
          href: '/verusid-login-demo',
          description: true,
        },
      ],
    },
    {
      category: 'docs',
      submenu: [
        {
          svg: 'documentation',
          link: 'documentationPage',
          href: 'https://docs.verus.io',
          description: true,
          external: true,
        },
        {
          svg: 'supportWiki',
          link: 'wikiPage',
          href: 'https://wiki.verus.io/',
          description: true,
          external: true,
        },
        {
          svg: 'faq',
          link: 'faqPage',
          href: '/faq',
          description: true,
        },
      ],
    },
    { category: 'wallet', href: '/wallet', button: true },
  ],
}
