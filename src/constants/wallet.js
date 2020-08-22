export const walletLinks = [
  {
    id: 1,
    path: 'desktop-wallet',
    name: 'Verus Desktop',
    description: 'Windows, Linux, MacOS, and ARM',
  },
  {
    id: 2,
    path: 'mobile-wallet',
    name: 'Verus Mobile',
    description: 'iOS and Android',
  },
  {
    id: 3,
    path: 'command-wallet',
    name: 'Command Line',
    description: 'Windows, Linux, MacOS, and ARM',
    submenu: [{}, {}],
  },
  {
    id: 4,
    href: 'https://paperwallet.veruscoin.io/',
    name: 'Paper Wallet',
  },
  {
    id: 5,
    path: 'third-party',
    name: 'Third Party',
  },
];

export default walletLinks;
