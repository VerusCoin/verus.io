export const walletLinks = [
  {
    id: 1,
    path: 'desktop-wallet',
    name: 'Verus Desktop',
    description: 'Windows, Linux, macOS, and ARM',
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
    description: 'Windows, Linux, macOS, and ARM',
    submenu: [{}, {}],
  },
  {
    id: 4,
    path: 'paper-wallet',
    name: 'Paper Wallet',
    description: 'Use for cold storage',
  },
  {
    id: 5,
    path: 'third-party',
    name: 'Alternate Wallets',
    description: 'Not developed by Verus',
  },
];

export default walletLinks;
