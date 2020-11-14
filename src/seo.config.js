const title =
  'Truth and Privacy for All | Community driven open source cryptocurrency';
const titleTemplate = '%s | Verus';
const description =
  'We supply tools for individuals and organizations to build equitable frameworks for social and economic change';

export const SEO = {
  titleTemplate,
  description,
  canonical: 'https://verus.io',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://verus.io',
    title,
    description,
    images: [
      {
        url: 'https://verus.io/images/logos/verus_og_image.png',
        alt: title,
        width: 1200,
        height: 630,
      },
      {
        url: 'https://verus.io/favicons/verusx320.gif',
        alt: title,
        width: 320,
        height: 320,
      },
    ],
  },
  twitter: {
    handle: '@veruscoin',
    site: '@veruscoin',
    cardType: 'summary_large_image',
  },
};
