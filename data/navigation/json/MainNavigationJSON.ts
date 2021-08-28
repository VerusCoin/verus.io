import { IMainNavigation } from '@/types/layouts'

export const MainNavigationJSON: IMainNavigation = {
  menu: [
    {
      category: 'technology',
      submenu: [
        {
          svg: 'build',
          link: 'createPage',
          href: '/create-with-verus',
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
          href: '#',
          description: true,
          external: true,
        },
        {
          svg: 'verusIdLookup',
          link: 'lookupPage',
          href: '#',
          description: true,
        },
        {
          svg: 'verusSignatures',
          link: 'signaturePage',
          href: '#',
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
      ],
    },
    {
      category: 'docs',
      submenu: [
        {
          svg: 'documentation',
          link: 'documentationPage',
          href: '#',
          description: true,
          external: true,
        },
        {
          svg: 'supportWiki',
          link: 'wikiPage',
          href: '#',
          description: true,
          external: true,
        },
        {
          svg: 'faq',
          link: 'faqPage',
          href: '/coin/#FAQ',
          description: true,
        },
      ],
    },
    { category: 'wallet', href: '/wallet', button: true },
  ],
}
