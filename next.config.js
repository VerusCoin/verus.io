const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  images: {
    domains: ['cdn-images-1.medium.com', 'www.cryptocompare.com'],
    minimumCacheTTL: 60,
    disableStaticImages: true,
  },
  reactStrictmode: true,
  async redirects() {
    return [
      {
        source: '/technology',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mining-and-staking',
        destination: '/economy',
        permanent: true,
      },
      {
        source: '/mining-and-staking/staking',
        destination: '/economy',
        permanent: true,
      },
      {
        source: '/mining-and-staking/mining_software',
        destination: 'https://docs.verus.io/economy/start-mining',
        permanent: true,
      },
      {
        source: '/mining-and-staking/pools',
        destination:
          'https://docs.verus.io/economy/start-mining.html#mining-pools',
        permanent: true,
      },
      {
        source: '/community',
        destination: '/people',
        permanent: true,
      },
      {
        source: '/verify-signatures',
        destination: '/signatures',
        permanent: true,
      },
      {
        source: '/get-vrsc',
        destination: '/exchanges',
        permanent: true,
      },
      {
        source: '/donate',
        destination: '/contribute',
        permanent: true,
      },
      {
        source: '/wallet/desktop-wallet',
        destination: '/wallet/desktop',
        permanent: true,
      },
      {
        source: '/wallet/mobile-wallet',
        destination: '/wallet/mobile',
        permanent: true,
      },
      {
        source: '/wallet/command-wallet',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/wallet/paper-wallet',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/wallet/third-party',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/docs/:path*',
        destination: '/papers/:path*',
        permanent: true,
      },
    ]
  },
})
