module.exports = {
  async rewrites() {
    return [
      {
        source: '/downloads/:slug',
        destination: '/docs/:slug',
      },
    ];
  },
  poweredByHeader: false,
};
