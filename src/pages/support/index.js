import { NextSeo } from 'next-seo'
import { IndexPage, SlugMenu } from '@src/components'

// need SupportPages list to be created on dynamics
const SupportPages = [
  {
    path: 'support',
    name: 'Place Holder',
    description: 'Place holder for future links',
  },
]

const Support = () => {
  const nextRoute = SupportPages[0]
  return (
    <>
      <NextSeo
        title=""
        description=""
        additionalMetaTags={[
          {
            name: 'keywords',
            content: '',
          },
        ]}
      />
      <IndexPage
        menuList={SupportPages}
        menuRef="/support"
        nextRoutePath={`/support/${nextRoute.path}`}
        nextRouteName={nextRoute.name}
      >
        <h1 className="p-0 m-0 text-4xl font-normal">Verus Support Wiki</h1>
        <p className="my-8">
          Content needs to be defaulted. Doesn't really Change or comes from
          wiki mdx section
        </p>
        <h2 className="mt-16 text-2xl font-normal">Support Sections</h2>
        <p className="my-8">Need new style of menu slugs here</p>
      </IndexPage>
    </>
  )
}

export default Support
