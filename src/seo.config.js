const title =
  'Truth and Privacy for All | Community driven open source cryptocurrency';
const titleTemplate = '%s | Verus';
const description =
  'We supply tools for individuals and organizations to build equitable frameworks for social and economic change';
const keywords = 'Open Source';
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
        url: `${process.env.NEXT_PUBLIC_SITEURL}/favicons/verus600x200.jfif`,
        alt: title,
        width: 600,
        height: 200,
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITEURL}/favicons/verusx320.gif`,
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
