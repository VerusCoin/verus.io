import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';
import { NextSeo } from 'next-seo';

const Currencies = () => {
  return (
    <>
      <NextSeo
        title="Currencies & DeFi"
        description=""
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">
            Currencies & DeFi
          </h1>
          <p className="my-8">Content</p>
          <p className="my-8">Content</p>
          <h2 className="mt-16 text-2xl font-normal">H2</h2>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Currencies;
