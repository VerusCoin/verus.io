const title =
  'Truth and Privacy for All | Community driven open source cryptocurrency';
const titleTemplate = '%s | Verus';
const description =
  'We supply tools for individuals and organizations to build equitable frameworks for social and economic change';

export const SEO = {
  titleTemplate,
  description,
  canonical: process.env.NEXT_PUBLIC_SITEURL,
  openGraph: {
    type: 'website',
    locale: 'en',
    url: process.env.NEXT_PUBLIC_SITEURL,
    title,
    description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITEURL}/images/logos/verus_og_image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@veruscoin',
    site: '@veruscoin',
    cardType: 'summary_large_image',
  },
};
