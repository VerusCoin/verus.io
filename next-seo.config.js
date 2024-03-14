const title = 'Verus - Truth and Privacy for All'
const description =
  'Use Verus scalable public infrastructure and blockchain technology to create products, services and systems. Or start earning in the global network economy.'

export const SEO = {
  canonical: process.env.NEXT_PUBLIC_SITEURL,

  openGraph: {
    type: 'website',
    locale: 'en_US',

    url: process.env.NEXT_PUBLIC_SITEURL,
    title,
    description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITEURL}/images/open_graph_image.png`,
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
}
