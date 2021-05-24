import { IMainNavigation } from '@/types/layouts'

export const MainNavigationJSON: IMainNavigation = {
  menu: [
    {
      category: 'Technology',
      submenu: [
        {
          svg: 'build',
          link: 'Create with Verus',
          href: '/create-with-verus',
          description: 'Use our technology for your project',
        },
        {
          svg: 'foundations',
          link: 'Strong Foundations',
          href: '#',
          description: 'Built for a sustainable future',
        },
        {
          svg: 'coin',
          link: 'Coin',
          href: '/coin',
          description: 'Value and utility',
        },
        {
          svg: 'bridge',
          link: 'Bridges',
          href: '/bridge',
          description: 'Linking all cryptocurrencies together',
        },
      ],
    },
    { category: 'Open Economy', href: '#' },
    { category: 'Community', href: '#' },
    {
      category: 'Resources',
      submenu: [
        {
          svg: 'explorer',
          link: 'Explorer',
          href: '#',
          description: 'Browse addresses and transactions',
          external: true,
        },
        {
          svg: 'verusIdLookup',
          link: 'VerusID Lookup',
          href: '#',
          description: 'Search for registered identities',
        },
        {
          svg: 'verusSignatures',
          link: 'VerusID Signatures',
          href: '#',
          description: 'Verify messages, files and hashes',
        },
        {
          svg: 'papers',
          link: 'Papers',
          href: '#',
          description: 'Browse research papers',
        },
        {
          svg: 'exchanges',
          link: 'Exchanges',
          href: '#',
          description: 'Find out where to grab VRSC',
        },
      ],
    },
    {
      category: 'Docs & Support',
      submenu: [
        {
          svg: 'documentation',
          link: 'Documentation',
          href: '#',
          description: 'Learn and use Verus blockchain technology',
          external: true,
        },
        {
          svg: 'supportWiki',
          link: 'Support Wiki',
          href: '#',
          description: 'Guides and troubleshooting',
          external: true,
        },
        {
          svg: 'faq',
          link: 'FAQ',
          href: '#',
          description: 'Frequently asked questions',
        },
      ],
    },
    { category: 'Get Wallet', href: '#', button: true },
  ],
}
